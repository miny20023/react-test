import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss'
import Pages from './page/Pages';
import LoginForm from './page/LoginPage';

/* 현재 tmp는 사용자 정보인데 중간에 더 들어가야하기도 하고... 진짜 임시 페이지, 나중엔 쓰임 */
function App() {
  return (
    /* 평소에는 헤더랑 네비바 보이다가 /home에 들어오면 Content 컴포넌트 표출 */
    /* <Route path="/" element={<Content/>}/> 이렇게 되면 localhost:3000 => 이 주소(기본 주소)에서 element를 보여줘라*/
    /* 메인 페이지를 따로 만들거면 중첩router를 알아보고 home 페이지를 지금과 같이 만들어서 사용해야 할 듯..? */
    
    // path="/tmp/:id" => :id 자리에 전달받은 값을 파라미터 키로 id라고 지정 
    
    <BrowserRouter>
      <div className='App'>
          <Routes>
            <Route path="/" element={<LoginForm/>}/>
            <Route path="/dashboard" element={<Pages/>}/>
            <Route path="/userManage" element={<Pages/>}/>
            <Route path="/tmp" element={<Pages/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;