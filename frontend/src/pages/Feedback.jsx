import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const initialFormData = {
  fullName: '',
  email: '',
  event: '',
  rating: '',
  comments: '',
};

function Feedback() {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    if (location.state?.selectedEvent) {
      setFormData((prev) => ({
        ...prev,
        event: location.state.selectedEvent,
      }));
    }
  }, [location.state]);

  useEffect(() => {
  fetch('http://localhost:5216/api/feedback')
    .then((response) => response.json())
    .then((data) => {
      setFeedbacks(data);
    })
    .catch((error) => {
      console.error('Error fetching feedback:', error);
    });
}, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setIsSubmitted(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.event.trim()) {
      newErrors.event = 'Please select an event.';
    }

    if (!formData.rating) {
      newErrors.rating = 'Please select a rating.';
    }

    if (!formData.comments.trim()) {
      newErrors.comments = 'Comments are required.';
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  const validationErrors = validateForm();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    setIsSubmitted(false);
    return;
  }

  setErrors({});
  setIsSubmitted(false);

  try {
   const response = await fetch('http://localhost:5216/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        rating: Number(formData.rating),
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit feedback.');
    }

    setIsSubmitted(true);
    setFormData(initialFormData);
  } catch (error) {
    console.error('Error submitting feedback:', error);
    setErrors({
      submit: 'Unable to submit feedback. Please try again.',
    });
  }
};

  return (
    <section className="page-section form-page">
      <div className="container form-layout">
        <div className="section-heading left form-intro">
          <span className="eyebrow">Share your experience</span>
          <h2>Submit your event feedback</h2>
          <p>
            Your feedback helps us improve future events and create better experiences for all attendees.
          </p>
        </div>

        <form className="feedback-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="field-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                className={errors.fullName ? 'input-error' : ''}
                placeholder="Enter your full name"
              />
              {errors.fullName && <span className="error-message">{errors.fullName}</span>}
            </div>

            <div className="field-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'input-error' : ''}
                placeholder="Enter your email"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="event">Select Event</label>
            <select
              id="event"
              name="event"
              value={formData.event}
              onChange={handleChange}
              className={errors.event ? 'input-error' : ''}
            >
              <option value="">Choose an event</option>
              <option value="AI & Machine Learning Workshop">AI & Machine Learning Workshop</option>
              <option value="Web Development Bootcamp">Web Development Bootcamp</option>
              <option value="Cloud Computing Seminar">Cloud Computing Seminar</option>
              <option value="Technology Innovation Summit">Technology Innovation Summit</option>
            </select>
            {errors.event && <span className="error-message">{errors.event}</span>}
          </div>

          <div className="field-group">
            <label htmlFor="rating">Rating</label>
            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className={errors.rating ? 'input-error' : ''}
            >
              <option value="">Select a rating</option>
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Very Good</option>
              <option value="3">3 - Good</option>
              <option value="2">2 - Fair</option>
              <option value="1">1 - Poor</option>
            </select>
            {errors.rating && <span className="error-message">{errors.rating}</span>}
          </div>

          <div className="field-group">
            <label htmlFor="comments">Comments</label>
            <textarea
              id="comments"
              name="comments"
              rows="5"
              value={formData.comments}
              onChange={handleChange}
              className={errors.comments ? 'input-error' : ''}
              placeholder="Tell us what you liked or what could be improved"
            />
            {errors.comments && <span className="error-message">{errors.comments}</span>}
          </div>

          <div className="form-actions">
            <button type="submit" className="primary-btn">
              Submit Feedback
            </button>
            <button type="button" className="secondary-btn" onClick={() => navigate('/events')}>
              View Events
            </button>
          </div>

            <div className="submitted-feedback">
  <h2>Submitted Feedback</h2>

  {feedbacks.map((feedback) => (
    <div className="feedback-card" key={feedback.id}>
      <p><strong>Name:</strong> {feedback.fullName}</p>
      <p><strong>Email:</strong> {feedback.email}</p>
      <p><strong>Event:</strong> {feedback.event}</p>
      <p><strong>Rating:</strong> {feedback.rating}</p>
      <p><strong>Comments:</strong> {feedback.comments}</p>
    </div>
  ))}
</div>

          {errors.submit && (
  <div className="error-message" role="alert">
    {errors.submit}
  </div>
)}

          {isSubmitted && (
            <div className="success-message" role="status">
              Feedback submitted successfully. Thank you for sharing your experience!
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Feedback;
