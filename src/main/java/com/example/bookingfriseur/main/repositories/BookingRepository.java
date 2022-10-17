package com.example.bookingfriseur.main.repositories;

import com.example.bookingfriseur.main.entities.Bookings;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Bookings, Long> {
}
