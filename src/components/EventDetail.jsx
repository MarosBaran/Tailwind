import { useState } from "react";
import { deleteEvent, queryClient } from "../util/http";
import { useMutation } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditEventDetail from "./EditEventDetail";
import { useParams, useNavigate } from "react-router";

const EventDetail = ({ event }) => {
  const eventId = useParams().eventId;
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: deleteEvent,
    onError: (error) => {
      console.error("Error editing event:", error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["events", eventId]);
      navigate("/events");
    },
  });

  const [modal, setModal] = useState(false);

  const openModalHandler = () => {
    setModal(true);
  };
  const closeModalHandler = () => {
    setModal(false);
  };

  const deleteEventHandler = () => {
    toast(
      <div className=" p-4 w-full h-full text-black">
        <h4 className="font-mono text-center text-blue text-xl font-bold">
          Delete Event
        </h4>
        <p className="font-mono text-center text-light-green">
          Are you sure you want to delete this event?
        </p>
        <div className="flex flex-row justify-items-center items-center  ">
          <button
            className="bg-green hover:bg-light-green text-white w-28 font-bold py-2 m-auto rounded-full mt-4"
            onClick={() => {
              mutate({ id: eventId });
            }}
          >
            Confirm
          </button>
          <button
            className="  hover:bg-light-green text-green bg-light-blue w-28 font-bold py-2  rounded-full mt-4"
            onClick={() => {
              toast.dismiss();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        newestOnTop={true}
        closeOnClick
        autoClose={false}
      />

      {!event ? (
        <p>Loading</p>
      ) : (
        <>
          <h1 className="font-bold font-mono text-center text-4xl  sm:text-6xl text-blue py-4 sm:py-8 ">
            {event.title}
          </h1>
          <ul className=" flex flex-col justify-items-center items-center">
            <img
              src={event.image}
              className=" w-[350px] h-[200px] sm:w-[700px] sm:h-[350px]  rounded-3xl"
            />

            <li className="font-bold font-mono sm:text-xl text-lg  text-light-green py-2">
              <p>Location: {event.location}</p>
            </li>
            <li className="font-bold font-mono sm:text-xl text-lg  text-light-green py-2">
              <p>Date: {event.date}</p>
            </li>
            <li className="font-bold my-2 font-mono w-11/12 sm:w-1/2 text-center text-green">
              {event.description}
            </li>
            <div className="flex flex-row justify-items-center items-center ">
              <button
                className="bg-green hover:bg-light-green text-white w-28 font-bold py-2 px-4 mx-4 rounded-full mt-4"
                onClick={openModalHandler}
              >
                Edit
              </button>
              <button
                className="bg-green hover:bg-light-green text-white w-28 font-bold py-2 px-4 rounded-full mt-4"
                onClick={deleteEventHandler}
              >
                Delete
              </button>
            </div>
          </ul>
          {modal && (
            <EditEventDetail event={event} onClose={closeModalHandler} />
          )}
        </>
      )}
    </>
  );
};
export default EventDetail;
