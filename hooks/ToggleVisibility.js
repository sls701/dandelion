import React, {useState} from 'react';

// https://amanhimself.dev/blog/show-hide-password-in-react-native-using-custom-hook/#show-or-hide-password-visibility-hook

export default ToggleVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [iconShown, setIconShown] = useState(true);

  const handlePasswordVisibility = () => {
    if (iconShown) {
      setIconShown(false);
      setPasswordVisibility(!passwordVisibility);
    } else if (!iconShown) {
      setIconShown(true);
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return {
    passwordVisibility,
    iconShown,
    handlePasswordVisibility
  };

};