import React from 'react';
import { useNavigate } from 'react-router'; // ✅ use 'react-router-dom'
import svg6 from "../../assets/svg6.png";

function Option() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className='bg-background min-h-screen relative flex flex-col justify-center items-center px-4 py-6'>
      <h1 className='text-text text-center mb-8 font-bold text-2xl sm:text-3xl font-text'>
        🎯 ? Choose what you want
      </h1>

      <div className='bg-surface flex flex-col sm:flex-row rounded-xl w-full sm:w-[80%] md:w-[50%] gap-6 sm:gap-4 min-h-[350px] sm:h-[60%] justify-center items-center relative shadow-lg p-4'>
        <img src={svg6}  className='absolute bottom-1 right-1 w-24 sm:w-50' />

        <button
          onClick={() => handleNavigate('/questions')}
          className='bg-primary-dark hover:bg-primary hover:text-text rounded-lg px-6 py-4 text-lg sm:text-2xl transition-all duration-300 text-primary font-medium w-full sm:w-auto'
        >
          Question
        </button>

        <button
          onClick={() => handleNavigate('/favorites')}
          className='bg-primary-dark hover:bg-primary hover:text-text rounded-lg px-6 py-4 text-lg sm:text-2xl transition-all duration-300 text-primary font-medium w-full sm:w-auto'
        >
          Favorite
        </button>
      </div>
    </div>
  );
}

export default Option;

