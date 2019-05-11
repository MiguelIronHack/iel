const handleSpecialCharacters = string => {
  return string.replace(/[. ,:;)?!$*%#=]+/g, "");
};

export default handleSpecialCharacters;
