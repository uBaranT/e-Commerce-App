import React, {useState} from 'react';

interface CheckBoxLabelProps{
    label: string[];
};

const CheckBoxLabel: React.FC<CheckBoxLabelProps> = ({label}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

  return (
    <label className='styled-checkboxlabel'>
        <input
        type='checkbox'
        checked={isChecked}
        onChange={handleCheckboxChange}
        />
        {label}
    </label>
  )
}

export default CheckBoxLabel;