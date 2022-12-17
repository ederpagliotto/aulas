import React from 'react';

const CapsLock = (props) => {
  //how I've inserted .children instead of .text, I dont need to put in my page param text
  const wroteText = props.children;
  const upperCaseText = wroteText.toUpperCase();

  return <div>{upperCaseText}</div>;
};

export default CapsLock;
