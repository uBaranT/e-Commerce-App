import React from 'react'
// import ProfileIcon from '../../assets/icons/profile.svg';

// function ProfileIconComponent() {
//   return (
//     <div>
//         <ProfileIcon/>
//     </div>
//   )
// }

// export default ProfileIconComponent;

interface IconProps {

  icon: string;

  size?: number;

  variant?: 'orange' | 'black' | 'white';

}

 

function Icon({ icon, size = 50, variant = 'orange' }: IconProps) {

 

    return (

      <img  style={{ width: size }} src={icon} alt="icon" />
      
    );

  }

 

export default Icon;