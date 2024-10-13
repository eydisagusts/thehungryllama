import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-center items-start md:items-center w-full p-8 md:p-16 bg-footerBrown text-black font-poppins text-base md:text-lg">
      <div className="flex flex-col mb-8 md:mb-0 md:mr-20 text-center md:text-left">
        <p className="font-semibold">The Hungry Llama</p>
        <p>1404 Food Road</p>
        <p>Phone: 555-3212</p>
        <p>frontdesk@hungryllama.com</p>
      </div>
      <div className="flex flex-col text-center md:text-left md:ml-20">
        <p className="font-semibold">Opening Hours</p>
        <p>Monday - Thursday: 11:00 - 20:00</p>
        <p>Fridays - Saturdays: 10:00 - 22:00</p>
        <p>Sundays: 10:00 - 20:00</p>
      </div>
    </footer>
  );
};

export default Footer;
