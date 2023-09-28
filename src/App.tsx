// import Button from "./components/button";
// import { useState } from "react";
// import Logo from "./components/logo";
// import Input from "./components/input";
// import person from '../src/assets/icons/profile.svg'
// import Icon from "./components/icon";
// import favorites from '../src/assets/icons/favorites.svg'
// import shoppingcart from '../src/assets/icons/shoppingcart.svg';
// import CircleImageCard from "./components/circle-image-card";
// import CheckBoxLabel from "./components/checkboxlabel";

import OutlineButton from "./components/outline-button";
import Select from "./components/select";

const App: React.FC = () => {
  // const [inputValue, setInputValue] = useState('');

  // const handleInputChange = (value: string) => {
  //   setInputValue(value);
  // }
  // const handleClick = () => {
  //   console.log("Clicked!");
  //  }
  const handleClick = () => {
    alert('Button Clicked!');
  };

  return (
    <div>
      {/* <Button label="ADD TO CART" onClick={handleClick} variant="primary" size="medium"/>       */}
      
        {/* <header>
          <Input
          value={inputValue}
          setValue={handleInputChange}
          placeholder="Search entire store here..."
          variant="outlined"/>
        </header>
        <Icon icon={person} size={30}/>
        <Icon icon={favorites} size={30}/>
        <Icon icon={shoppingcart} size={30}/>
         */}
        {/* <CircleImageCard imageSrc="./cat.png" title="Cat"/> */}
        
          {/* <CheckBoxLabel
            label={[
              "By using this form you agree with the storage and handling of your data by this website.",
            ]}
          /> */}
          <OutlineButton label="Size Guilde" onClick={handleClick}/>
          <Select/>
    </div>
  );
};

export default App;
