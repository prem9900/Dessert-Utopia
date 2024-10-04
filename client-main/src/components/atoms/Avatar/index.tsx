import { AvatarProps, Avatar as MuiAvatar, styled } from '@mui/material'
import React from 'react'

interface Props extends AvatarProps {
  width?: string
  height?: string
}

const StyledAvatar = styled(MuiAvatar)((props: { width: string, height: string }) => ({
  width: props.width,
  height: props.height
}))

const Avatar = ({ width = '3rem', height = '3rem', ...props }: Props) => {
  return <StyledAvatar {...props} width={width} height={height} />
}

export default Avatar
