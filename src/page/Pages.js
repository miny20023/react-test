import React from 'react';
import './pages.scss';
import Header from '../component/header/Header';
import Navbar from '../component/navbar/Navbar';
import Content from '../component/content/Content';

/* 로그인 후에 나올 페이지들의 레이아웃 */
function Pages (){
    return (
        <>
            <header>
                <Header></Header>
            </header>
            <div className='context'>
            <nav>
                <Navbar></Navbar>
            </nav>
            <section>
                <Content></Content>
            </section>
            </div>
        </>
    );
}

export default Pages