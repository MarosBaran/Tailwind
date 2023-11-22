import { useState } from "react";

const Form = ({ event, onClose, submitHandler }) => {
  const [title, setTitle] = useState(event.title ? event.title : "");
  const [location, setLocation] = useState(
    event.location ? event.location : ""
  );
  const [date, setDate] = useState(event.date ? event.date : "");
  const [description, setDescription] = useState(
    event.description ? event.description : ""
  );
  const [image, setImage] = useState(event.image ? event.image : "");
  const [category, setCategory] = useState(
    event.category ? event.category : ""
  );

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedEvent = {
      title,
      location,
      description,
      category,
      image,
      date: formatDate(date),
    };
    submitHandler(updatedEvent);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-items-center items-center"
    >
      <label className="font-bold font-mono sm:text-xl text-lg  text-light-green py-2">
        Title
      </label>
      <input
        type="text"
        className="border-2 border-green rounded-lg w-11/12 sm:w-3/4 text-center"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label className="font-bold font-mono sm:text-xl text-lg  text-light-green py-2">
        Location
      </label>
      <input
        type="text"
        className="border-2 border-green rounded-lg w-11/12 sm:w-3/4 text-center"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <label className=" font-bold font-mono sm:text-xl text-lg text-light-green py-2 ">
        Image
      </label>
      <input
        type="text"
        className="border-2 border-green rounded-lg w-11/12 sm:w-3/4  text-center"
        placeholder="Enter image url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <label className="font-bold font-mono sm:text-xl text-lg  text-light-green py-2">
        Date
      </label>
      <input
        type="date"
        className="border-2 border-green rounded-lg w-11/12 sm:w-3/4  text-center"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <label className="font-bold font-mono sm:text-xl text-lg  text-light-green py-2">
        Category
      </label>
      <select
        className="border-2 border-green rounded-lg w-11/12 sm:w-3/4  text-center"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select category</option>
        <option value="sports">Sports</option>
        <option value="tech">Tech</option>
        <option value="music">Music</option>
        <option value="food">Food</option>
        {/* Add more categories as needed */}
      </select>
      <label className="font-bold font-mono sm:text-xl text-lg  text-light-green py-2">
        Description
      </label>
      <textarea
        type="text"
        className="border-2 border-green rounded-lg  w-11/12 h-28  "
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="flex flex-row justify-items-center items-center ">
        <button
          className="bg-green hover:bg-light-green text-white font-bold py-2 w-28  px-4 mx-4 rounded-full mt-4"
          type="submit"
        >
          Save
        </button>
        <button
          onClick={onClose}
          className="bg-green hover:bg-light-green text-white font-bold py-2 w-28   px-4 mx-4 rounded-full mt-4"
          type="button"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Form;
