import { jsx as _jsx } from "react/jsx-runtime";
import { Avatar as MuiAvatar, styled } from '@mui/material';
const StyledAvatar = styled(MuiAvatar)((props) => ({
    width: props.width,
    height: props.height
}));
const Avatar = ({ width = '3rem', height = '3rem', ...props }) => {
    return _jsx(StyledAvatar, { ...props, width: width, height: height });
};
export default Avatar;
