package com.example.bookingfriseur.main.controller;

import com.example.bookingfriseur.main.entities.Bookings;
import com.example.bookingfriseur.main.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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
    public Bookings create(@RequestBody Bookings bookings){
        return bookingRepository.saveAndFlush(bookings);
    }

}
