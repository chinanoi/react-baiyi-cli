import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './LayOut.less';

const Home = () => {
    return (
        <div className="homeBox">
            <div className="header">
                这是一个脚手架
            </div>
            <div className="leftBox">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/project">project</Link>
            </div>
            <div>
                分割线
                -------------------------
            </div>
            <div className="rightBox">
                <Outlet />
            </div>
        </div>
    );
};

export default Home;