"use client";
import React, { useState } from "react";
import "./Home.css";
import SidNav from "./components/SidNav";
import StoryNav from "./components/StoryNav";
import Suggetion from "./components/suggetion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function page() {
  const [like, setLike] = useState(false);
  const [like1, setLike1] = useState(false);
  const [selectFile,setSelectFile] = useState(null);
  const [description,setDescription] = useState('')

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFile = (e:any)=> {
    e.preventDefault();
    if(e.target.files && e.target.files[0]){
      setSelectFile(e.target.files[0]);
    }else {
      console.log('No File Selected');
    }
  }

  const handleDesc = (e:any)=>{
    e.preventDefault();
    if(e.target.value){
      setDescription(e.target.value)
    }else{
      console.log('No Description');
    }
  }

  return (
    <div>
      <SidNav />
      <Suggetion />
      <div className="post-section float-right">
        <StoryNav />
        <div className="h-[80px] w-[620px] ml-[55px] mt-[30px] border-2 border-black rounded-md pl-[190px] pt-[20px]">
          <button className="border-2 border-gray-600 rounded-xl w-[250px] h-[40px] text-[12px]" onClick={handleOpen}>Start a post, try writing with AI</button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Create a Post
              </Typography>
              <div className="h-[250px] w-[325px] border-2 border-black rounded-md">
                <input type="file" onChange={handleFile}/>
                {selectFile ? (
                  <img src={URL.createObjectURL(selectFile)} alt="preview" width={200} height={100} />

                ):(
                  <img alt="Uploading Image" />
                )}
              </div>
              <input onChange={handleDesc} type="text" className="mt-[10px] h-[150px] w-[325px] border-2 border-black rounded-md" />
            </Box>
          </Modal>
        </div>
        <div className="post-div">
          <div>
            <div className="circle"></div>
            <p className="ml-[95px] mt-[-30px] font-semibold font-sans">
              roadway
              <span className="font-normal text-sm ml-[5px] text-gray-500">
                {" "}
                1w
              </span>
            </p>
          </div>
          {selectFile ? (
                  <img src={URL.createObjectURL(selectFile)} className="car-img" alt="preview" />

                ):(
                 <p> </p>
          )}
          <svg
            onClick={() => {
              like ? setLike(false) : setLike(true);
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill={!like ? "none" : "red"}
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
          <p className="ml-[53px] mt-[5px]">
            <a className="font-semibold">roadway</a> {description ? (
                  <a>{description}</a>

                ):(
                 <p> </p>
          )}
          </p>
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
        <div className="post-div">
          <div>
            <div className="circle"></div>
            <p className="ml-[95px] mt-[-30px] font-semibold font-sans">
              roadway
              <span className="font-normal text-sm ml-[5px] text-gray-500">
                {" "}
                1w
              </span>
            </p>
          </div>
          <img
            src="car4.jpg"
            className="car-img"
            onDoubleClick={() => {
              like ? setLike(false) : setLike(true);
            }}
          />
          <svg
            onClick={() => {
              like ? setLike(false) : setLike(true);
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill={!like ? "none" : "red"}
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
          <p className="ml-[53px] mt-[5px]">
            <a className="font-semibold">roadway</a> Set free the beast with the
            Mercedes-AMG ML 63. With a handcrafted AMG V8 biturbo engine under
            the hood, making it a true powerhouse on the road. And with its
            sleek, sporty design and luxurious AMG interior, the ML 63 is the
            perfect combination of style and performance.
          </p>
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
            <p className="ml-[95px] mt-[-30px] font-semibold font-sans">
              fordmustang
              <span className="font-normal text-sm ml-[5px] text-gray-500">
                {" "}
                1w
              </span>
            </p>
          </div>
          <img
            src="car3.jpg"
            className="car-img"
            onDoubleClick={() => {
              like1 ? setLike1(false) : setLike1(true);
            }}
          />
          <svg
            onClick={() => {
              like1 ? setLike1(false) : setLike1(true);
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill={!like1 ? "none" : "red"}
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
          <p className="ml-[53px] mt-[5px]">
            <a className="font-semibold">fordmustang</a> Be pride of the power
            you have!
          </p>
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
