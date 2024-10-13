import Link from "next/link";

const MenuPage = () => {
  return (
    <div className="flex flex-col bg-lightBrown font-poppins min-h-screen">
      <div className="text-center bg-lightBrown p-6 md:p-10">
        <h1 className="font-extralight text-3xl sm:text-4xl md:text-5xl text-black">
          MENU
        </h1>
      </div>
      <section className="text-center text-black text-xl sm:text-lg md:text-2xl font-semibold mt-6 md:mt-10">
        <h6 className="tracking-wide">STARTERS</h6>
        <div className="text-lg sm:text-md md:text-xl font-extralight mt-4 space-y-4 px-4 sm:px-8 md:px-20 leading-relaxed">
          <p>
            Chicken Caesar Salad with Romaine Lettuce, Grilled Chicken, Parmesan
            Cheese, and Caesar Dressing
          </p>
          <p>
            Classic Cobb Salad with Grilled Chicken, Avocado, Bacon, Hard-Boiled
            Eggs, Tomatoes, and Blue Cheese Dressing
          </p>
          <p>
            Asian Chicken Salad with Shredded Chicken, Mandarin Oranges, Crispy
            Wontons, and Sesame Ginger Dressing
          </p>
        </div>
      </section>
      <section className="text-center text-black text-xl sm:text-lg md:text-2xl font-semibold mt-6 md:mt-10">
        <h6 className="tracking-wide">MAIN COURSE</h6>
        <div className="text-lg sm:text-md md:text-xl font-extralight mt-4 space-y-4 px-4 sm:px-8 md:px-20 leading-relaxed">
          <p>
            Southwest Chicken Salad with Grilled Chicken, Corn, Black Beans,
            Avocado, Tomatoes, and Chipotle Ranch Dressing
          </p>
          <p>
            Grilled Chicken Salad with Mixed Greens, Grilled Chicken, Cherry
            Tomatoes, Red Onion, and Balsamic Vinaigrette
          </p>
          <p>
            Buffalo Chicken Salad with Crispy Chicken Tenders, Mixed Greens,
            Carrots, Celery, Blue Cheese Crumbles, and Buffalo Ranch Dressing
          </p>
        </div>
      </section>
      <section className="text-center text-black text-xl sm:text-lg md:text-2xl font-semibold mt-6 md:mt-10">
        <h6 className="tracking-wide">SANDWICHES</h6>
        <div className="text-lg sm:text-md md:text-xl font-extralight mt-4 space-y-4 px-4 sm:px-8 md:px-20 leading-relaxed break-words">
          <p>
            Grilled Chicken Panini with Mozzarella Cheese, Roasted Red Peppers,
            and Pesto Mayo
          </p>
          <p>
            Chicken Salad Sandwich with Shredded Chicken, Grapes, Almonds, and
            Lettuce on Whole Wheat Bread
          </p>
          <p>
            Buffalo Chicken Wrap with Crispy Chicken Tenders, Mixed Greens, Blue
            Cheese Crumbles, and Buffalo Ranch Dressing in a Flour Tortilla
          </p>
        </div>
      </section>
      <section className="text-center text-black text-xl sm:text-lg md:text-2xl font-semibold mt-6 md:mt-10">
        <h6 className="tracking-wide">SIDES</h6>
        <div className="text-lg sm:text-md md:text-xl font-extralight mt-4 space-y-4 px-4 sm:px-8 md:px-20 leading-relaxed mb-16 flex-grow">
          <p>Sweet Potato Fries</p>
          <p>Garlic Parmesan Fries</p>
          <p>Grilled Vegetables</p>
        </div>
      </section>
      <div className="flex justify-center mb-16">
        <Link href="/reservations" legacyBehavior>
          <a href="/reservations">
            <button
              type="button"
              className="bg-lightBrown text-black border-2 rounded-3xl shadow-gray-500 shadow-sm text-lg font-poppins font-extralight py-2 px-4 lg:py-1 lg:px-3"
            >
              RESERVATIONS
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MenuPage;
