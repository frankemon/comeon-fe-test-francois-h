import React from 'react'
import { Avatar } from '@mui/material'

type ProfileImgProps = {
  username: string
  img?: string
}

const ProfileImg = ({ username, img }: ProfileImgProps) => {
  return (
    <Avatar
      title={username}
      alt="Player Avatar"
      src={img ? img : "https://placehold.co/50x50"}
      sx={{ width: "2.5rem", height: "2.5rem" }}
      className='border-2'
    />
  )
}

export default ProfileImg