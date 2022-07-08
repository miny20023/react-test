import React from 'react';
import './navbar.scss';
import './navbar2.scss';
import {Link} from 'react-router-dom';

/* nav로 만든 사이드 메뉴 바 */
/* 현재 대시보드와 사용자/그룹만 링크 작업함 */
function Siderbar() {
    return (
        <div className='sidebar'>
            <div className='sidebarMenu'>
                <ul className='sidebarList'>
                    <div className='sidebarListItem_black'>
                        <Link to = '/dashboard' state={{contentTitle: '대시보드'}} style={{color: 'black', textDecoration: 'none'}}>
                        <img className='side_icon1' alt='' src={require('../../icon/Vector1.svg').default} />
                        대시보드
                        </Link>
                    </div>
                    <Link to = '/userManage' state={{contentTitle: '사용자 관리'}} style={{color: 'black', textDecoration: 'none'}}>
                    <li className='sidebarListItem_black'>
                        <img className='side_icon2' alt='' src={require('../../icon/Vector2.svg').default} />
                        사용자/그룹
                    </li>
                    </Link>
                    <li className='sidebarListItem_yellow'>
                        <img className='side_icon3' alt='' src={require('../../icon/Vector3.svg').default} />
                        카테고리 관리
                    </li>
                    <li className='sidebarListItem_black'>
                        <img className='side_icon4' alt='' src={require('../../icon/edit form.svg').default} />
                        게시글 관리
                    </li>
                    <li className='sidebarListItem_yellow'>
                        <img className='side_icon5' alt='' src={require('../../icon/Vector5.svg').default} />
                        거래내역 관리
                    </li>
                    <li className='sidebarListItem_black'>
                        <img className='side_icon6' alt='' src={require('../../icon/Vector6.svg').default} />
                        화면 / 배너 관리
                    </li>
                    <li className='sidebarListItem_black'>
                        <img className='side_icon7' alt='' src={require('../../icon/Vector7.svg').default} />
                        공지사항 / 알림관리
                    </li>
                    <li className='sidebarListItem_black'>
                        <img className='side_icon8' alt='' src={require('../../icon/Vector8.svg').default} />
                        신고 / 문의 관리
                    </li>
                    <li className='sidebarListItem_yellow'>
                        <img className='side_icon9' alt='' src={require('../../icon/Vector9.svg').default} />
                        FAQ 관리
                    </li>
                    <li className='sidebarListItem_yellow'>
                        <img className='side_icon10' alt='' src={require('../../icon/Group 683.svg').default} />
                        매출관리
                    </li>
                    <li className='sidebarListItem_yellow'>
                        <img className='side_icon11' alt='' src={require('../../icon/Group 682.svg').default} />
                        데이터 관리
                    </li>
                    <li className='sidebarListItem_yellow'>
                        <img className='side_icon12' alt='' src={require('../../icon/Group 978.svg').default} />
                        API key 관리
                    </li>
                    <li className='sidebarListItem_yellow'>
                        <img className='side_icon13' alt='' src={require('../../icon/Group 557.svg').default} />
                        설정
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Siderbar