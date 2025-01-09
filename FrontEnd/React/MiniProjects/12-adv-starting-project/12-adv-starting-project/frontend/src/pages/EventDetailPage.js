import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const { eventId } = useParams();
  return (
    <>
      <h1>EventDetailPage</h1>
      <p>Event ID: {eventId}</p>
    </>
  );
};

export default EventDetailPage;
