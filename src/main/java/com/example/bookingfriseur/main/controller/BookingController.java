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
        return (List<Bookings>) bookingRepository.findAll();
    }

    @PostMapping
    public Bookings create(@RequestBody final Bookings bookings){
        return bookingRepository.saveAndFlush(bookings);
    }

}
