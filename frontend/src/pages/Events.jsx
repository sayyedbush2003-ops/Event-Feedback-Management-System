import { useNavigate } from 'react-router-dom';
import EventCard from '../components/EventCard';

const events = [
  {
    title: 'AI & Machine Learning Workshop',
    description: 'Learn practical AI concepts, real-world applications, and machine learning workflows.',
    date: 'April 18, 2026',
    location: 'Innovation Center, Colombo',
    category: 'Artificial Intelligence',
  },
  {
    title: 'Web Development Bootcamp',
    description: 'Hands-on training covering responsive design, modern JavaScript, and full-stack concepts.',
    date: 'May 02, 2026',
    location: 'Tech Lab, Kandy',
    category: 'Web Development',
  },
  {
    title: 'Cloud Computing Seminar',
    description: 'Discover cloud architecture, deployment strategies, and industry best practices for scalable systems.',
    date: 'May 20, 2026',
    location: 'Digital Hub, Galle',
    category: 'Cloud',
  },
  {
    title: 'Technology Innovation Summit',
    description: 'Hear from leaders, innovators, and developers shaping the future of digital transformation.',
    date: 'June 08, 2026',
    location: 'Grand Conference Hall, Colombo',
    category: 'Innovation',
  },
];

function Events() {
  const navigate = useNavigate();

  const handleFeedback = (eventTitle) => {
    navigate('/feedback', { state: { selectedEvent: eventTitle } });
  };

  return (
    <section className="page-section">
      <div className="container">
        <div className="section-heading center">
          <span className="eyebrow">Upcoming Events</span>
          <h2>Explore our events</h2>
        </div>

        <div className="event-grid">
          {events.map((event) => (
            <EventCard key={event.title} event={event} onFeedback={handleFeedback} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
