// components/GoogleForm.js
import React from 'react';

const GoogleForm = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(135deg, #e0f7fa, #fce4ec)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '900px',
          height: '90vh',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
          transition: 'transform 0.3s ease',
        }}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSc0ipqEwHqpHTTLa31_x0b1O-JC26AyybseR9Ju1W7IKHawfQ/viewform?embedded=true"
          style={{
            border: 'none',
            width: '100%',
            height: '100%',
          }}
          allowFullScreen
          loading="lazy"
          title="Registration Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default GoogleForm;
