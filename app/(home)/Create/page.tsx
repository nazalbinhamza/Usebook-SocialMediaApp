"use client";
import React, { useState, useEffect, useContext, useRef } from 'react';
import SindNav from '../../shared/SidNav';
import Suggetion from '../../shared/suggetion';
import './create.css';
import { toast } from 'react-hot-toast';
import instance from '@/app/instance/instance';
import { GlobalContext } from "@/app/globalContext/context";

function Page() {
  const [userId, setUserId] = useState<string | null>(null);
  const  { post, setPost} = useContext<any>(GlobalContext);
  const [selectFile, setSelectFile] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Ensure this code runs only on the client side
    if (typeof window !== "undefined") {
      const storedUserId = localStorage.getItem("userid");
      if (storedUserId) {
        setUserId(storedUserId);
      }
    }
  }, []);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectFile(e.target.files[0]);
    } else {
      console.log("No file selected");
    }
  };

  const handleApi = async (post: File) => {
    const formData = new FormData();
    formData.append('file', post);
    formData.append('desc', description);
    formData.append('userId', userId || "");
    try {
      const response = await instance.post('/createPost', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      toast.success("Posted Successfully");
      console.log('Post created:', response.data);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const addPost = () => {
    if (selectFile) {
      handleApi(selectFile);
    }
  };

  return (
    <div>
      <SindNav />
      <Suggetion />
      <div className="w-[700px] h-[100vh] float-right">
        <div className='w-[600px] h-[450px] bg-white mt-[200px] ml-[20px] rounded-lg pl-[140px] pt-[70px]'>
          <h3 className='font-bold mt-[-50px] ml-[80px]'>Create New Post</h3>
          <div className='w-[600px] ml-[-140px] h-[10px] border-b border-gray-400'></div>
          <label htmlFor="file" className="custum-file-upload mt-[33px]">
            <div className="icon">
              <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill=""></path> </g></svg>
            </div>
            <div className="text">
              <span>Click to upload image</span>
            </div>
            <input ref={fileInputRef} onChange={handleFile} id="file" type="file"/>
          </label>
          <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Add Caption' className='w-[300px] h-[40px] bg-gray-200 border-[0px] pl-[10px] text-[14px] mt-[10px]' /><br/>
          <button onClick={addPost} className='w-[150px] h-[40px] bg-black text-white rounded-lg tracking-widest mt-[20px] ml-[70px]'>Post</button>
        </div>
      </div>
    </div>
  );
}

export default Page;