import React from 'react';
import './forgot.css';
import Link from 'next/link';

function page() {
  return (
    <div>
        <div style={{background:"white"}} className='h-[200]'>
            <br />
            <img style={{height:"35px",width:"250px"}} className='ml-12' src='logo.png'/><br />
        </div>
        <div>
            
            <div className='find-box shadow-lg bg-white-900'>
               <img src='forgot.png' className='forgot-img'/>
               <h3 className='find-text font-semibold pl-5 pt-16'>Find Your Account</h3>
               <div className='mt-3'>
               <span className='pl-5 text-base'>Please enter your email address or mobile number to search</span><br/>
               <span className='pl-5 text-base'>for your account.</span>
               <form>
                <input type='text' required placeholder='Email address or mobile number' className='em-inp'/><br/>
                <Link href={'/'}>
                <button className='cancel-btn'>Cancel</button>
                </Link>
                <Link href={'/verify'}>
                <button className='search-btn'>Search</button>
                </Link>
               </form>
               </div>
            </div>
        </div>
    </div>
  )
}

export default page