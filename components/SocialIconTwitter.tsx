import React from 'react';
import { Twitter } from 'react-feather';
import { SocialIcon } from './SocialIcon';

export let SocialIconTwitter: React.FC = (props) => {
  return (
    <SocialIcon
      icon={(props) => <Twitter {...props} stroke="none" fill="currentColor"></Twitter>}
      {...props}
    ></SocialIcon>
  );
};
