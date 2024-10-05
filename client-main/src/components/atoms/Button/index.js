import { jsx as _jsx } from "react/jsx-runtime";
// src/components/atoms/ButtonAtom.tsx
import { Button } from '@mui/material';
const ButtonAtom = ({ label, onClick, color = 'primary' }) => {
    return (_jsx(Button, { variant: "contained", color: color, onClick: onClick, children: label }));
};
export default ButtonAtom;
