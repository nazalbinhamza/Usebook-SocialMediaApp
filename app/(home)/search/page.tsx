'use client';
import React, { useState, useEffect } from 'react';
import SindNav from '../../shared/SidNav';
import Suggetion from '../../shared/suggetion';
import './search.css';

function Page() {
  const [showDiv, setShowDiv] = useState(true);
  const [showDiv2, setShowDiv2] = useState(true);
  const [showDiv3, setShowDiv3] = useState(true);
  const [showDiv4, setShowDiv4] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleButtonClick = () => setShowDiv(false);
  const handleButtonClick2 = () => setShowDiv2(false);
  const handleButtonClick3 = () => setShowDiv3(false);
  const handleButtonClick4 = () => setShowDiv4(false);

  if (!isClient) return null;

  return (
    <div>
      <SindNav />
      <Suggetion />
      <div className="w-[700px] h-[100vh] float-right">
        <h1 className='font-bold text-[25px] mt-[10px]'>Search</h1>
        <input type="text" autoComplete="off" name="text" className="input mt-[10px]" placeholder="Search" />
        <h4 className='font-semibold mt-[15px]'>Recent</h4>
        {showDiv && (
          <div className='w-[625px] h-[70px] mt-2 bg-white pl-[5px] pt-[5px] rounded-md shadow-md hover:shadow-2xl'>
            <div className='w-[60px] h-[60px] rounded-full bg-cover bg-center' style={{backgroundImage: "url('https://pbs.twimg.com/profile_images/1337252174665957376/jCGdOjws_400x400.jpg')"}}></div>
            <p className='text-[12px] ml-[70px] mt-[-50px] font-semibold text-black'>nivin.pauly
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10" viewBox="0 0 48 48" className="ml-[63px] mt-[-13px]">
                <polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"></polygon>
                <polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"></polygon>
              </svg>
            </p>
            <p className='text-[10px] ml-[70px] text-black'>N I V I N | P A U L Y</p>
            <p onClick={handleButtonClick} className='cursor-pointer text-[12px] ml-[585px] mt-[-20px] font-semibold text-blue-700'>clear</p>
          </div>
        )}
        {showDiv2 && (
          <div className='w-[625px] h-[70px] mt-5 bg-white pl-[5px] pt-[5px] rounded-md shadow-md hover:shadow-2xl'>
            <div className='w-[60px] h-[60px] rounded-full bg-cover bg-center' style={{backgroundImage: "url('ansas.jpg')"}}></div>
            <p className='text-[12px] ml-[70px] mt-[-50px] font-semibold text-black'>mhd_a_nsas</p>
            <p className='text-[10px] ml-[70px] text-black'>@mhd_a_nsas</p>
            <p onClick={handleButtonClick2} className='cursor-pointer text-[12px] ml-[585px] mt-[-20px] font-semibold text-blue-700'>clear</p>
          </div>
        )}
        {showDiv3 && (
          <div className='w-[625px] h-[70px] mt-5 bg-white pl-[5px] pt-[5px] rounded-md shadow-md hover:shadow-2xl'>
            <div className='w-[60px] h-[60px] rounded-full bg-cover bg-center' style={{backgroundImage: "url('Yaseen.png')"}}></div>
            <p className='text-[12px] ml-[70px] mt-[-50px] font-semibold text-black'>yaseen_mirshal</p>
            <p className='text-[10px] ml-[70px] text-black'>_/\_</p>
            <p onClick={handleButtonClick3} className='cursor-pointer text-[12px] ml-[585px] mt-[-20px] font-semibold text-blue-700'>clear</p>
          </div>
        )}
        {showDiv4 && (
          <div className='w-[625px] h-[70px] mt-5 bg-white pl-[5px] pt-[5px] rounded-md shadow-md hover:shadow-2xl'>
            <div className='w-[60px] h-[60px] rounded-full bg-cover bg-center' style={{backgroundImage: "url('suhail.jpg')"}}></div>
            <p className='text-[12px] ml-[70px] mt-[-50px] font-semibold text-black'>suhail__pk_</p>
            <p className='text-[10px] ml-[70px] text-black'>Alhamdulillah</p>
            <p onClick={handleButtonClick4} className='cursor-pointer text-[12px] ml-[585px] mt-[-20px] font-semibold text-blue-700'>clear</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
