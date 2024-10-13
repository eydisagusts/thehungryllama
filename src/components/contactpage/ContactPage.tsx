import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { useRouter } from 'next/router';

const ContactPage = () => {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Form submitted');
        router.push('/contactreceived');

    };

  return (
    <div className="bg-lightBrown text-black font-poppins h-full p-10">
      <div>
        <h1 className="text-center font-semibold text-5xl">CONTACT US</h1>
      </div>
      <div className="flex flex-col font-poppins mt-10 ml-32">
        <h2 className="font-semibold text-3xl">ADDRESS</h2>
        <div className="font-extralight text-lg mt-5">
          <p>1404 Food Road</p>
          <p>REYKJAVÍK</p>
          <p>ICELAND</p>
        </div>

        <div>
          <div>
            <h2 className="font-semibold text-3xl mt-10">CONTACT</h2>
          </div>
          <div className="font-extralight text-lg mt-5">
            <p className="font-extralight text-lg">(354) 555-3212</p>
            <p className="font-extralight text-lg">frontdesk@hungryllama.com</p>
          </div>
        </div>

        <div className="flex mt-10">
          <div className="w-1/2 pr-10">
            <div>
              <h2 className="font-semibold text-lg">
                FOLLOW US ON SOCIAL MEDIA!
              </h2>
            </div>
            <div className="flex items-center space-x-4 mt-3">
              <FaFacebookF className="text-black w-6 h-6" />
              <FaInstagram className="text-black w-6 h-6" />
              <FaTiktok className="text-black w-6 h-6" />
            </div>
            <div className="font-extralight text-lg mt-3">
              <p className="font-extralight text-lg">#thehungryllama</p>
            </div>
          </div>

          <div
            className="w-1/2"
            style={{ marginTop: "-21rem", marginRight: "32rem" }}
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-lg font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-lg font-medium">
                  Choose One
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="general">General Request</option>
                  <option value="restaurant">Restaurants</option>
                  <option value="office">Office</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium">
                  Enter your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="text-white bg-black opacity-50 p-2 rounded-3xl w-40 h-12 mt-8 ml-28"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
