import React from 'react';
import './header.scss';
import './header2.scss';
import logo from '../../icon/logo.svg';
import { useNavigate, Link} from 'react-router-dom';

/* 헤더바 */
function HeaderBar() {
  
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/");
  };
  
  return (
    <div className='hb'>
      <div className='hb_d1'>
        <Link className='hb_1' to='/dashboard' state={{contentTitle: '대시보드'}}><img className='logo' src={logo} alt='' /></Link>
      </div>
      <div className='hb_d2'>
        <Link className='hb_a2' to='/dashboard' state={{contentTitle: '대시보드'}}>비런치 관리자 페이지</Link>
      </div>
      <div className='hb_d3'>
        <button className='hb_bu' onClick={goToLogin}><span className='hb_span'>로그아웃</span></button>
      </div>
    </div>
  );
}

export default HeaderBar;