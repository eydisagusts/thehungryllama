const RequestReceived = () => {
  const handleHomeClick = () => {
    window.location.href = "/homepage";
  };

  return (
    <div className="flex flex-col min-h-screen bg-lightBrown font-poppins text-black text-center justify-center p-6">
      <h1 className="font-semibold text-5xl">We have received your message!</h1>
      <p className="font-extralight text-xl mt-6">
        Thank you for reaching out to us. We will answer your message as soon as
        possible!
      </p>

      <div>
        <button
          type="button"
          className="text-white font-extralight bg-darkRed p-2 rounded-3xl w-40 h-12 mt-8 mb-32"
          onClick={handleHomeClick}
        >
          HOME
        </button>
      </div>
    </div>
  );
};

export default RequestReceived;
