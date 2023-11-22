import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import EventDetail from "../components/EventDetail";
import { fetchEventById } from "../util/http";
import LoadingIndicator from "../components/UI/LoadingIndicator";

const EventDetailPage = () => {
  const eventId = useParams().eventId;

  const {
    data: eventData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["events", eventId],
    queryFn: () => fetchEventById(eventId),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
  });

  let content = <p>Here should be displayed detailed page of event</p>;
  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = <div>Error loading event</div>;
  }
  if (eventData) {
    content = <EventDetail event={eventData} />;
  }

  return <>{content}</>;
};

export default EventDetailPage;
