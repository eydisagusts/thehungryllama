import React from 'react';
import Header from '../components/header_and_footer/Header';
import Footer from '../components/header_and_footer/Footer';
import ReservationPage from '../components/reservationpage/ReservationPage';

export default function Reservations() {
    return (
      <div>
        <Header />
        <ReservationPage />
        <Footer />
      </div>
    );
}