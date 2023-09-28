import React from 'react';
import './outlinebutton.css'; // Stil dosyasını ekleyin ve düzenlemelerinizi yapın

interface OutlineButtonProps {
  label: string;
  onClick: () => void;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ label, onClick }) => {
  return (
    <button className="outline-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default OutlineButton;
