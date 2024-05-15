"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import '../Home.css';
import instance from '@/app/instance/instance';


function suggetion() {

   const [user,setUser] = useState([])

  const getusers = async ()=> {
    const response : any = await instance.get('/user')
    setUser(response)

    console.log(user);
    
  }

  return (
    <div>
        <div className="suggetion-div float-right">
        <div className="cursor-pointer">
        <div className="suggetion-dp"></div>
        <p className="ml-[120px] mt-[-35px] username-story font-semibold">{localStorage.getItem('username')}</p>
        <p className="ml-[120px] mt-[-10px]">..</p>
        <Link href='./sign'>
        <p className="username-story font-semibold text-blue-600 ml-[350px] mt-[-25px] ">switch</p>
        </Link>
        </div>
        <div>
          <p className="mt-[50px] ml-[50px] suggest-for-you font-semibold">Suggested for you</p>
          <p className="ml-[350px] mt-[-18px] username-story cursor-pointer">See All</p>
        </div>
        <div className="cursor-pointer">
        <div className="despa-dp"></div>
        <p className="ml-[120px] mt-[-35px] username-story font-semibold">despa_676</p>
        <p className="ml-[120px] username-story text-gray-600">Followed by abraham + 1...</p>
        <p className="username-story font-semibold text-blue-600 ml-[350px] mt-[-25px] ">follow</p>
        </div>
        <div className="cursor-pointer">
        <div className="xavi-dp"></div>
        <p className="ml-[120px] mt-[-35px] username-story font-semibold">xavi_alexander</p>
        <p className="ml-[120px] username-story text-gray-600">Follows you</p>
        <p className="username-story font-semibold text-blue-600 ml-[350px] mt-[-25px] ">follow</p>
        </div>
        <div className="cursor-pointer">
        <div className="david-dp"></div>
        <p className="ml-[120px] mt-[-35px] username-story font-semibold">david</p>
        <p className="ml-[120px] username-story text-gray-600">followed by luca</p>
        <p className="username-story font-semibold text-blue-600 ml-[350px] mt-[-25px] ">follow</p>
        </div>
        <div className="cursor-pointer">
        <div className="fernandas-dp"></div>
        <p className="ml-[120px] mt-[-35px] username-story font-semibold">fernandas</p>
        <p className="ml-[120px] username-story text-gray-600">followed by bruno + 1...</p>
        <p className="username-story font-semibold text-blue-600 ml-[350px] mt-[-25px] ">follow</p>
        </div>
        
      </div>
    </div>
  )
}

export default suggetion