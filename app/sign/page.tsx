"use client";
import React, { useState } from 'react';
import './sign.css';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function page() {

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')

  const submitHandle = (e:any) => {
    e.preventDefault();
    axios.post("https://social-media-5ukj.onrender.com/auth/register  ",{
      username, password, email
    })
    toast.success('Form Submit Successfully');
    setTimeout(() => {
      window.location.href = './';
    }, 1000);
    
  };


  

  return (
    <div>
      <div style={{background:"white"}} className='h-[200]'>
        <br />
        <img style={{height:"35px",width:"250px"}} className='ml-12' src='logo.png'/><br />
      </div>
      <div className='signup-body'>
        <input type='radio' id='chk1' name='a1' style={{display:'none'}}/>
        <input type='radio' id='chk2' name='a2' style={{display:'none'}}/>
          <div className='box'>
              <div className='a'>
                <label htmlFor='chk1'>Login</label>
                <label htmlFor='chk2' id='sup'>Sign up</label>
              </div>
              <div className='b'>
                <form className='frm' onSubmit={submitHandle} >
                    <h6 className='title'>SIGN-UP FORM</h6>
                    <input required type='text' placeholder='Enter full name'/>
                    <input required type='text' onChange={(e)=>setUsername(e.target.value)} placeholder='Enter username'/>
                    <input required type='email' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email address'/>
                    <input required style={{color:'#A9A9A9'}} type='date' />
                    <input type='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Create password'/>
                    <input type='submit' value={'Sign Up'} id='btn'/>
                </form>
              </div>
              <div className='c'>
                   
              </div>
              <div className='d'></div>
              <div className='e'></div>
          </div>

              <div>
                <img style={{top:'340px'}} className='h-[300px] absolute left-72' src='sticky.png' />
              </div>
        
      </div>
    </div>
  )
}

export default page