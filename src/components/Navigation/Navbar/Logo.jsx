import React from "react";

const Logo = () => {
  return (
    <div className='flex justify-start lg:w-0 lg:flex-1'>
      <a href='#'>
        <img
          className='h-8 w-auto sm:h-10'
          src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
          alt=''
        />
      </a>
    </div>
  );
};

export default Logo;
