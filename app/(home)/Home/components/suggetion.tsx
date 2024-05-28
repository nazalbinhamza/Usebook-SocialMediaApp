"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import '../Home.css';
import instance from '@/app/instance/instance';
import './sidenav.css';


function suggetion() {

  const [users, setUsers] = useState([]);
  const [userId,setUserId] = useState([]);

  

  const getUser = async () => {
    try {
      const response = await instance.get('/user');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    getUser();
  }, []); 

  useEffect(() => {
    console.log(users, 'users');
  }, [users]);

  const getUserId = async (id:any)=>{

    try {
      const userId = id;
      console.log(userId,'hhh');
      
      const res = await instance.put(`/user/${userId}/follow`, { _id: userId});
      console.log(res);
      
      setUserId(res.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  

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

    
        {users.map((user:any) => (
          <div key={user.id}  className="cursor-pointer">
          <div className="despa-dp"></div>      
          <p className="ml-[120px] mt-[-35px] username-story font-semibold">{user.username}</p>
          <p className="ml-[120px] username-story text-gray-600">Followed by user + 1...</p>
          <div className=' float-right w-10 mr-10 mt-[-30px]'>
          <button onClick={() => getUserId(user._id)} className="username-story font-semibold text-blue-600 ">follow</button>
          </div>
          </div>
   ))}
      </div>
    </div>
  )}


export default suggetion