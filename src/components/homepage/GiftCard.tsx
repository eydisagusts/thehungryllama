import type { FC } from "react";
import Image from "next/image";

const GiftCard: FC = () => {
  return (
    <div className="flex flex-col text-left bg-darkRed text-black font-poppins w-full h-full p-16">
      <div className="flex items-center">
        <div className="w-1/2 flex justify-center">
          <Image src="/images/gift_card2.jpg" alt="Gift Card" width={500} height={400} className="w-auto h-auto" />
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="font-semibold text-5xl p-4">Treat Your Friends!</h2>
          <p className="font-extralight text-lg p-4">
            Our Hungry Llama gift cards are perfect for any <br />
            <span className="block">occasion!</span>
          </p>

          <button type="button" className="text-white font-extralight bg-black opacity-65 p-2 rounded-3xl w-40 h-12 mt-8">PURCHASE</button>

        </div>
      </div>
    </div>
  );
};

export default GiftCard;