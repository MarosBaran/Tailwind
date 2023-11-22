import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const fetchEvents = async () => {
  const response = await fetch(
    "https://eventsproject-2302e-default-rtdb.europe-west1.firebasedatabase.app/events.json"
  );

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const data = await response.json();

  // Map the data to an array of event objects
  const events = Object.keys(data).map((key) => ({
    id: key,
    ...data[key].event,
  }));

  return events;
};
export const fetchEventById = async (id) => {
  const response = await fetch(
    `https://eventsproject-2302e-default-rtdb.europe-west1.firebasedatabase.app/events/${id}.json`
  );

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const data = await response.json();

  return { id, ...data.event };
};

export const editEvent = async ({ id, event }) => {
  const response = await fetch(
    `https://eventsproject-2302e-default-rtdb.europe-west1.firebasedatabase.app/events/${id}.json`,
    {
      method: "PUT",
      body: JSON.stringify({ event }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const data = await response.json();

  return { id, ...data.event };
};

export const deleteEvent = async ({ id }) => {
  const response = await fetch(
    `https://eventsproject-2302e-default-rtdb.europe-west1.firebasedatabase.app/events/${id}.json`,
    {
      method: "DELETE",
    }
  );
  //make error logic
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  return response.json();
};

export const createEvent = async (event) => {
  const response = await fetch(
    "https://eventsproject-2302e-default-rtdb.europe-west1.firebasedatabase.app/events.json",
    {
      method: "POST",
      body: JSON.stringify(event),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  //make error logic
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  const data = await response.json();

  return data;
};
