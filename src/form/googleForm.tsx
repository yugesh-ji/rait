// components/GoogleForm.js
import React from 'react';

const GoogleForm = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdw8C3C8u8Hz41ibfs53Uw0rZxAGXE9Cii1V7fWlnup4n388g/viewform?embedded=true"
        width="640"
        height="991"
        frameBorder="0"
        // marginHeight="0"
        // marginWidth="0"
        title="Google Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleForm;
