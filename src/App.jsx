import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Addcourse from './components/Addcourse';
import Allcourse from './components/AllCourse';
import { userState } from './store/atoms/user';
import axios from 'axios';

function App() {
  return (
    
    <RecoilRoot>
      <>
      <Router>
          <Navbar />
          <Init/>
        <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/signup'} element={<Signup />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/addcourse'} element={<Addcourse />} />
            <Route path={'/allcourse'} element={ <Allcourse/>} />
        </Routes>
        </Router>
        </>
       </RecoilRoot>
    
  )
}

function Init() {
  const setUser = useSetRecoilState(userState);
     var init = async () => {
       try {
      console.log("init request hit");
      const response = await axios.get("http://localhost:3000/detail/me", {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      })
    
      if (response.status==200) {
        console.log("no error detail me");
        console.log(response.data.email);
        setUser({
          isLoading: false,
          email: response.data.email,
        })
      }
      else {
        setUser({
          isLoading: false,
          email: null,
        })
      }
    }
    catch (err) {
      console.log(err);
      setUser({
        isLoading: false,
        email: null,
      })
    }
  }
  
 
  useEffect(() => {
      init();
    }, []);
    return (
      <></>
    )
}
  export default App;
