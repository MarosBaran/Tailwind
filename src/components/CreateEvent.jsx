import Modal from "./UI/Modal";
import { useState } from "react";
import { createEvent, queryClient } from "../util/http";
import { useMutation } from "@tanstack/react-query";
import Form from "./UI/Form";

const CreateEvent = ({ onClose }) => {
  const { mutate } = useMutation({
    mutationFn: createEvent,
    onError: (err, newEvent, context) => {
      console.error("Error creating event:", err);
    },
    onSuccess: () => {
      // Invalidate the query to refetch the data and update the UI
      queryClient.invalidateQueries("events");
      onClose();
    },
  });

  const createEventHandler = (newEvent) => {
    mutate({ event: newEvent });
  };

  return (
    <Modal>
      <p className="font-mono text-xl text-center text-blue">
        Create new Event
      </p>
      <Form onClose={onClose} event={""} submitHandler={createEventHandler} />
    </Modal>
  );
};

export default CreateEvent;
