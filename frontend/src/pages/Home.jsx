import { Link } from 'react-router-dom';

const highlights = [
  {
    title: 'Quick Insights',
    description: 'Gather participant feedback to understand what worked well and what can be improved.',
  },
  {
    title: 'Better Planning',
    description: 'Use event responses to shape future sessions, speakers, and experiences for attendees.',
  },
  {
    title: 'Stronger Engagement',
    description: 'Create memorable events by listening to audience needs and evolving each experience.',
  },
];

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="eyebrow">Event Experience Platform</span>
            <h1>Event Feedback Management System</h1>
            <p>
              Collect, review, and improve event experiences with a simple and professional
              feedback workflow for every attendee.
            </p>

            <div className="cta-group">
              <Link to="/events" className="primary-btn">
                Explore Events
              </Link>
              <Link to="/feedback" className="secondary-btn">
                Give Feedback
              </Link>
            </div>
          </div>

          <div className="hero-panel" aria-label="Event summary panel">
            <div className="mini-card">
              <strong>120+</strong>
              <span>Feedback submissions</span>
            </div>
            <div className="mini-card accent">
              <strong>8</strong>
              <span>Upcoming events</span>
            </div>
            <div className="mini-card">
              <strong>4.8/5</strong>
              <span>Average rating</span>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Why it matters</span>
            <h2>Why event feedback is important</h2>
          </div>

          <div className="highlight-grid">
            {highlights.map((item) => (
              <div key={item.title} className="feature-card">
                <div className="feature-icon">✓</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
