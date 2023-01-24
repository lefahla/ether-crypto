import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollecteOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/download.png'


const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size="large"/>
            <Typography.Title level={3} className="logo">
                <Link to="/">Cryptoverse</Link>
            </Typography.Title>
            <Button className="menu-control-container"></Button>
        </div>
    </div>
  );
}

export default Navbar