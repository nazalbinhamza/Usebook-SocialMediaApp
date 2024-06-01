"use client";
import React, { useState,useRef,useEffect } from "react";
import "./Home.css";
import SidNav from "./components/SidNav";
import StoryNav from "./components/StoryNav";
import Suggetion from "./components/suggetion";
import { toast } from 'react-hot-toast';
import instance from "@/app/instance/instance";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

// const style = {
//   position: "absolute" as "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#1c1c1c',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  outline: 'none',
  color: 'white',
};

const buttonStyle = {
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'center'
};

function page() {


  const fileInputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [selectFile, setSelectFile] = useState(null);
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [post,setPost ]= useState<any>([])
  
  const [like, setLike] = useState(false);
  const [like1, setLike1] = useState(false);


  const isEmpty = post === null;


 
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  const handleFile = (e:any) => {
    if (e.target.files && e.target.files[0]) {
      setSelectFile(e.target.files[0]);
    } else {
      console.log('No file selected');
    }
  };

  let userid:any = (localStorage.getItem("userid"))
  const handleApi = async (post:any) => {  
    let userid:any = (localStorage.getItem("userid"))
    
   
    const formData = new FormData();
    formData.append('file', post);
    formData.append('desc', description);
    formData.append('userId', userid);
    try {
      const response = await instance.post('/createPost', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log('Post created:', response.data);
      setImageUrl(response.data.post.image);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  useEffect(()=>{
    const fetchData = async ()=>{
     try {
       const response = await instance.get(`./posts/${userid}/timeline`)
       if (response.status==200){
         setPost(response.data)
         
       }
     } catch (error) {
       console.log(error)
     }
     
    }
    fetchData()
 
   },[])

  const addPost = () => {
    if (selectFile) {
      handleApi(selectFile);   
  
      handleClose(); 
    }
  };


  return (
    <div>
      <SidNav />
      <Suggetion />
      <div className="post-section float-right">
        <StoryNav />
       
      <div className="h-[80px] w-[620px] ml-[55px] mt-[30px] border-2 border-black rounded-md pl-[190px] pt-[20px]">
      <button className="border-2 border-gray-600 rounded-xl w-[250px] h-[40px] text-[12px]" onClick={handleOpen} >Start a post, try writing with AI</button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create Post
            </Typography>

            <div className="h-[50px] w-[325px] border-2 border-black rounded-md pt-[8px] pl-[10px]">
              <input
                ref={fileInputRef}
                onChange={handleFile}
                type="file"
                accept="image/*"
              />
            </div>
            <TextField
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              InputLabelProps={{ style: { color: '#fff', borderColor: 'white' } }}
              InputProps={{ style: { color: '#fff', borderColor: '#fff' } }}
            />
            <div style={buttonStyle}>
              <Button variant="outlined" style={{ color: 'white' }} onClick={handleClose}>Cancel</Button>
              <Button variant="contained" color="primary" onClick={addPost} style={{ marginLeft: '10px' }}>Post</Button>
            </div>
          </Box>
        </Fade>
      </Modal>
      {!isEmpty&&<>
         {post.map((item:any,index:any)=>(
            <div className="post-div">
          <div>
            <div className="circle1"></div>
            <p className="ml-[95px] mt-[-30px] font-semibold font-sans">
              {localStorage.getItem('username')}
              <span className="font-normal text-sm ml-[5px] text-gray-500">
                {" "}
                2s
              </span>
            </p>
          </div>
        <div style={{borderRadius:'10px',width:'470px',height:'400px', backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center',marginTop:'40px',marginLeft:'45px'}}></div>
          
         
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
          <p className="ml-[73px]">126 likes</p>
          <div className="circle2"></div>
        
            <p className="ml-[53px] mt-[5px]">
            <a className="font-semibold">{localStorage.getItem('username')}</a>
                  <a>{item.desc}</a>
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
     ))}
        </>} 
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
            the hood, making it a true powerhouse on the road.
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6  ml-[90px] mt-[-121px]"
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
