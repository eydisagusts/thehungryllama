import React from 'react';
import Header from '../components/header_and_footer/Header';
import Footer from '../components/header_and_footer/Footer';
import ContactPage from '@/components/contactpage/ContactPage';

export default function Contact() {
  return (
    <div>
      <Header />
      <ContactPage />
      <Footer />
    </div>
  );
}