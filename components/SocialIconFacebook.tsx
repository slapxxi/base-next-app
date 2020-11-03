import React from 'react';
import { Facebook } from 'react-feather';
import { SocialIcon } from './SocialIcon';

export let SocialIconFacebook: React.FC = (props) => {
  return (
    <SocialIcon
      icon={(props) => <Facebook {...props} stroke="none" fill="currentColor"></Facebook>}
      {...props}
    ></SocialIcon>
  );
};
