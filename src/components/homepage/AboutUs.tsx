import type { FC } from "react";
import Image from "next/image";

const AboutUs: FC = () => {
  return (
    <div id="about" className="flex flex-col lg:flex-row text-left bg-greenBlue text-black font-poppins w-full h-full p-8 lg:p-16">
      <div className="lg:w-2/3 lg:ml-16">
        <h2 className="font-semibold text-3xl lg:text-5xl p-4">ABOUT US</h2>
        <p className="font-extralight text-base lg:text-lg p-4">
          Welcome to The Hungry Llama, a family-owned restaurant that offers a
          unique and unforgettable dining experience. Our restaurant is inspired
          by the bold flavors and warm hospitality of South America, and we
          pride ourselves on serving fresh and locally sourced ingredients. At
          The Hungry Llama, we believe that food is not just a necessity, but an
          adventure, and we aim to take our customers on a culinary journey
          through our carefully crafted menu. Whether you&apos;re in the mood
          for a hearty meal or a light bite, our diverse menu has something for
          everyone. We also offer a wide selection of refreshing beverages and
          cocktails to complement your meal. Come join us at The Hungry Llama,
          where good food meets great company.
        </p>
        <button type="button" className="text-white bg-black opacity-50 p-2 rounded-3xl w-32 lg:w-40 h-10 lg:h-12 mt-8">MENU</button>
      </div>
      <div className="lg:w-1/3 grid grid-cols-2 gap-2 opacity-90 mt-10 lg:mt-0">
        <div className="">
          <Image src="/images/bowl_photo1.png" alt="Bowl with food" width={200} height={200} className="w-full h-auto m-2 shadow-lg rounded-lg border-4" />
          <Image src="/images/sandwich1.png" alt="Sandwich with fillings" width={200} height={200} className="w-full h-auto m-2 shadow-lg rounded-lg border-4" />
        </div>
        <div className="">
          <Image src="/images/sandwich2.png" alt="Sandwich with fillings 2" width={200} height={200} className="w-full h-auto m-2 shadow-lg rounded-lg border-4" />
          <Image src="/images/wrap.png" alt="Delicious wrap" width={200} height={200} className="w-full h-auto m-2 shadow-lg rounded-lg border-4" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;