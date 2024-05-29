'use client';
import React from 'react';
import SidNav from '../Home/components/SidNav';
import './prfl.css';

function page() {
  
  return (
    <div>
        <SidNav />
        <div className='w-[1200px] h-[400px] float-end'>
          <div className='dp'></div>
          <h3 className='ml-[450px] mt-[-130px] font-semibold'>user</h3>
          <button className='bg-gray-200 rounded w-[120px] h-[30px] ml-[520px] mt-[-28px] font-semibold text-custom absolute'>Edit profile</button>
          <button className='bg-gray-200 rounded w-[120px] h-[30px] ml-[650px] mt-[-28px] font-semibold text-custom absolute'>View archive</button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7 ml-[785px] mt-[-25px]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
          </svg>
          <p className='ml-[450px] mt-[30px]'><span className='font-bold'>9</span> post</p>
          <p className='ml-[535px] mt-[-24px]'><span className='font-bold'>257k</span> followers</p>
          <p className='ml-[680px] mt-[-24px]'><span className='font-bold'>1798</span> following</p>
          <p className='ml-[450px] mt-[10px]'>🗽</p>
          <div className='highlight1-dp'>
            <div className='inner-1'></div>
          </div>
          
          <div className='highlight2-dp'>
            <div className='inner-2'></div>
          </div>
          <div className='highlight3-dp'>
            <div className='inner-3'></div>
          </div>
          <div className='highlight4-dp'>
            <div className='inner-4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-left w-8 h-8 text-slate-50 mt-5 ml-[18px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </div>
          <div>
            <p className='ml-[190px] text-[12px]'>nature</p>
            <p className='ml-[295px] mt-[-18px] text-[12px]'>cars</p>
            <p className='ml-[380px] mt-[-18px] text-[12px]'>travelling🪐</p>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-[870px]">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
        </svg>
        <p className='font-bold ml-[895px] mt-[-25px]'>Posts</p>

        <hr style={{borderTop:'1px solid grey'}} className='w-[880px] ml-[480px]'></hr>
        
        <div style={{height:'518px'}} className='mt-10 w-1/2 ml-[525px]'>
        
          
          
          <div style={{border:'1px solid black',backgroundImage: 'url(\'https://toyotazambia.azurewebsites.net/media/7431/fortuner014.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center'}} className=' float-left w-64 h-64 bg-stone-700'></div>
          <div style={{border:'1px solid black',backgroundImage: 'url(\'https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D\')', backgroundSize: 'cover', backgroundPosition: 'center'}} className=' float-left w-64 h-64 bg-stone-700'></div>
          <div style={{border:'1px solid black',backgroundImage: 'url(\'https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?cs=srgb&dl=pexels-cesarperez209-733745.jpg&fm=jpg\')', backgroundSize: 'cover', backgroundPosition: 'center'}} className=' float-left w-64 h-64 bg-stone-700'></div>
          <div style={{border:'px solid black',backgroundImage: 'url(\'https://images.unsplash.com/photo-1593517758061-e04bd0fee3aa?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\')', backgroundSize: 'cover', backgroundPosition: 'center'}} className=' float-left w-64 h-64 bg-stone-700 '></div>
          
          <div style={{border:'1px solid black',backgroundImage: 'url(\'https://images.unsplash.com/photo-1608320066644-cfe4ae0e8fa7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTkyfHx8ZW58MHx8fHx8\')', backgroundSize: 'cover', backgroundPosition: 'center'}} className=' float-left w-64 h-64 bg-stone-700'></div>
          <div style={{border:'1px solid black',backgroundImage: 'url(\'https://images.unsplash.com/photo-1652454397684-640bddc48d78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJtdyUyMGluc2lkZXxlbnwwfHwwfHx8MA%3D%3D\')', backgroundSize: 'cover', backgroundPosition: 'center' }} className=' float-left w-64 h-64 '></div>
          <div style={{border:'1px solid black',backgroundImage: 'url(\'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\')', backgroundSize: 'cover', backgroundPosition: 'center'}} className=' float-left w-64 h-64 bg-stone-700 '></div>
          <div style={{border:'1px solid black',backgroundImage: 'url(\'https://images.unsplash.com/photo-1615383562187-dcc2e3400c5e?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\')', backgroundSize: 'cover', backgroundPosition: 'center'}} className=' float-left w-64 h-64 bg-stone-700'></div>

          <div style={{border:'1px solid black',backgroundImage: 'url(\'https://images.hdqwalls.com/download/classical-car-drift-mode-4k-o9-1360x768.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center'}} className=' float-left w-64 h-64 bg-stone-700'></div>
      </div>
    </div>
  )
}

export default page