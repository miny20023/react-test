import React from "react";
import './sac_userInfo.scss';
import { useLocation} from 'react-router-dom';

/* table2 데이터 조작 버튼과 검색을 위한 서치창 */
function SearchAndControl() {
    const location = useLocation().state.title;

    if(location === '사용자 관리')
    {
        return (
            <div className='userInfo_searchAndControl'>
                <div className='userInfo_control'>
                    <ul>
                        <li><img src={require('../../../icon/checkON.svg').default} alt='' />항목 선택해제</li>
                        <li><img src={require('../../../icon/Paper Fail.svg').default} alt='' />비활성화</li>
                        <li><img src={require('../../../icon/Paper Fail2.svg').default} alt='' />활성화</li>
                        <li><img src={require('../../../icon/Delete.svg').default} alt='' />게시글 삭제</li>
                    </ul>
                </div>
                <div className='userInfo_search'>
                    <div className='userInfo_searchBox'>
                        <div>
                            <input type='search' className='userInfo_searchText' placeholder="검색어를 입력해주세요" ></input>
                            <img src={require('../../../icon/MagnifyingGlass.svg').default} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else if(location === '사용자 정보')
    {
        return (
            <div className='userInfo_searchAndControl'>
                <div className='userInfo_control'>
                    <ul>
                        <li><img src={require('../../../icon/checkON.svg').default} alt='' />항목 선택해제</li>
                        <li><img src={require('../../../icon/Paper Fail.svg').default} alt='' />비활성화</li>
                        <li><img src={require('../../../icon/Paper Fail2.svg').default} alt='' />활성화</li>
                        <li><img src={require('../../../icon/Delete.svg').default} alt='' />게시글 삭제</li>
                    </ul>
                </div>
                <div className='userInfo_search'>
                    <div className='userInfo_searchBox'>
                        <div>
                            <input type='search' className='userInfo_searchText' placeholder="검색어를 입력해주세요" ></input>
                            <img src={require('../../../icon/MagnifyingGlass.svg').default} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchAndControl;