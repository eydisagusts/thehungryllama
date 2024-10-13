import React from 'react';
import Header from '../components/header_and_footer/Header';
import Footer from '../components/header_and_footer/Footer';
import ReservationConfirmed from '../components/reservationpage/ReservationConfirmation';

const ReservationConfirmedPage = () => {
  return (
    <div>
      <Header />
      <ReservationConfirmed />
      <Footer />
    </div>
  );
};

export default ReservationConfirmedPage;