'use client'
import React, { useState, useEffect } from 'react';

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000); // Delay modal by 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('');

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, course }),
      });

      if (response.ok) {
        setSubmissionStatus('Inquiry submitted successfully!');
        setName('');
        setPhone('');
        setCourse('');
        setTimeout(() => {
          handleClose();
        }, 1500); // Close modal after a short delay
      } else {
        setSubmissionStatus('Failed to submit inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>&times;</button>
        <h2>Get a Free Consultation</h2>
        <p>Fill out the form below and we will get back to you.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          >
            <option value="" disabled>Select a Course</option>
            <option value="web-development">Web Development</option>
            <option value="data-science">Data Science</option>
            <option value="ui-ux-design">UI/UX Design</option>
            <option value="digital-marketing">Digital Marketing</option>
          </select>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
          {submissionStatus && <p className="submission-status">{submissionStatus}</p>}
        </form>
      </div>
      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1050;
        }
        .modal-content {
          position: relative;
          background: linear-gradient(135deg, #007BFF, #00C6FF);
          color: white;
          padding: 40px;
          border-radius: 15px;
          width: 90%;
          max-width: 500px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          text-align: center;
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .close-button {
          position: absolute;
          top: 15px;
          right: 15px;
          background: transparent;
          border: none;
          color: white;
          font-size: 28px;
          cursor: pointer;
        }
        h2 {
          margin-top: 0;
          margin-bottom: 10px;
        }
        p {
          margin-bottom: 25px;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        input, select {
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 16px;
        }
        input:focus, select:focus {
          outline: none;
          border-color: #007BFF;
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
        }
        button[type="submit"] {
          padding: 15px;
          border: none;
          border-radius: 8px;
          background-color: #ffffff;
          color: #007BFF;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        button[type="submit"]:hover {
          background-color: #f0f0f0;
        }
        button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
        .submission-status {
          margin-top: 15px;
          font-weight: bold;
          color: #ffffff; /* Adjust color as needed */
        }
      `}</style>
    </div>
  );
};

export default Modal;
