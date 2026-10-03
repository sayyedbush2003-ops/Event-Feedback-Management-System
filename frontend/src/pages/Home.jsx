
import { useEffect, useState } from 'react';
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
  const [feedbackCount, setFeedbackCount] = useState(0);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const fetchFeedbackStats = async () => {
      try {
        const response = await fetch('http://localhost:5216/api/feedback');

        if (!response.ok) {
          throw new Error('Failed to fetch feedback');
        }

        const data = await response.json();

        setFeedbackCount(data.length);

        const totalRating = data.reduce(
          (sum, feedback) => sum + Number(feedback.rating || 0),
          0
        );

        const average = data.length > 0 ? totalRating / data.length : 0;

        setAverageRating(average);
      } catch (error) {
        console.error('Error fetching feedback stats:', error);
      }
    };

    fetchFeedbackStats();
  }, []);

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
              <strong>{feedbackCount}</strong>
              <span>Feedback submissions</span>
            </div>
            <div className="mini-card accent">
              <strong>4</strong>
              <span>Available events</span>
            </div>
            <div className="mini-card">
              <strong>{averageRating.toFixed(1)}/5</strong>
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