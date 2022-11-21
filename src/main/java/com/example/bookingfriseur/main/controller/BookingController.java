package com.example.bookingfriseur.main.controller;

import com.example.bookingfriseur.main.entities.Bookings;
import com.example.bookingfriseur.main.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    @GetMapping
    public List<Bookings> list() {
        return bookingRepository.findAll();
    }

    @PostMapping("/create")
    public Bookings create(@RequestBody Bookings bookings) {
        return bookingRepository.saveAndFlush(bookings);
    }


    @PutMapping("/accept/{id}")
    public ResponseEntity<Bookings> accept_update(@PathVariable int id, @RequestBody Bookings bookingsDetails) {
        Bookings updateBookings = bookingRepository.findById((long) id)
                .orElseThrow(() -> new ResourceNotFoundException("Booking doesn't exist with the id: " + id));

        updateBookings.setPending("accepted");
        bookingRepository.save(updateBookings);
        return ResponseEntity.ok(updateBookings);
    }

    @PutMapping("/decline/{id}")
    public ResponseEntity<Bookings> decline_update(@PathVariable int id, @RequestBody Bookings bookingsDetails) {
        Bookings updateBookings = bookingRepository.findById((long) id)
                .orElseThrow(() -> new ResourceNotFoundException("Booking doesn't exist with the id: " + id));

        updateBookings.setPending("declined");
        bookingRepository.save(updateBookings);
        return ResponseEntity.ok(updateBookings);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Bookings> delete_entry(@PathVariable int id, @RequestBody Bookings bookingsDetails) {
        Bookings deleteBookings = bookingRepository.findById((long) id)
                .orElseThrow(() -> new ResourceNotFoundException("Booking doesn't exist with the id: " + id));

        bookingRepository.delete(deleteBookings);
        return ResponseEntity.ok(deleteBookings);
    }

}