import React, { Suspense, lazy } from 'react';

const Remote = lazy(() => import('./pages/Remote'));

export default function App() {
  return (
    <div
      style={{
        border: '1px solid #f15b2a',
        backgroundColor: '#fcd4c7',
        textAlign: 'center',
        padding: '20px 0',
        color: '#f15b2a',
      }}
    >
      <Suspense>
        Container: React
        <Remote />
      </Suspense>
    </div>
  );
}
