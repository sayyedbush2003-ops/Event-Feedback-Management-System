import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <h3>Event Feedback Management System</h3>
          <p>Collecting valuable insights to improve future experiences.</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/feedback">Feedback</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
