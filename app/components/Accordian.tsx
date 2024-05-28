import React, { useState } from 'react';
import SchoolIcon from '@mui/icons-material/School';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import WorkIcon from '@mui/icons-material/Work';

interface Props {
  tabName: string;
}

const Accordian = ({ tabName }: Props) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleArrowClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='relative flex flex-col max-h-[40rem] sm:w-[34rem] w-full my-4'>
      <div className='flex flex-row items-center justify-between p-[20px] h-[5.5rem] max-w-full bg-white rounded-lg'>
        <p className='italic text-2xl text-black'>
          <span>{tabName === 'Education' ? <SchoolIcon className='bg-green' fontSize='large' /> : <WorkIcon fontSize='large' />}</span>{tabName}
        </p>
        <ArrowUpwardIcon
          className={`text-gray-400 cursor-pointer transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}
          fontSize='large'
          onClick={handleArrowClick}
        />
      </div>
      <div className={`overflow-hidden mt-[10px] transition-all ease-in-out duration-300 text-center ${isExpanded ? 'max-h-[35rem] p-[7px]' : 'max-h-0 p-0'} w-full rounded-lg bg-white`}>
        {tabName === 'Work' ? (
          <>
            <p className='experience-p'>
              1. WNS Global Services<br />
              At WNS, I worked as a technical intern in MERN stack and developed robust and responsive UI for better user and applied my technical knowledge in a Logistics project which able to handle big shipments and always try to implement best coding practices and was involved in API testing and development<br />
              Tenure: 15 June 2022 - 15 Feb 2023
            </p>
            <p className='experience-p'>
              2. Techolution Pvt Ltd<br />
              At Techolution, I was involved in working as a frontend developer creating optimized and responsive UI using technologies like Next.js, React.js, JavaScript, HTML, CSS, etc., and used better state management hooks and libraries for better data management and development.<br/>
              Tenure:19 Oct-19 April 2024
            </p>
          </>
        ) : (
          <>
            <p className='experience-p'>1. CHITKARA UNIVERSITY - Bachelor's of Engineering<br />Grade: 9.49</p>
            <p className='experience-p'>2. Bal Niketan Sr Sec School - 12th<br />Score: 70%</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Accordian;
