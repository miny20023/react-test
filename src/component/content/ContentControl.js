import React from 'react';
import { useLocation } from 'react-router-dom';
import Title from './title/Title';
import Breadcrumb from './breadcrumb/Breadcrumb';
import Table1 from './table1/Table1';
import Table2 from './table2/Table2';
import SearchAndControl from './searchAndControl/SearchAndControl';
import ContentList from './contentList/ContentList';
import DashContent from './dashcontent/DashContent';

/*
    localhost:3000/home?123 일 때
    
    location.pathname : /home
    location.search : ?123 이며
    다른 정보는 hash, state, key가 있다.
*/

/* Content안에 내용을 조건문으로 url을 통해 다른 내용 불러온다 */
function ContentControl() {
    const location = useLocation();

    if( location.pathname === '/tmp')
    {
        return (
            <React.Fragment>
                <Title></Title>
                <Breadcrumb></Breadcrumb>
                <Table1></Table1>
                <ContentList></ContentList>
                <SearchAndControl></SearchAndControl>
                <Table2 what_table='tradeList'></Table2>
            </React.Fragment>
        );
    }

    /* 대시보드 */
    else if( location.pathname === '/dashboard')
    {
        return (
            <React.Fragment>
                <Title></Title>
                <DashContent></DashContent>
            </React.Fragment>
        );
    }

    else if ( location.pathname === '/userManage')
    {
        return (
            <React.Fragment>
                <Title></Title>
                <SearchAndControl></SearchAndControl>
                <Table2 what_table='userList'></Table2>
            </React.Fragment>
        );
    }
    
}

export default ContentControl