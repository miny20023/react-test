import React from "react";
import './title.scss';
import {useLocation} from 'react-router-dom';

/* 현재 페이지의 타이틀 */
/* ex) 대시보드, 사용자 관리, 사용자 정보 */
function Title() {
    const location = useLocation();
    return (
        <div className='userInfo_title'>
            <p className='userInfo_p'>{location.state.contentTitle}</p>
        </div>
    );
}

export default Title;