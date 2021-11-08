import React from 'react';
import { IconButton } from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
} from '@mui/icons-material';

const FindUs = () => {
  return (
    <div className="w-full py-3 text-gray-400">
      Find us Here
      <span className="inline-block mx-2 mb-1 bg-gray-500 w-3 h-1"></span>
      <IconButton size="small">
        <FacebookIcon />
      </IconButton>
      <IconButton size="small">
        <LinkedInIcon />
      </IconButton>
      <IconButton size="small">
        <InstagramIcon />
      </IconButton>
      <IconButton size="small">
        <YouTubeIcon />
      </IconButton>
      <IconButton size="small">
        <TwitterIcon />
      </IconButton>
    </div>
  )
}

export default FindUs
