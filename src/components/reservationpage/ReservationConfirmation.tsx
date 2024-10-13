const ReservationConfirmed = () => {
  return (
    <div className="bg-lightBrown text-center font-poppins min-h-screen flex flex-col justify-center items-center p-6 md:p-10 lg:p-16">
      <h1 className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6">
        YOUR RESERVATION HAS BEEN CONFIRMED
      </h1>
      <p className="text-black text-base sm:text-lg md:text-xl mt-3">
        We've sent you an email confirmation
      </p>
      <p className="text-black text-base sm:text-lg md:text-xl mt-6">
        Thank you for choosing The Hungry Llama, we're looking forward to seeing
        you!
      </p>
    </div>
  );
};

export default ReservationConfirmed;
