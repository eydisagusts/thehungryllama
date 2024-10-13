import type { FC } from "react";
import Link from 'next/link';

const HomePage: FC = () => {
  return (
    <div className="bg-lightBrown">
      <main className="relative flex flex-col items-center h-screen">
        <h2 className="font-poppins font-extralight text-center text-3xl text-black absolute top-16">
          Where Good Food Meets Great Company
        </h2>
        <img src="/images/hungry_llama.png" alt="The Hungry Llama" className="w-auto h-full object-cover" />
        <div className="absolute top-3/4 mt-20 xl:hidden">
          <Link href="/reservations" legacyBehavior>
            <a href="/reservations">
              <button
                type="button"
                className="bg-lightBrown text-black border-2 rounded-3xl shadow-gray-500 shadow-sm text-lg font-poppins font-extralight py-2 px-4"
              >
                RESERVATIONS
              </button>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;