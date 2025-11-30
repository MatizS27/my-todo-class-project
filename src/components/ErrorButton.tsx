import React from 'react';

// Add this button component to your app to test Sentry's error tracking
export default function ErrorButton() {
  return (
    <button
      onClick={() => {
        throw new Error('This is your first error!');
      }}
      style={{ margin: '20px', padding: '10px', backgroundColor: '#ff4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
    >
      Break the world (Test Sentry)
    </button>
  );
}
