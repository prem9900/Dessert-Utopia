// src/components/atoms/ButtonAtom.tsx
import { Button } from '@mui/material';
import React from 'react';

interface ButtonAtomProps {
  label: string;
  onClick?: () => void;
  color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}

const ButtonAtom: React.FC<ButtonAtomProps> = ({ label, onClick, color = 'primary' }) => {
  return (
    <Button variant="contained" color={color} onClick={onClick}>
      {label}
    </Button>
  );
};

export default ButtonAtom;
