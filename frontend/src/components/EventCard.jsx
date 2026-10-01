import { useNavigate } from 'react-router-dom';

function EventCard({ event, onFeedback }) {
  const navigate = useNavigate();

  const handleFeedbackClick = () => {
    if (onFeedback) {
      onFeedback(event.title);
      return;
    }

    navigate('/feedback', { state: { selectedEvent: event.title } });
  };

  return (
    <article className="event-card">
      <div className="event-badge">{event.category}</div>
      <h3>{event.title}</h3>
      <p className="event-description">{event.description}</p>

      <div className="event-meta">
        <span>{event.date}</span>
        <span>{event.location}</span>
      </div>

      <button type="button" className="primary-btn" onClick={handleFeedbackClick}>
        Give Feedback
      </button>
    </article>
  );
}

export default EventCard;
