import { jsx as _jsx } from "react/jsx-runtime";
import { CircularProgress } from '@mui/material';
const LoadingSpinner = () => {
    return (_jsx("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }, children: _jsx(CircularProgress, { style: { color: 'black' } }) }));
};
export default LoadingSpinner;
