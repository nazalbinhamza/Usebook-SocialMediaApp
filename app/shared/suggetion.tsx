"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import '../(home)/home/Home.css';
import instance from '@/app/instance/instance';
import './sidenav.css';
import { toast } from 'react-hot-toast';

interface User {
  _id: string;
  username: string;
  isFollowed: boolean;
}

function Suggetion() {
  const [users, setUsers] = useState<User[]>([]);
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await instance.get('/user');
        const followedUsers = JSON.parse(localStorage.getItem('followedUsers') || '{}');
        const usersWithFollowStatus = response.data.map((user: User) => ({
          ...user,
          isFollowed: !!followedUsers[user._id],
        }));
        setUsers(usersWithFollowStatus);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUsername = localStorage.getItem('username');
      if (storedUsername) {
        setUsername(storedUsername);
      }
    }
  }, []);

  const followUser = async (id: string) => {
    try {
      const userid = typeof window !== 'undefined' ? localStorage.getItem("userid") : null;
      if (!userid) {
        throw new Error('User ID not found in local storage');
      }
      await instance.put(`/user/${id}/follow`, { _id: userid });
      toast.success('Followed');
      const updatedUsers = users.map(user =>
        user._id === id ? { ...user, isFollowed: true } : user
      );
      setUsers(updatedUsers);
      saveFollowStatus(updatedUsers);
    } catch (error) {
      console.error('Error following user:', error);
    }
  };

  const unfollowUser = async (id: string) => {
    try {
      const userid = typeof window !== 'undefined' ? localStorage.getItem("userid") : null;
      if (!userid) {
        throw new Error('User ID not found in local storage');
      }
      await instance.put(`/user/${id}/unfollow`, { _id: userid });
      toast.error('Unfollowed');
      const updatedUsers = users.map(user =>
        user._id === id ? { ...user, isFollowed: false } : user
      );
      setUsers(updatedUsers);
      saveFollowStatus(updatedUsers);
    } catch (error) {
      console.error('Error unfollowing user:', error);
    }
  };

  const saveFollowStatus = (updatedUsers: User[]) => {
    const followedUsers = updatedUsers.reduce((acc, user) => {
      if (user.isFollowed) {
        acc[user._id] = true;
      }
      return acc;
    }, {} as { [key: string]: boolean });
    localStorage.setItem('followedUsers', JSON.stringify(followedUsers));
  };

  return (
    <div>
      <div className="suggetion-div float-right">
        <div className="cursor-pointer">
          <div className="suggetion-dp"></div>
          <p className="ml-[120px] mt-[-35px] username-story font-semibold">{username}</p>
          <p className="ml-[120px] mt-[-10px]">..</p>
          <Link href='./sign'>
            <p className="username-story font-semibold text-blue-600 ml-[350px] mt-[-25px]">switch</p>
          </Link>
        </div>
        <div>
          <p className="mt-[50px] ml-[50px] suggest-for-you font-semibold">Suggested for you</p>
          <p className="ml-[350px] mt-[-18px] username-story cursor-pointer">See All</p>
        </div>
        {users.map((user) => (
          <div key={user._id} className="cursor-pointer bg-white h-[60px] w-[377px] ml-[40px] rounded-md">
            <div className="despa-dp mt-[4px]"></div>
            <p className="ml-[120px] mt-[-35px] username-story font-semibold">{user.username}</p>
            <p className="ml-[120px] username-story text-gray-600">Followed by user + 1...</p>
            <div className='float-right w-10 mr-10 mt-[-30px]'>
              {user.isFollowed ? (
                <button
                  onClick={() => unfollowUser(user._id)}
                  className="username-story font-semibold text-blue-600"
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => followUser(user._id)}
                  className="username-story font-semibold text-blue-600"
                >
                  Follow
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggetion;