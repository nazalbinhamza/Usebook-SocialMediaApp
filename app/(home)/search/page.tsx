'use client';
import React,{useState} from 'react';
import SindNav from '../Home/components/SidNav';
import Suggetion from '../Home/components/suggetion';
import './search.css';

function page() {

  const [showDiv, setShowDiv] = useState(true);

  const handleButtonClick = () => {
    setShowDiv(false);
  };

  const [showDiv2, setShowDiv2] = useState(true);

  const handleButtonClick2 = () => {
    setShowDiv2(false);
  };

  const [showDiv3, setShowDiv3] = useState(true);

  const handleButtonClick3 = () => {
    setShowDiv3(false);
  };

  const [showDiv4, setShowDiv4] = useState(true);

  const handleButtonClick4 = () => {
    setShowDiv4(false);
  };

  return (
    <div>
        <SindNav />
        <Suggetion />
        <div className="w-[700px] h-[100vh] float-right">
            <h1 className='font-bold text-[25px] mt-[10px]'>Search</h1>
            {/* <input type='search' placeholder='search' className='rounded-sm h-[35px] w-[620px] mt-[10px] pl-1'/> */}
            <input type="text" autoComplete="off" name="text" className="input mt-[10px]" placeholder="Search" />
            <h4 className='font-semibold mt-[15px]'>Recent</h4>
            {showDiv && (
            <div className='w-[625px] h-[70px] mt-2 bg-white pl-[5px] pt-[5px] rounded-md shadow-md hover:shadow-2xl'>
              <div className='w-[60px] h-[60px] rounded-full bg-cover bg-center' style={{backgroundImage:"url('data:image/jpeg;base64,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')"}}></div>
              <p className='text-[12px] ml-[70px] mt-[-50px] font-semibold text-black'>nivin.pauly<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10" height="auto" viewBox="0 0 48 48" className="ml-[63px] mt-[-13px]">
              <polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"></polygon><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"></polygon>
              </svg></p>
              <p className='text-[10px] ml-[70px] text-black'>N I V I N | P A U L Y</p>
              <p onClick={handleButtonClick} className='cursor-pointer text-[12px] ml-[585px] mt-[-20px] font-semibold text-blue-700'>clear</p>
            </div>
            )}
            {showDiv2 && (
            <div className='w-[625px] h-[70px] mt-5 bg-white pl-[5px] pt-[5px] rounded-md shadow-md hover:shadow-2xl'>
              <div className='w-[60px] h-[60px] rounded-full bg-cover bg-center' style={{backgroundImage:"url('ansas.jpg')"}}></div>
              <p className='text-[12px] ml-[70px] mt-[-50px] font-semibold text-black'>mhd_a_nsas</p>
              <p className='text-[10px] ml-[70px] text-black'>@mhd_a_nsas</p>
              <p onClick={handleButtonClick2} className='cursor-pointer text-[12px] ml-[585px] mt-[-20px] font-semibold text-blue-700'>clear</p>
            </div>
            )}
            {showDiv3 && (
            <div className='w-[625px] h-[70px] mt-5 bg-white pl-[5px] pt-[5px] rounded-md shadow-md hover:shadow-2xl'>
              <div className='w-[60px] h-[60px] rounded-full bg-cover bg-center' style={{backgroundImage:"url('Yaseen.png')"}}></div>
              <p className='text-[12px] ml-[70px] mt-[-50px] font-semibold text-black'>yaseen_mirshal</p>
              <p className='text-[10px] ml-[70px] text-black'>_/\_</p>
              <p onClick={handleButtonClick3} className='cursor-pointer text-[12px] ml-[585px] mt-[-20px] font-semibold text-blue-700'>clear</p>
            </div>
            )}
            {showDiv4 && (
            <div className='w-[625px] h-[70px] mt-5 bg-white pl-[5px] pt-[5px] rounded-md shadow-md hover:shadow-2xl'>
              <div className='w-[60px] h-[60px] rounded-full bg-cover bg-center' style={{backgroundImage:"url('suhail.jpg')"}}></div>
              <p className='text-[12px] ml-[70px] mt-[-50px] font-semibold text-black'>suhail__pk_</p>
              <p className='text-[10px] ml-[70px] text-black'>Alhamdulillah</p>
              <p onClick={handleButtonClick4} className='cursor-pointer text-[12px] ml-[585px] mt-[-20px] font-semibold text-blue-700'>clear</p>
            </div>
            )}
        </div>
    </div>
  )
}

export default page