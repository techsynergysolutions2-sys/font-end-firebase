import React,{useState,useEffect} from 'react'
import {Layout, Button, Dropdown,Avatar,Col, Row,Typography,Badge } from 'antd';
import {AppstoreOutlined,UserOutlined,BellOutlined,MessageOutlined } from '@ant-design/icons';
import {useNavigate, Outlet } from 'react-router-dom'
import {onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from 'firebase/firestore';
import {auth, db} from '../shared/firebase'
import { fnLogin,fnCheckExpiryDate } from '../shared/shared';

import SidebarMenu from '../components/SidebarMenu';

const { Header, Content } = Layout;

function Home() {

  const navigate = useNavigate();

  useEffect(() => {
    fnCheckExpiryDate()

  },[])

  return (
 <Layout style={{height: '100vh'}}>
    <SidebarMenu collapse={false} />
    <Layout>

         <Content>
            
          <Outlet />

         </Content>
        </Layout>
    </Layout>
  )
}

const Styles = {
    btn: {
        marginLeft: 10,
        marginTop: '-10px'
    },
    text: {
      fontFamily: "'Poppins', sans-serif",
    }
  }

export default Home