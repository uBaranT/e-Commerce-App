import React, { ChangeEvent } from 'react';
import './input.css';

interface InputProps {
  label?: string;
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  variant?: 'standard' | 'outlined';
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  setValue,
  placeholder,
  variant='standard',
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={`styled-input ${variant}`}>
      <input className='styled-input-area'
      type='text'
      value={value}
      placeholder={placeholder}
      onChange={handleChange}/>
    </div>
  )
}

export default Input;