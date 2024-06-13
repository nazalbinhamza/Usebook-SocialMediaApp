'use client';

import { createContext, useEffect, useState, ReactNode, Dispatch, SetStateAction } from "react";
import instance from "../instance/instance";

interface Post {
  _id: string;
  image: string;
  desc: string;
  likes: number;
  comments: string[];
}

interface GlobalContextType {
  post: Post[];
  setPost: Dispatch<SetStateAction<Post[]>>;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [post, setPost] = useState<Post[]>([]);

  // State to store userId and username
  const [userId, setUserId] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const userid = typeof localStorage !== 'undefined' ? localStorage.getItem("userid") : null;
    setUserId(userid);
    const username = typeof localStorage !== 'undefined' ? localStorage.getItem("username") : null;
    setUsername(username);
  }, []);

//   const handleApi = async (post: File) => {
//     const formData = new FormData();
//     formData.append('file', post);
//     formData.append('desc', description);
//     formData.append('userId', userId || "");
//     try {
//       const response = await instance.post('/createPost', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });
//       toast.success("Posted Successfully");
//       console.log('Post created:', response.data);
//       setImageUrl(response.data.post.image);
//     } catch (error) {
//       console.error('Error creating post:', error);
//     }
//   };

//   const handleClose = () => setSelectFile(null);

//   const addPost = () => {
//     if (selectFile) {
//       handleApi(selectFile);
//       handleClose();
//     }
//   };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(`./posts/${userId}/timeline`);
        if (response.status === 200) {
          setPost(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (userId) {
      fetchData();
    }
  }, [userId]);

  return (
    <GlobalContext.Provider value={{
      post,
      setPost
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

