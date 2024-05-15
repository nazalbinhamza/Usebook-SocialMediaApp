"use client";
import React, { useState } from "react";
import "./Home.css";
import SidNav from "./components/SidNav";
import StoryNav from "./components/StoryNav";
import Suggetion from "./components/suggetion";

function page() {

  const [like,setLike]=useState(false);
  const [like1,setLike1]=useState(false);

  return (
    <div>
      <SidNav />
      <Suggetion />
      <div className="post-section float-right">
        <StoryNav />
        <div className="post-div">
          <div>
          <div className="circle"></div>
          <p className="ml-[95px] mt-[-30px] font-semibold font-sans">roadway<span className="font-normal text-sm ml-[5px] text-gray-500"> 1w</span></p>
          </div>
          <img src="car4.jpg" className="car-img" onDoubleClick={()=>{like?setLike(false):setLike(true)}} />
          <svg
            onClick={()=>{like?setLike(false):setLike(true)}}
            xmlns="http://www.w3.org/2000/svg"
            fill={!like?"none":"red"}
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6  ml-[53px] mt-[10px]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          <p className="ml-[73px]">7,126 likes</p>
          <div className="circle2"></div>
          <p className="ml-[53px] mt-[5px]"><a className="font-semibold">roadway</a>  Set free the beast with the Mercedes-AMG ML 63. With a handcrafted AMG V8 biturbo engine under the hood, making it a true powerhouse on the road. And with its sleek, sporty design and luxurious AMG interior, the ML 63 is the perfect combination of style and performance.</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6  ml-[90px] mt-[-167px]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
            />
          </svg>
        </div>
        <div className="post-div2">
        <div>
          <div className="circle-dp"></div>
          <p className="ml-[95px] mt-[-30px] font-semibold font-sans">fordmustang<span className="font-normal text-sm ml-[5px] text-gray-500"> 1w</span></p>
          </div>
            <img src="car3.jpg" className="car-img" onDoubleClick={()=>{like1?setLike1(false):setLike1(true)}}/>
            <svg
             onClick={()=>{like1?setLike1(false):setLike1(true)}}
            xmlns="http://www.w3.org/2000/svg"
            fill={!like1?"none":"red"}
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6  ml-[53px] mt-[10px]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          <p className="ml-[73px]">5,534 likes</p>
          <div className="circle2"></div>
          <p className="ml-[53px] mt-[5px]"><a className="font-semibold">fordmustang</a> Be pride of the power you have!</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6  ml-[90px] mt-[-71px]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default page;
