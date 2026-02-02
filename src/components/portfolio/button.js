import React from 'react';

const Button = ({ onClick, active, children }) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: active ? 'green' : 'gray' }}>
      {children}
    </button>
  );
};
export default Button;