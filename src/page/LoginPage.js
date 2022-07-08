import React from 'react';
import main_logo from '../icon/mainlogo.svg';
import './loginPage.scss';
import {useNavigate} from 'react-router-dom';

/* 로그인 페이지 */
function LoginForm() {
    
    const navigate = useNavigate();
    const goToDash = () => {
    navigate("/dashboard", {state: {contentTitle: '대시보드'}});
  }

    return (
        <>
        <header className='login_header'>
            <div className='login_div'>
                <div className='login_d1'>
                    <a className='login_a1' href="#home"><img className='main_logo' src={main_logo} alt='' /></a>
                </div>
                <div className='login_d2'>
                    <a className='login_a2' href="#home" target="_top">비런치 관리자 페이지</a>
                </div>
                <div className='login_d3'>
                    
                </div>
            </div>
        </header>
        <section className='login_section'>
            <div className='loginForm'>
                <div className='login_title'>
                    <div><span>로그인</span></div>
                </div>
                <div className='login_idBox'>
                    <div><input type='email' placeholder='아이디'></input></div>
                </div>
                <div className='login_pwBox'>
                    <div><input type='password' placeholder='비밀번호'></input></div>
                </div>
                <div className='login_signIn'>
                    <div><button onClick={goToDash}>로그인</button></div>
                </div>
                <div className='login_signUpText'>
                    <div><span>아직 회원이 아니신가요?</span></div>
                </div>
                <div className='login_signUp'>
                    <div><button>회원가입</button></div>
                </div>

            </div>
        </section>
        </>
    );
}

export default LoginForm;