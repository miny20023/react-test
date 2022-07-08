import React from "react";
import './table1.scss';

/* table1 내용 */
/* 현재 사용자 정보 맨위에 표 */
function Table1() {
    return (
        <div className='userInfo_detail1'>
            <div className='table1_outer'>
                <div className='table1_inner'>
                    <div className='table1_tr1'>
                        <div className='table1_td1'>고유번호</div>
                        <div className='table1_td2'>#2475686</div>
                        <div className='table1_td3'>가입경로</div>
                        <div className='table1_td4'>카카오</div>
                    </div>
                    <div className='table1_tr2'>
                        <div className='table1_td1'>ID</div>
                        <div className='table1_td2'>7b118f7f-0ada-4fb6-b089-5c68334d6917</div>
                        <div className='table1_td3'>가입아이디</div>
                        <div className='table1_td4'>asdf159159@naver.com</div>
                    </div>
                    <div className='table1_tr3'>
                        <div className='table1_td1'>이름</div>
                        <div className='table1_td2'>홍길동</div>
                        <div className='table1_td3'>닉네임</div>
                        <div className='table1_td4'>일이삼사오육칠발구십일이</div>
                    </div>
                    <div className='table1_tr4'>
                        <div className='table1_td1'>핸드폰번호</div>
                        <div className='table1_td2'>010-3646-1330 (2021-10-11 18:31 인증완료)</div>
                        <div className='table1_td3'>가입일자</div>
                        <div className='table1_td4'>2020-10-01-13:56</div>
                    </div>
                    <div className='table1_tr5'>
                        <div className='table1_td1'>지역</div>
                        <div className='table1_td2'>서울특별시</div>
                        <div className='table1_td3'>상태</div>
                        <div className='table1_td4'>활성화</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table1;