import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from './modules/WelcomePage/WelcomePage';
import MainPage from './components/pages/main/MainPage';
import VideoPostPage from './components/pages/videoPage/videoPostPage';
import UserCabinet from './modules/UserCabinet/UserCabinet';
import RegistrationPage from './components/pages/RegistrationPage/RegistrationPage';
import ClearUserService from './modules/WelcomePage/ClearUserService/ClearUserService';
import UserVideoPage from './components/pages/userVideo/userVideoPage';
import PrivateMessagePage from './components/pages/PrivateMessagePage/PrivateMessagePage';
import VkLogin from './modules/WelcomePage/VkLogin/VkLogin';
import VkLoginName from './modules/WelcomePage/VkLogin/VkLoginName';
import UserVideoArchive from './components/pages/userVideoArchive/userVideoArchive';
import { ENV } from './constants/constants';

export default function AppRouter() {

    

    function routeEnrichEnv(route) {
        return `${ENV}/${route}`
    }

    function rootPathEnrichEnv(route) {
        return ENV + route + '/'
    }
        
    
    const path = '/'+routeEnrichEnv('main/')
    console.log('PATH222', path)
    
    
  return (
    <div>
    <Routes>
        <Route path='login/' element={<Navigate replace to={routeEnrichEnv('')}/>}/>
        <Route path='/' element={<Navigate replace to={routeEnrichEnv('')}/>}/>
        <Route path={routeEnrichEnv('')} element={<WelcomePage/>} />
        <Route path={routeEnrichEnv('registration/')} element={<RegistrationPage/>} />
        <Route path='/login/:params' element={<VkLogin />} />
        <Route path={'/'+routeEnrichEnv('main/')} element={<MainPage/>} />
        <Route path={routeEnrichEnv('lk/')} element={<UserCabinet/>} />
        <Route path="video/:id" element={<VideoPostPage/>}/>
        <Route path={routeEnrichEnv('userclean/')} element={<ClearUserService/>}/>
        <Route path={routeEnrichEnv('userVideoPage/')} element={<UserVideoPage/>}/>
        <Route path={routeEnrichEnv('userVideoArchive/')} element={<UserVideoArchive/>} />    
        <Route path={`/privateMessages/`} element={<PrivateMessagePage/>} />
        <Route path='/retrieveName/:params' element={<VkLoginName />} />
    </Routes>
    </div>
  )
}
