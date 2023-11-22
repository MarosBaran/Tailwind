import Modal from "./UI/Modal";
import { useState } from "react";
import { editEvent, queryClient } from "../util/http";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router";
import Form from "./UI/Form";

const EditEventDetail = ({ event, onClose }) => {
  const eventId = useParams().eventId;

  const { mutate } = useMutation({
    mutationFn: editEvent,
    onMutate: async (newEvent) => {
      await queryClient.cancelQueries("events");
      const previousEvents = queryClient.getQueryData("events");

      // Optimistically update the event data
      queryClient.setQueryData("events", (old) => ({
        ...old,
        [newEvent.id]: newEvent,
      }));

      return { previousEvents };
    },
    onError: (err, newEvent, context) => {
      // On error, roll back to the previous events data
      queryClient.setQueryData("events", context.previousEvents);
    },
    onSettled: () => {
      // Invalidate the query to refetch the data and update the UI
      queryClient.invalidateQueries(["events", eventId]);
      onClose();
    },
  });

  const handleSubmit = (updatedEvent) => {
    mutate({ id: eventId, event: updatedEvent });
  };
  return (
    <Modal>
      <Form event={event} onClose={onClose} submitHandler={handleSubmit} />
    </Modal>
  );
};

export default EditEventDetail;
