import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate an API call with static data
    setTimeout(() => {
      // Simulate a successful response
      const simulatedResponse = {
        ok: true,
        message: 'Message sent successfully!',
      };

      if (simulatedResponse.ok) {
        setStatus(simulatedResponse.message);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus('Failed to send the message.');
      }

      setLoading(false);
    }, 1000); // Simulate a delay for the async operation
  };

  return (
    <div className="contact-us-container">
      <div className="contact-header">
        <h1 className="contact-title">We'd Love to Hear from You!</h1>
        <p className="contact-subtitle">Reach out with any questions, comments, or feedback.</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="input-animate"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="input-animate"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="input-animate"
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="input-animate"
          ></textarea>
        </div>
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {status && <div className="status-message">{status}</div>}
      <div className="floating-icons">
        <div className="icon email-icon">📧</div>
        <div className="icon phone-icon">📞</div>
        <div className="icon location-icon">📍</div>
      </div>
      <div className="background-circles">
        <div className="circle large-circle"></div>
        <div className="circle medium-circle"></div>
        <div className="circle small-circle"></div>
      </div>
    </div>
  );
};

export default ContactUs;
