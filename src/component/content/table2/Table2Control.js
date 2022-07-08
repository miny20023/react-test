import React from "react";
import './table2.scss';
import './table2_col8.scss';
import './table2_col10.scss';
import { Link } from 'react-router-dom'

/* Table2에 무슨 내용 표현 할 지 결정 */
/* table column이 바뀌므로 css가 각각 있어야하나?? 일단은 그렇게 구성 */
function Table2Control(props) {
    if(props.what_table === 'userList')
    {   
        const l = ['NO','이름','고유번호','가입경로','사용자 아이디','닉네임','상태'];
        return(
            <div className='table2_outer'>
                <div className='table2_tr1_col8'>
                    <div className='table2_td1'><input type='checkbox' className='allCheck'></input></div>
                    <div className='table2_td2'>{l[0]}</div>
                    <div className='table2_td3'>{l[1]}</div>
                    <div className='table2_td4'>{l[2]}</div>
                    <div className='table2_td5'>{l[3]}</div>
                    <div className='table2_td6'>{l[4]}</div>
                    <div className='table2_td7'>{l[5]}</div>
                    <div className='table2_td8'>{l[6]}</div>
                </div>
                <div className='table2_tr2_col8'>
                        <div className='table2_td1'><input type='checkbox' className='oneCheck'></input></div>
                        <div className='table2_td2'>13445</div>
                        <Link to='/tmp' state={{id: 'tmp_id', contentTitle: '사용자 정보'}} style={{color: 'black', textDecoration: 'none'}}>
                        <div className='table2_td3'>홍길동</div>
                        </Link>
                        <div className='table2_td4'>G1010102475686</div>
                        <div className='table2_td5'>카카오</div>
                        <div className='table2_td6'>asdfasdf1245@naver.com</div>
                        <div className='table2_td7'>일이삼사오육칠팔구십일이</div>
                        <div className='table2_td8'>활성화</div>
                </div>
                <div className='table2_tr2_col8'>
                        <div className='table2_td1'><input type='checkbox' className='oneCheck'></input></div>
                        <div className='table2_td2'>13445</div>
                        <div className='table2_td3'>홍길동</div>
                        <div className='table2_td4'>G1010102475686</div>
                        <div className='table2_td5'>카카오</div>
                        <div className='table2_td6'>asdfasdf1245@naver.com</div>
                        <div className='table2_td7'>일이삼사오육칠팔구십일이</div>
                        <div className='table2_td8'>활성화</div>
                </div>
                <div className='table2_tr2_col8'>
                        <div className='table2_td1'><input type='checkbox' className='oneCheck'></input></div>
                        <div className='table2_td2'>13445</div>
                        <div className='table2_td3'>홍길동</div>
                        <div className='table2_td4'>G1010102475686</div>
                        <div className='table2_td5'>카카오</div>
                        <div className='table2_td6'>asdfasdf1245@naver.com</div>
                        <div className='table2_td7'>일이삼사오육칠팔구십일이</div>
                        <div className='table2_td8'>활성화</div>
                </div>
                <div className='table2_lastLow_col8'>
                        <div className='lastLow_select'>
                            <select>
                                <option>10개씩 보기</option>
                                <option>5개씩 보기</option>
                                <option>1개씩 보기</option>
                            </select>
                        </div>
                        <div className='lastLow_pageNum'>
                            <a className='pre' href='#home1'><img src={require('../../../icon/left.svg').default} alt='' /></a>
                            <a href='#home'>1</a>
                            <a href='#home'>2</a>
                            <a href='#home'>3</a>
                            <a href='#home'>4</a>
                            <a href='#home'>5</a>
                            <a href='#home'>6</a>
                            <a href='#home'>7</a>
                            <a href='#home'>8</a>
                            <a href='#home'>9</a>
                            <a href='#home'>10</a>
                            <a className='next' href='#home1'><img src={require('../../../icon/right.svg').default} alt='' /></a>
                        </div>
                    </div>
            </div>
        );
    }
    else if(props.what_table === 'tradeList')
    {
        const l = ['NO','비즈니스 타입','제 목','닉네임','조회수','작성일자','거래상태','검수여부','활성화']
        return(
            <div className='table2_outer'>
                    <div className='table2_tr1_col10'>
                        <div className='table2_td1'><input type='checkbox' className='allCheck'></input></div>
                        <div className='table2_td2'>{l[0]}</div>
                        <div className='table2_td3'>{l[1]}</div>
                        <div className='table2_td4'>{l[2]}</div>
                        <div className='table2_td5'>{l[3]}</div>
                        <div className='table2_td6'>{l[4]}</div>
                        <div className='table2_td7'>{l[5]}</div>
                        <div className='table2_td8'>{l[6]}</div>
                        <div className='table2_td9'>{l[7]}</div>
                        <div className='table2_td10'>{l[8]}</div>
                    </div>
                    <div className='table2_tr2_col10'>
                        <div className='table2_td1'><input type='checkbox' className='oneCheck'></input></div>
                        <div className='table2_td2'>12331</div>
                        <div className='table2_td3'>홍길동</div>
                        <div className='table2_td4'>20 여성의류 스마트스토어 판매합니다, 이번주까지 시간되시는...</div>
                        <div className='table2_td5'>카카오</div>
                        <div className='table2_td6'>777</div>
                        <div className='table2_td7'>2022-04-21</div>
                        <div className='table2_td8'>판매중</div>
                        <div className='table2_td9'>대기중</div>
                        <div className='table2_td10'>활성화</div>
                    </div>
                    <div className='table2_tr2_col10'>
                        <div className='table2_td1'><input type='checkbox' className='oneCheck'></input></div>
                        <div className='table2_td2'>12332</div>
                        <div className='table2_td3'>홍길동</div>
                        <div className='table2_td4'>20 여성의류 스마트스토어 판매합니다, 이번주까지 시간되시는...</div>
                        <div className='table2_td5'>비런치관리자</div>
                        <div className='table2_td6'>123</div>
                        <div className='table2_td7'>2022-01-03</div>
                        <div className='table2_td8'>예약됨</div>
                        <div className='table2_td9'>X</div>
                        <div className='table2_td10'>활성화</div>
                    </div>
                    <div className='table2_tr2_col10'>
                        <div className='table2_td1'><input type='checkbox' className='oneCheck'></input></div>
                        <div className='table2_td2'>12333</div>
                        <div className='table2_td3'>홍길동</div>
                        <div className='table2_td4'>20 여성의류 스마트스토어 판매합니다, 이번주까지 시간되시는...</div>
                        <div className='table2_td5'>카카오</div>
                        <div className='table2_td6'>1000</div>
                        <div className='table2_td7'>2022-06-01</div>
                        <div className='table2_td8'>판매완료</div>
                        <div className='table2_td9'>O</div>
                        <div className='table2_td10'>활성화</div>
                    </div>
                    <div className='table2_lastLow_col10'>
                        <div className='lastLow_select'>
                            <select>
                                <option>10개씩 보기</option>
                                <option>5개씩 보기</option>
                                <option>1개씩 보기</option>
                            </select>
                        </div>
                        <div className='lastLow_pageNum'>
                            <a className='pre' href='#home1'><img src={require('../../../icon/left.svg').default} alt='' /></a>
                            <a href='#home'>1</a>
                            <a href='#home'>2</a>
                            <a href='#home'>3</a>
                            <a href='#home'>4</a>
                            <a href='#home'>5</a>
                            <a href='#home'>6</a>
                            <a href='#home'>7</a>
                            <a href='#home'>8</a>
                            <a href='#home'>9</a>
                            <a href='#home'>10</a>
                            <a className='next' href='#home1'><img src={require('../../../icon/right.svg').default} alt='' /></a>
                        </div>
                    </div>
                </div>
            );
    }
}

export default Table2Control