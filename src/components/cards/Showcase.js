import React from 'react';

export default function Showcase({
  title,
  subTitle = 'Welcome to Ecommerce React App',
}) {
  return (
    <div className='xl:container bg-sky-500 text-white font-semibold '>
      <div className='flex flex-col text-center p-8 '>
        <h1 className='text-4xl mb-2'>{title}</h1>
        <p className='leading-5 text-lg'>{subTitle}</p>
      </div>
    </div>
  );
}
