'use client';
import React, { useState, useEffect, useContext } from 'react';
import SidNav from '../../shared/SidNav';
import './prfl.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import instance from '@/app/instance/instance';
import { toast } from 'react-hot-toast';
import { GlobalContext } from "@/app/globalContext/context";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: 0,
  boxShadow: 24,
  p: 4,
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function Page() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [password, setPassword] = useState('');
  const [value, setValue] = useState(0);
  const [followers, setFollowers] = useState<number | undefined>();
  const [following, setFollowing] = useState<number | undefined>();
  const [userId, setUserId] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  const  { post, setPost} = useContext<any>(GlobalContext);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      
      setUserId(typeof localStorage !== 'undefined' ? localStorage.getItem("userid") : null);
      setUsername(typeof localStorage !== 'undefined' ? localStorage.getItem("username") : null);
    }
  }, []);

  const fetchUser = async () => {
    try {
      if (userId) {
        const response = await instance.get(`/user/${userId}`);
        const followersCount = response.data.followers.length;
        const followingsCount = response.data.following.length;
        setFollowers(followersCount);
        setFollowing(followingsCount);
      }
    } catch (error) {
      console.error('error fetching user data', error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUser();
    }
  }, [userId]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handlePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    const changePassword = {
      password: password,
    };

    try {
      const response = await instance.post('/auth/changepassword', changePassword);
      if (response.data) {
        toast.success('Password Changed Successfully');
        setPassword('');
      }
    } catch (error) {
      console.error('Error changing password:', error);
    }
  };

  return (
    <div>
      <SidNav />
      <div className="w-[1200px] h-[400px] float-end">
        <div className="dp"></div>
        <h3 className="ml-[450px] mt-[-130px] font-semibold">{username}</h3>
        <button className="bg-gray-200 rounded w-[120px] h-[30px] ml-[520px] mt-[-28px] font-semibold text-custom absolute">Edit profile</button>
        <button className="bg-gray-200 rounded w-[120px] h-[30px] ml-[650px] mt-[-28px] font-semibold text-custom absolute">View archive</button>
        <svg
          onClick={handleOpen}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-7 h-7 ml-[785px] mt-[-25px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
          />
        </svg>
        {/* modal box */}
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Settings
            </Typography>
            <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
              >
                <Tab label="Account" {...a11yProps(0)} />
                <Tab label="Privacy" {...a11yProps(1)} />
                <Tab label="Security" {...a11yProps(2)} />
                <Tab label="Agree&Policy" {...a11yProps(3)} />
                <Tab label="Log out" {...a11yProps(4)} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <p>Change Password</p>
                <br />
                <form onSubmit={handlePassword}>
                  <input required type="password" placeholder="Enter Current Password" className="pl-[5px] border border-black" />
                  <br />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Enter New Password"
                    className="pl-[5px] border border-black mt-[15px]"
                  />
                  <br />
                  <button type="submit" className="mt-[15px] bg-black text-white w-[200px]">
                    Save
                  </button>
                </form>
              </TabPanel>
              <TabPanel value={value} index={1}>
                Privacy
              </TabPanel>
              <TabPanel value={value} index={2}>
                Security
              </TabPanel>
              <TabPanel value={value} index={3}>
                Agree&Policy
              </TabPanel>
              <TabPanel value={value} index={4}>
                Log out
              </TabPanel>
            </Box>
          </Box>
        </Modal>
        {/* ********** */}
        <p className="ml-[450px] mt-[30px]">
          <span className="font-bold">{post.length}</span> post
        </p>
        <p className="ml-[535px] mt-[-24px]">
          <span className="font-bold">{followers}</span> followers
        </p>
        <p className="ml-[680px] mt-[-24px]">
          <span className="font-bold">{following}</span> following
        </p>
        <p className="ml-[450px] mt-[10px]">🗽</p>
        <div className="highlight1-dp">
          <div className="inner-1"></div>
          <p className='text-[12px] mt-[8px] ml-[15px]'>Travel 🌏</p>
        </div>

        <div className="highlight2-dp">
          <div className="inner-2"></div>
          <p className='text-[12px] mt-[8px] ml-[35px]'>. .</p>
        </div>
        <div className="highlight3-dp">
          <div className="inner-3"></div>
          <p className='text-[12px] mt-[8px] ml-[20px]'>#alone</p>
        </div>
        <div className="mt-20 w-[900px] ml-[200px]">
            <div
              style={{ borderTop: "1px solid #333" }}
              className="w-1/1 h-10  flex items-center ml-[-120px]"
            >
              <h1 className=" text-black ml-[480px] text-[19px]">POSTS</h1>
            </div>
            {post.map((item: any, index: any) => (
              <div
                key={index}
                style={{
                  border: "2px solid black",
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className=" float-left w-64 h-64 "
              ></div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default Page;
