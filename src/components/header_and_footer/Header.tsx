import { type FC, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleAboutUsClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (router.pathname !== "/homepage") {
      router.push("/homepage#about");
    } else {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-lightBrown">
      <header className="flex justify-between items-center p-4 w-full">
        <div className="flex items-center">
          <div className="xl:hidden mr-10">
            <button type="button" onClick={toggleMenu} className="text-black">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <nav className="hidden xl:flex space-x-4 text-lg gap-8 ml-10">
            <Link href="/homepage" legacyBehavior>
              <a
                href="/homepage"
                className="font-poppins font-extralight text-black"
              >
                HOME
              </a>
            </Link>
            <Link href="/menu" legacyBehavior>
              <a
                href="/menu"
                className="font-poppins font-extralight text-black"
              >
                MENU
              </a>
            </Link>
            <button
              type="button"
              className="font-poppins font-extralight text-black bg-transparent border-none cursor-pointer"
              onClick={handleAboutUsClick}
            >
              ABOUT US
            </button>
            <Link href="/contact" legacyBehavior>
              <a
                href="/contact"
                className="font-poppins font-extralight text-black"
              >
                CONTACT
              </a>
            </Link>
          </nav>
        </div>
        <h1 className="font-poppins font-semibold text-center text-24px text-black absolute left-1/2 transform -translate-x-1/2">
          THE HUNGRY LLAMA
        </h1>
        <div className="hidden xl:flex">
          <Link href="/reservations" legacyBehavior>
            <a href="/reservations">
              <button
                type="button"
                className="bg-lightBrown text-black border-2 rounded-3xl shadow-gray-500 shadow-sm text-lg font-poppins font-extralight mr-16 py-2 px-4 lg:py-1 lg:px-3"
              >
                RESERVATIONS
              </button>
            </a>
          </Link>
        </div>
      </header>
      {isOpen && (
        <nav className="flex flex-col items-start space-y-4 mt-4 xl:hidden bg-lightBrown pb-5 ml-10">
          <Link href="/homepage" legacyBehavior>
            <a
              href="/homepage"
              className="font-poppins font-extralight text-black"
            >
              HOME
            </a>
          </Link>
          <Link href="/menu" legacyBehavior>
            <a href="/menu" className="font-poppins font-extralight text-black">
              MENU
            </a>
          </Link>
          <button
            type="button"
            className="font-poppins font-extralight text-black bg-transparent border-none cursor-pointer"
            onClick={handleAboutUsClick}
          >
            ABOUT US
          </button>
          <Link href="/contact" legacyBehavior>
            <a
              href="/contact"
              className="font-poppins font-extralight text-black"
            >
              CONTACT
            </a>
          </Link>
          <Link href="/reservations" legacyBehavior>
            <a
              href="/reservations"
              className="font-poppins font-extralight text-black"
            >
              RESERVATIONS
            </a>
          </Link>
        </nav>
      )}
    </div>
  );
};

export default Header;
