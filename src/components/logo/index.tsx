import React from 'react';

interface LogoProps {
    imageSrc: string;
}

const Logo: React.FC<LogoProps> = ({
    imageSrc,
  }) => {
    return (
      <div className="circle-image-card">
          <div className="circle-image">
              <img src={imageSrc} alt='Logo'/>
          </div>
      </div>
    )
  };
  


export default Logo;