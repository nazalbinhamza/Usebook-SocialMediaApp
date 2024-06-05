'use client';
import React, { useState } from 'react';
import SidNav from '../Home/components/SidNav';
import './prfl.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button } from '@mui/material';
import instance from '@/app/instance/instance';
import { toast } from 'react-hot-toast';

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

function page() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [password,setPassword] = useState('');

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handlePassword = async (e:any)=>{
    e.preventDefault();
    const changePassword = {
      password : password
    }

    try {

      const response = await instance.post('/auth/changepassword',changePassword);
      if(response.data){
        toast.success("Password Changed Succefully");
        setPassword('');
      } 
    } catch (error) {
      console.error('Error creating post:', error);
    }

  }

  
  return (
    <div>
        <SidNav />
        <div className='w-[1200px] h-[400px] float-end'>
          <div className='dp'></div>
          <h3 className='ml-[450px] mt-[-130px] font-semibold'>{localStorage.getItem('username')}</h3>
          <button className='bg-gray-200 rounded w-[120px] h-[30px] ml-[520px] mt-[-28px] font-semibold text-custom absolute'>Edit profile</button>
          <button className='bg-gray-200 rounded w-[120px] h-[30px] ml-[650px] mt-[-28px] font-semibold text-custom absolute'>View archive</button>
          <svg onClick={handleOpen} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7 ml-[785px] mt-[-25px]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
          </svg>
          {/* modal box */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Settings
              </Typography>
              <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
              >
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  sx={{ borderRight: 1, borderColor: 'divider'}}
                >
                  <Tab label="Account" {...a11yProps(0)} />
                  <Tab label="Privacy" {...a11yProps(1)} />
                  <Tab label="Security" {...a11yProps(2)} />
                  <Tab label="Agree&Policy" {...a11yProps(3)} />
                  <Tab label="Log out" {...a11yProps(4)} />
                </Tabs>
                <TabPanel value={value} index={0}>
            
                  <p>Change Password</p><br />
                  <form onSubmit={handlePassword}>
                  <input required type='password' placeholder='Enter Current Password' className='pl-[5px] border border-black ' /><br />
                  <input onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter New Password' className='pl-[5px] border border-black mt-[15px]' /><br />
                  <button type='submit' className=' mt-[15px] bg-black text-white w-[200px]' >Save</button>
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