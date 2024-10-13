import React from 'react';
import Header from '../components/header_and_footer/Header';
import AboutUs from '@/components/homepage/AboutUs';
import GiftCard from '@/components/homepage/GiftCard';
import HomePage from '@/components/homepage/HomePage';
import Footer from '../components/header_and_footer/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <HomePage />
      <AboutUs />
      <GiftCard />
      <Footer />
    </div>
  );
}