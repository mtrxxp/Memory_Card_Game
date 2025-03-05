import React, { useEffect } from 'react';

const Name = () => {
  useEffect(() => {
    document.title = "Memory Card Game";
  }, []);

  return <div></div>;
};

export default Name;