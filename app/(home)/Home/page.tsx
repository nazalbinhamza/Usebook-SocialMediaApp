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
  const [post,setPost ]= useState<any>([]);
  const [like, setLike] = useState<any>(false);
  const [count,setCount] = useState(0);
  const [comment,setComment] = useState('');
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
      toast.success("Posted Successfully");
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
 



  // ************** Delete Post ******************


  const deletePost = async(id:any)=>{
    
    
    try {
      let usrid:any = (localStorage.getItem("userid"));
      let data = {
        userId : usrid
      }
      
      const response = await instance.delete(`/posts/${id}`,{data});
      if (response.status==200){
        setPost((prevPosts: any[]) => prevPosts.filter(post => post._id !== id));
        toast.error('Post Deleted');
      }
    } catch(error) {
      console.error('Error Deleting Post:', error);
    }
  }

  // ****** Comment Function ***** //


  const commentHandle = async (id:any)=>{
   
    
    try {
      let usrid:any = (localStorage.getItem("userid"));
      let data = {
        userId : usrid,
        text : comment
      }
      
      const response = await instance.post(`/posts/${id}/comment`,{...data});
      if (response.status==200){
        const updatedPosts = post.map((item: any) => {
          if (item._id === id) {
            return {
              ...item,
              comments: response.data.comments
            };
          }
          return item;
        });

        setPost(updatedPosts);
        setComment('')
        toast.success('Commented');
      }
    } catch(error) {
      console.error('CommentError:', error);
    }

  }




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
         {post && post.map((item:any,index:any)=>(
           
            <div className="post-div">
            <div className="post-bg pl-[-70px] pt-[20px]">
          <div>
            <div className="circle1"></div>
            <p className="ml-[75px] mt-[-30px] font-semibold font-sans">
              {localStorage.getItem('username')}
              <span className="font-normal text-sm ml-[5px] text-gray-500">
                {" "}
                2s
              </span>
            </p>
            {/* Delete Post */}

      
            <button onClick={()=>deletePost(item._id)} className="bin-button ml-[460px] mt-[-15px]">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 39 7"
                className="bin-top"
            >
                <line stroke-width="4" stroke="white" y2="5" x2="39" y1="5"></line>
                <line
                stroke-width="3"
                stroke="white"
                y2="1.5"
                x2="26.0357"
                y1="1.5"
                x1="12"
                ></line>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 33 39"
                className="bin-bottom"
            >
                <mask fill="white" id="path-1-inside-1_8_19">
                <path
                    d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
                ></path>
                </mask>
                <path
                mask="url(#path-1-inside-1_8_19)"
                fill="white"
                d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                ></path>
                <path stroke-width="4" stroke="white" d="M12 6L12 29"></path>
                <path stroke-width="4" stroke="white" d="M21 6V29"></path>
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 89 80"
                    className="garbage"
                >
                    <path
                    fill="white"
                    d="M20.5 10.5L37.5 15.5L42.5 11.5L51.5 12.5L68.75 0L72 11.5L79.5 12.5H88.5L87 22L68.75 31.5L75.5066 25L86 26L87 35.5L77.5 48L70.5 49.5L80 50L77.5 71.5L63.5 58.5L53.5 68.5L65.5 70.5L45.5 73L35.5 79.5L28 67L16 63L12 51.5L0 48L16 25L22.5 17L20.5 10.5Z"
                    ></path>
                </svg>
              </button>
           

              {/*****End Delete Button*****/}
          </div>
        <div style={{borderRadius:'10px',width:'470px',height:'400px', backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center',marginTop:'20px',marginLeft:'25px'}}></div>
          
        <div className="ml-[-25px]">
          <svg
            onClick={() => {
              if(like){
                setLike(false)
                setCount(count-1)
              }else{
                setLike(true)
                setCount(count+1)
              }
              // like ? setLike(false) : setLike(true), setCount(count+1);
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
          <p className="ml-[73px]">{count} likes</p>
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
          <input onChange={(e)=>setComment(e.target.value)} value={comment} type="text" placeholder="Add Your Comment" className="mt-[60px] ml-[55px] h-[40px] w-[455px] border-2 border-gray-300 rounded-md pl-[20px] hover:border-black " />
          <button onClick={()=>commentHandle(item._id)} className="hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 ml-[-30px] t-[10px]">
               <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </button>
          </div>
          </div>
        </div>

     ))}
        </>} 
      </div>
    </div>
  );
}

export default page;
