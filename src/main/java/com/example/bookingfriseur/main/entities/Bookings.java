package com.example.bookingfriseur.main.entities;

import com.fasterxml.jackson.annotation.JsonTypeId;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Bookings {

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getDate() {
        return date;
    }

    public String getBarber() {
        return barber;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private String firstName;
    private String lastName;
    private String date;
    private String barber;

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setBarber(String barber) {
        this.barber = barber;
    }
}
