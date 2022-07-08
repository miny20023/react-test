import React from "react";
import './breadcrumb.scss';

/* breadcrumb 컴포넌트 */
/* 1 > 2 이런식으로 되어 있는 부분*/
function Breadcrumb() {
    return (
        <div className='userInfo_breadcrumb'>
            <ul className='breadcrumb'>
                <li>사용자 관리</li>
                <li>사용자 정보</li>
            </ul>
        </div>
    );
}

export default Breadcrumb;