"use client";
import React, { useState, useRef, useEffect, useContext } from "react";
import "./Home.css";
import SidNav from "../../shared/SidNav";
import StoryNav from "../../shared/StoryNav";
import Suggetion from "../../shared/suggetion";
import { toast } from "react-hot-toast";
import instance from "@/app/instance/instance";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import { GlobalContext } from "@/app/globalContext/context";
import Loader from "@/app/shared/loader/Loader";

interface Post {
  _id: string;
  image: string;
  desc: string;
  likes: number;
  comments: string[];
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "#1c1c1c",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  outline: "none",
  color: "white",
};

const buttonStyle = {
  marginTop: "10px",
  display: "flex",
  justifyContent: "center",
};

const Page = ()=> {
 const  { post, setPost} = useContext<any>(GlobalContext);
  const isEmpty = post.length === 0;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [selectFile, setSelectFile] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [like, setLike] = useState<boolean>(false);
  const [count, setCount] = useState(0);
  const [comment, setComment] = useState('');
  const [isLoading,setIsLoading] = useState(true);

  // // State to store userId and username
  const [userId, setUserId] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const userid = typeof localStorage !== 'undefined' ? localStorage.getItem("userid") : null;
    setUserId(userid);
    const username = typeof localStorage !== 'undefined' ? localStorage.getItem("username") : null;
    setUsername(username);
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
      setImageUrl(response.data.post.image);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };


  const addPost = () => {
    if (selectFile) {
      handleApi(selectFile);
      handleClose();
    }
  };

  const fetchLike = async (id: string) => {
    try {
      const datas = {
        userId: userId
      };
      const response = await instance.put(`/posts/${id}/like`, { ...datas });
      if (response.status === 200) {
        setLike(!like);
        setCount(response.data.likes);

        const updatedLikes = post.map((item: Post) => {
          if (item._id === id) {
            return {
              ...item,
              likes: response.data.likes
            };
          }
          return item;
        });
        setPost(updatedLikes);
        toast.success('liked');
      }
    } catch (error) {
      toast.error('something error');
      console.error('error like : ', error);
    }
  };

  const deletePost = async (id: string) => {
    try {
      const data = {
        userId: userId
      };
      const response = await instance.delete(`/posts/${id}`, { data });
      if (response.status === 200) {
        setPost((prevPosts: Post[]) => prevPosts.filter(post => post._id !== id));
        toast.error('Post Deleted');
      }
    } catch (error) {
      console.error('Error Deleting Post:', error);
    }
  };

  const commentHandle = async (id: string) => {
    try {
      const data = {
        userId: userId,
        text: comment
      };
      const response = await instance.post(`/posts/${id}/comment`, { ...data });
      if (response.status === 200) {
        const updatedPosts = post.map((item: Post) => {
          if (item._id === id) {
            return {
              ...item,
              comments: [...item.comments, comment]
            };
          }
          return item;
        });

        setPost(updatedPosts);
        setComment('');
        toast.success('Commented');
      }
    } catch (error) {
      console.error('CommentError:', error);
    }
  };

  useEffect(()=>{
    const dataFetch = ()=> {
      setTimeout(()=>{
        setIsLoading(false)
      }, 1500)
    };
    dataFetch();
  },[])

  return isLoading ? (
    <Loader />
  ):(
    <div>
      <SidNav />
      <Suggetion />
      <div className="post-section float-right">
        <StoryNav />

        <div className="new-post h-[80px] w-[620px] ml-[55px] mt-[30px] border-2 border-gray-400 rounded-md pl-[190px] pt-[20px] bg-white">
          <button
            className="border-2 border-gray-400 rounded-xl w-[250px] h-[40px] text-[12px] post-btn"
            onClick={handleOpen}
          >
            Start a post, try writing with AI
          </button>
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
                InputLabelProps={{
                  style: { color: "#fff", borderColor: "white" },
                }}
                InputProps={{ style: { color: "#fff", borderColor: "#fff" } }}
              />
              <div style={buttonStyle}>
                <Button
                  variant="outlined"
                  style={{ color: "white" }}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={addPost}
                  style={{ marginLeft: "10px" }}
                >
                  Post
                </Button>
              </div>
            </Box>
          </Fade>
        </Modal>

        {!isEmpty && (
          <>
            {post.map((item: any, index: any) => (
              <div key={item._id} className="post-div">
                <div className="post-bg pl-[-70px] pt-[20px]">
                  <div>
                    <div className="circle1"></div>
                    <p className="ml-[75px] mt-[-30px] font-semibold font-sans">
                      {/* username space */}
                      <span className="font-normal text-sm ml-[5px] text-gray-500">
                        {" "}
                        2s
                      </span>
                    </p>
                    {/* Delete Post */}

                    <button
                      onClick={() => deletePost(item._id)}
                      className="bin-button ml-[460px] mt-[-15px]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 39 7"
                        className="bin-top"
                      >
                        <line
                          strokeWidth="4"
                          stroke="white"
                          y2="5"
                          x2="39"
                          y1="5"
                        ></line>
                        <line
                          strokeWidth="3"
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
                          <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
                        </mask>
                        <path
                          mask="url(#path-1-inside-1_8_19)"
                          fill="white"
                          d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                        ></path>
                        <path
                          strokeWidth="4"
                          stroke="white"
                          d="M12 6L12 29"
                        ></path>
                        <path
                          strokeWidth="4"
                          stroke="white"
                          d="M21 6V29"
                        ></path>
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
                  <div
                    style={{
                      borderRadius: "10px",
                      width: "470px",
                      height: "400px",
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      marginTop: "20px",
                      marginLeft: "25px",
                    }}
                    className="img-post"
                  ></div>

                  <div className="ml-[-25px]">
                    <svg
                      onClick={() => fetchLike(item._id)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={setPost ? "none" : "none"}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6  ml-[53px] mt-[10px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                    <p className="ml-[73px]">{item.likes?.length} likes</p>
                    <div className="circle2"></div>

                    <p className="ml-[53px] mt-[5px]">
                      <a className="font-semibold">
                        {item.username}
                      </a>
                      <a>{item.desc}</a>
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6  ml-[90px] mt-[-71px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                      />
                    </svg>
                    <input
                      onChange={(e) => setComment(e.target.value)}
                      value={comment}
                      type="text"
                      placeholder="Add Your Comment"
                      className="cmnt-inp mt-[60px] ml-[55px] h-[40px] w-[455px] border-2 border-gray-300 rounded-md pl-[20px] hover:border-black "
                    />
                    <button
                      onClick={() => commentHandle(item._id)}
                      className="hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 ml-[-30px] t-[10px]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="w-[400px] h-[40px] ml-[60px] mt-[5px] overflow-auto">
                    {item.comments && item.comments.length > 0 ? (
                      <div>
                        <p>Comments:</p>
                        {item.comments.map(
                          (comment: any, commentIndex: any) => (
                            <p key={commentIndex}>{comment.text}</p>
                          )
                        )}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Page;