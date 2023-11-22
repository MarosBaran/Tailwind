import { Link } from "react-router-dom";
import { useState } from "react";
import CreateEvent from "./CreateEvent";

const Events = ({ events }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [showModal, setShowModal] = useState(false);

  const openModal = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const filteredEvents = events.filter((event) => {
    return (
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (category ? event.category === category : true)
    );
  });

  const searchEventsHandler = (e) => {
    setSearchQuery(e.target.value);
  };
  const filterCategoryHandler = (e) => {
    setCategory(e.target.value);
  };
  return (
    <>
      <div className="flex justify-between items-center w-3/4 m-auto mt-2">
        <h1 className="text-light-green text-xl sm:text-2xl font-bold text-center font-mono pt-4">
          All Events
        </h1>
        <Link
          to="/create-event"
          className="bg-blue hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded"
          onClick={openModal}
        >
          Create Event
        </Link>
      </div>
      <div className="w-3/4 m-auto mt-2">
        <input
          type="text"
          placeholder="Search events..."
          className="w-full px-3 py-2 placeholder-blue-gray-300 text-blue-gray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring-2 focus:ring-blue-200"
          onChange={searchEventsHandler}
        />
        <select
          onChange={filterCategoryHandler}
          className="  px-3 py-2 bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring-2 focus:ring-blue-200"
        >
          <option value="" className="font-bold">
            All Categories
          </option>
          <option value="sports">Sports</option>
          <option value="tech">Tech</option>
          <option value="music">Music</option>
          <option value="food">Food</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <ul className="w-3/4 text-center mt-4 sm:grid sm:grid-cols-3 sm:gap-4 justify-items-center m-auto sm:mt-12 ">
        {filteredEvents.map((event) => {
          return (
            <li key={event.id}>
              <div className="relative group hover:scale-105 hover:duration-300">
                <img
                  src={event.image}
                  className="w-96 h-52  group-hover:opacity-75  object-fill rounded-3xl"
                />
                <Link
                  to={`${event.id}`}
                  className="absolute bottom-0 font-mono font-bold rounded-bl-3xl rounded-br-3xl left-0 w-full bg-black text-white text-center opacity-0 group-hover:opacity-100 hover:text-blue transition-opacity duration-200 px-4 py-2"
                >
                  Detail
                </Link>
              </div>
              <div>
                <h2 className="text-blue font-bold font-mono">{event.title}</h2>
                <time className="text-light-green font-bold font-mono">
                  {event.date}
                </time>
              </div>
            </li>
          );
        })}
      </ul>
      {showModal && <CreateEvent onClose={closeModal} />}
    </>
  );
};

export default Events;
