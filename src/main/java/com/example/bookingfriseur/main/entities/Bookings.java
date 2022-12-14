package com.example.bookingfriseur.main.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Bookings {

    public String getFirstName() {
        return first_name;
    }

    public String getLastName() {
        return last_name;
    }

    public String getDate() {
        return date;
    }

    public String getBarber() {
        return barber;
    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;

    private String first_name;
    private String last_name;
    private String date;
    private String barber;
    private String pending;
    public String getPending() {
        return pending;
    }

    public void setPending(String pending) {
        this.pending = pending;
    }



    public void setFirstName(String firstName) {
        this.first_name = firstName;
    }

    public void setLastName(String lastName) {
        this.last_name = lastName;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setBarber(String barber) {
        this.barber = barber;
    }
}
