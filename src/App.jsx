import Chapter01 from "./components/Chapter/Chapter01/Chapter01";
import Chapter02 from "./components/Chapter/Chapter02/Chapter02";
import Chapter03 from "./components/Chapter/Chapter03/Chapter03";
import Chapter022 from "./components/Chapter/Chapter02/Chapter02-2";
import Header from "./components/Chapter/Common/Header/Header";
import Footer from "./components/Chapter/Common/Footer/Footer";
import WhatIsJSX from "./components/Chapter/WhatIsJSX";
import WhatIsReact from "./components/Chapter/WhatIsReact";
import Button from "./components/modules/Button";
import FirstComponent from "./components/modules/FirstComponent";
import { Lego, Gole } from "./components/modules/LegoAndGole";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Chapter03Input from "./components/Chapter/Chapter03/Chapter03Input";
import Chapter03B from "./components/Chapter/Chapter03/Chapter03B";
import Memo from "./components/Memo/Memo";
import Foods from "./components/Busan/Foods";
import FoodDetail from "./components/Busan/Detail/FoodDetail";

/*
  URL을 이용해서
  URL이 / chap01일 경우 Chapter01 컴포넌트를 보여주고
        / chap02일 경우 Chapter02 컴포넌트를 보여주고
        / 일 경우 메인 화면을 보여주고
  요청 URL에 따라서 다른 컴포넌트를 보여줄 수 있도록 React-router를 사용할 예정

  터미널 : npm install react-router-dom
*/

function App() {

   // 함수형 Component
   // Component는 식별명은 무조건 대문자로 시작 ( 소문자로 시작은 함수로 인식해서 화면 출력 안됨 )
   const TestComponent = () => {
      return <button className="btnn">버튼</button>;
   };
   
   
   
   // React.createElement('h1', null, '리액트란?');

  return (
    <>
      {false && <WhatIsJSX/>}
      {false && <Chapter022/>}
      <Header/>
      <Routes>
        <Route path="/" element={<WhatIsReact />} />
        <Route path="/chap01" element={<Chapter01 />} />
        <Route path="/chap02" element={<Chapter02 />} />
        <Route path="/chap03" element={<Chapter03 />} />
        <Route path="/input" element={<Chapter03Input />} />
        <Route path="/minus" element={<Chapter03B />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/foods/:id" element={<FoodDetail />} />
        <Route path="/*" element={<h1>존재하지 않는 페이지다.</h1>} />
        {/* /* 는 나머지 전부라는 뜻 지정한 url 경로 외 다른 경로로 오면 저 페이지 띄워줌 */}
      </Routes>
      <div style={{height : "600px", backgroundColor : "#dddddd"}}></div>
      <Footer/>
    </>
  );
}

export default App;
