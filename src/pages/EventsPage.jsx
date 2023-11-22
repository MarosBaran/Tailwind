import Events from "../components/Events";
import { fetchEvents } from "../util/http";
import { useQuery } from "@tanstack/react-query";
import LoadingIndicator from "../components/UI/LoadingIndicator";

const EventsPage = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["events"],
    queryFn: () => fetchEvents(),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
  });

  let content = <p>Here should be displayed list of events</p>;

  if (isLoading) {
    content = <LoadingIndicator />;
  }
  if (isError) {
    content = <div>Error loading events: {error.message}</div>;
  }

  if (data) {
    const eventsArray = Object.keys(data).map((id) => ({
      id,
      ...data[id],
    }));
    content = <Events events={eventsArray} />;
  }

  return content;
};

export default EventsPage;
