import React from "react";
import './contentList.scss';

/* table2에서 보여질 내용에 대한 메뉴*/
function ContentList() {
    return (
         <div className='userInfo_contentList'>
            <ul>
                <li>상세 정보</li>
                <li>거래하기 글(0)</li>
                <li>커뮤니티 글(0)</li>
                <li>문의내역</li>
                <li>신고내역</li>
            </ul>
        </div>   
    );
}

export default ContentList;