import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const generateTimeOptions = (day: number) => {
  const times = [];
  let startHour = 0;
  let endHour = 0;

  if (day >= 1 && day <= 4) {
    // Monday - Thursday
    startHour = 11;
    endHour = 20;
  } else if (day === 5 || day === 6) {
    // Friday - Saturday
    startHour = 10;
    endHour = 22;
  } else if (day === 0) {
    // Sunday
    startHour = 10;
    endHour = 20;
  }

  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const timeString = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      times.push(timeString);
    }
  }

  return times;
};

const ReservationPage = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const router = useRouter();

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTime(e.target.value);
  };

  useEffect(() => {
    if (date) {
      const day = new Date(date).getDay();
      const times = generateTimeOptions(day);
      setAvailableTimes(times);
    }
  }, [date]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
    router.push("/reservationconfirmed");
  };

  return (
    <div className="bg-lightBrown text-center font-poppins p-5 md:p-10">
      <h1 className="text-black text-3xl font-semibold mb-6">
        RESERVE A TABLE!
      </h1>
      <form className="space-y-4 max-w-md mx-auto" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="date"
            className="block text-lg font-medium text-black"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={handleDateChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>
        <div>
          <label
            htmlFor="time"
            className="block text-lg font-medium text-black"
          >
            Time
          </label>
          <select
            id="time"
            name="time"
            value={time}
            onChange={handleTimeChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
          >
            <option value="">Select a time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="quantity"
            className="block text-lg font-medium text-black"
          >
            Quantity of people
          </label>
          <select
            id="quantity"
            name="quantity"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
          >
            {[...Array(10).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-black"
          >
            Name for the reservation
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium text-black"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-lg font-medium text-black"
          >
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="text-white bg-darkRed opacity-50 p-2 rounded-3xl w-full md:w-40 h-12 mt-8"
          >
            Reserve a table
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationPage;
