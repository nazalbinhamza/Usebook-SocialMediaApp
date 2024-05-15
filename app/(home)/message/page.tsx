"use client";
import React from 'react';
import './message.css';
import SindNav from '../Home/components/SidNav';
import Suggetion from '../Home/components/suggetion';

function page() {
  return (
    <div>
        <SindNav />
        <Suggetion />
        <div className="w-[700px] h-[100vh] float-right">
        <h1 className='font-bold text-[25px] mt-[10px]'>Messages</h1>
        <h3 className='ml-[600px] mt-[-25px]'>Request</h3>
        <div className='w-[620px] h-[60px] mt-20'>
              <div className='w-[60px] h-[60px] rounded-full bg-cover bg-center' style={{backgroundImage:"url('me.jpg')"}}></div>
              <p className='text-[12px] ml-[70px] mt-[-50px] font-semibold text-black'>N A Z A L</p>
              <p className='text-[10px] ml-[70px] mt-[5px] text-black'>Liked a message </p><p className='ml-[180px] mt-[-24px]'>. </p><p className='ml-[187px] text-gray-500 mt-[-17px] text-[12px]'>7h</p>
            </div>
            <div className='w-[620px] h-[60px] mt-5'>
              <div className='w-[60px] h-[60px] rounded-full bg-cover bg-center' style={{backgroundImage:"url('user.jpg')"}}></div>
              <p className='text-[12px] ml-[70px] mt-[-50px] font-semibold text-black'>unknown</p>
              <p className='text-[10px] ml-[70px] text-black'>you: Okkey</p><p className='ml-[250px] mt-[-24px]'>. </p><p className='ml-[257px] text-gray-500 mt-[-17px] text-[12px]'>15h</p>
            </div>
            <div className='w-[620px] h-[60px] mt-5'>
              <div className='w-[60px] h-[60px] rounded-full bg-cover bg-center' style={{backgroundImage:"url('ansas.jpg')"}}></div>
              <p className='text-[12px] ml-[70px] mt-[-50px] font-semibold text-black'>mhd_a_nsas</p>
              <p className='text-[10px] ml-[70px] mt-[5px] text-black'>Mhd_a_nsas sent an attachment. </p><p className='ml-[250px] mt-[-24px]'>. </p><p className='ml-[257px] text-gray-500 mt-[-17px] text-[12px]'>2w</p>
            </div>
            <div className='w-[620px] h-[60px] mt-5'>
              <div className='w-[60px] h-[60px] rounded-full bg-cover bg-center' style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlkkz7WD-qoYDGcK32dN524HHngYRE3Zi8ww&usqp=CAU')"}}></div>
              <p className='text-[12px] ml-[70px] mt-[-50px] font-semibold text-black'>Rahul_KG</p>
              <p className='text-[10px] ml-[70px] text-black'>4+ new messages</p><p className='ml-[250px] mt-[-24px]'>. </p><p className='ml-[257px] text-gray-500 mt-[-17px] text-[12px]'>2w</p>
            </div>
            <div className='w-[620px] h-[60px] mt-5'>
              <div className='w-[60px] h-[60px] rounded-full bg-cover bg-center' style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVajlIcDaQp7eU6JVTJ6Mz0QwVed3r2sswyw&usqp=CAU')"}}></div>
              <p className='text-[12px] ml-[70px] mt-[-50px] font-semibold text-black'>Yaddhuuu!</p>
              <p className='text-[10px] ml-[70px] text-black'>Send a reel by capitalclubteam</p><p className='ml-[250px] mt-[-24px]'>. </p><p className='ml-[257px] text-gray-500 mt-[-17px] text-[12px]'>3w</p>
            </div>
            <div className='w-[620px] h-[60px] mt-5'>
              <div className='w-[60px] h-[60px] rounded-full bg-cover bg-center' style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo9GcR0zW1QabPaokc_a-xWf51bGB4tL3bGw&usqp=CAU')"}}></div>
              <p className='text-[12px] ml-[70px] mt-[-50px] font-semibold text-black'>John_Monayi</p>
              <p className='text-[10px] ml-[70px] text-black'>Mention you in their story</p><p className='ml-[250px] mt-[-24px]'>. </p><p className='ml-[257px] text-gray-500 mt-[-17px] text-[12px]'>3w</p>
            </div>
            <div className='w-[620px] h-[60px] mt-5'>
              <div className='w-[60px] h-[60px] rounded-full bg-cover bg-center' style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi08F-a5dsE7i8emsi6HZ140Vopahqn693Sw&usqp=CAU')"}}></div>
              <p className='text-[12px] ml-[70px] mt-[-50px] font-semibold text-black'>nizamudheenknr</p>
              <p className='text-[10px] ml-[70px] text-black'>Mentioned you in their comment</p><p className='ml-[250px] mt-[-24px]'>. </p><p className='ml-[257px] text-gray-500 mt-[-17px] text-[12px]'>7w</p>
            </div>
        </div>
    </div>
  )
}

export default page