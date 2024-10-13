import React from 'react';
import Header from '../components/header_and_footer/Header';
import Footer from '../components/header_and_footer/Footer';
import MenuPage from '../components/menupage/MenuPage';

export default function Menu() {
  return (
    <div>
      <Header />
      <MenuPage />
      <Footer />
    </div>
  );
}