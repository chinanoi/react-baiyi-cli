import React from 'react';
import {Link} from 'react-router-dom';
import './About.less';

const About = () => {
    return (
        <div className="AboutList">
            About  List
            <div>假如我是列表表格组件</div>
            <Link to="/about/add">添加</Link>
            <Link to="/about/edit">编辑</Link>
        </div>
    );
};

export default About;