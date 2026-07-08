import React from 'react';

export default function NotFound({ go }) {
  return (
    <div style={{ padding: '180px 56px 100px', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <span className="t-label" style={{ color: 'var(--steel)', display: 'block', marginBottom: '16px' }}>Error 404</span>
      <h1 className="t-display" style={{ fontSize: '3rem', marginBottom: '24px' }}>Page not found</h1>
      <p className="t-body" style={{ maxWidth: '480px', marginBottom: '40px' }}>
        The requested engineering document or system page does not exist or has been relocated.
      </p>
      <button className="btn btn--primary" onClick={() => go('home')}>Return to Station</button>
    </div>
  );
}
