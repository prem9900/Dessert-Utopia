// src/components/atoms/LoadingSpinner/LoadingSpinner.tsx
import React from 'react';
import { CircularProgress } from '@mui/material';

const LoadingSpinner: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress style={{ color: 'black' }} />
    </div>
  );
};

export default LoadingSpinner;
