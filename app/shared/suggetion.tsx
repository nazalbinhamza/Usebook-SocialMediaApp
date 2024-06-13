"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import '../(home)/Home/Home.css';
import instance from '@/app/instance/instance';
import './sidenav.css';
import { toast } from 'react-hot-toast';

function Suggetion() {

  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState([]);
  const [isFollow, setIsFollow] = useState(false);

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

  const getUserId = async (id:any) => {
    try {
      let userid = typeof localStorage !== 'undefined' ? localStorage.getItem("userid") : null
      const userId = id;
      
      const res = await instance.put(`/user/${userId}/follow`, { _id: userid });
      toast.success('Followed');
      setIsFollow(true);
      setUserId(res.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const unfollowUser = async (id:any) => {
    try {
      let usrid = typeof localStorage !== 'undefined' ? localStorage.getItem("userid") : null
      const urId = id;

      const res = await instance.put(`/user/${urId}/unfollow`, { _id: usrid });
      toast.error('Unfollowed');
      setIsFollow(false);
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
            <p className="username-story font-semibold text-blue-600 ml-[350px] mt-[-25px]">switch</p>
          </Link>
        </div>
        <div>
          <p className="mt-[50px] ml-[50px] suggest-for-you font-semibold">Suggested for you</p>
          <p className="ml-[350px] mt-[-18px] username-story cursor-pointer">See All</p>
        </div>
        {users.map((user:any) => (
          <div key={user._id} className="cursor-pointer bg-white h-[60px] w-[377px] ml-[40px] rounded-md">         
            <div className="despa-dp mt-[4px]"></div>      
            <p className="ml-[120px] mt-[-35px] username-story font-semibold">{user.username}</p>
            <p className="ml-[120px] username-story text-gray-600">Followed by user + 1...</p>
            <div className='float-right w-10 mr-10 mt-[-30px]'>
              <button 
                onDoubleClick={() => unfollowUser(user._id)} 
                onClick={() => getUserId(user._id)} 
                className="username-story font-semibold text-blue-600"
              >
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggetion;
