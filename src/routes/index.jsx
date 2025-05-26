// router/index.js
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import ProfileLayout from '../layout/ProfileLayout';

import Home from '../pages/Home';
import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import ResetPassword from '../pages/Auth/ResetPassword';
import Enteropt from '../pages/Auth/EnterOTP';
import Chat from '../pages/Chat/Chat';

import NewFeeds from '../pages/NewFeeds';
import Members from '../pages/Members';
import ProfileDetailPage from '../pages/Profile';
import EditProfileComponent from '../components/ProfilePagecomponent/EditProfileComponent';
import EditProfilePage from '../pages/EditProfilePage';
import AllOrdersComponent from '../components/ProfilePagecomponent/MyOrders';
import CamperPage from '../pages/Camperpage/CamperPage';
import AccountSettingPage from '../pages/AccountSettingPage';
import NotificationPage from '../pages/NotificationPage';
import CreateCamper from '../pages/Camperpage/CreatCamperPage';
import PhotoandVideoPage from '../pages/UploadVideoandPhoto/UploadVideoandPhoto';
import ConnectionPage from '../pages/Connection/ConnectionPage';
import ForumPage from '../pages/ForumPage';
import GroupsPage from '../pages/Group/GroupsPage';
import CreateGroupPage from '../pages/Group/CreateGroupPage';
import SellMyCar from '../pages/SellMyCarPage/SellMyCar';
import HandoverProtocol from '../pages/ProtocolPage/handover-protocol';



const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'new-feed',
        element: <NewFeeds />,
      },
      {
        path: 'members',
        element: <Members />,
      },
      {
        path: 'chat',
        element: <Chat />,
      },
      {
        path: 'creat-group',
        element: <CreateGroupPage/>,
      },
      {
        path: 'profile',
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <ProfileDetailPage />,
          },
          {
            path:"edit",
            index: true,
            element: <EditProfileComponent />,
          },
          {
            path:"my-orders",
            index: true,
            element: <AllOrdersComponent />,
          },
          {
            path:"my-camper",
            index: true,
            element: <CamperPage />,
          },
          {
            path:"creat-camper",
            index: true,
            element: < CreateCamper />,
          },
          {
            path:"connection",
            index: true,
            element: < ConnectionPage/>,
          },
          {
            path:"sell-my-car",
            index: true,
            element: < SellMyCar/>,
          },
          {
            path:"protocol",
            index: true,
            element: <  HandoverProtocol/>,
          },

          {
            path:"my-video",
            index: true,
            element: < PhotoandVideoPage/>,
          },
          {
            path:"my-photos",
            index: true,
            element: < PhotoandVideoPage/>,
          },
          {
            path:"forum",
            index: true,
            element: < ForumPage/>,
          },
          {
            path:"groups",
            index: true,
            element: < GroupsPage/>,
          },
          
         
          
        
        ],
      },
      {
        path: 'make-profile',
        element: < EditProfilePage/>,
       
      },
      {
        path: 'account-setting',
        element: <AccountSettingPage />,
      },
      {
        path: 'notifications',
        element: <NotificationPage />,
      }
    ],
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/enter-otp',
    element: <Enteropt />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },
]);

export default router;
