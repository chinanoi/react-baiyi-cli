import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styles from './LayOut.module.less';
import { globalState, increment, decrement } from 'Src/app/globalReducer';
import { useSelector, useDispatch } from 'react-redux';

const LayOut = () => {
    const { count } = useSelector(globalState);
    const dispatch = useDispatch();

    return (
        <div className={styles.layoutBox}>
            <div className="header">
                这是一个脚手架
            </div>
            <div>
                这是redux的count：{count}
                <button onClick={() => { dispatch(increment()); }}>count++</button>
                <button onClick={() => { dispatch(decrement()); }}>count--</button>
            </div>
            <div className="leftBox">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/project">project</Link>
                <Link to="/another">Another</Link>
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

export default LayOut;
