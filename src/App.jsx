import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const Button = () => {

    return <button className='btn'>부튼</button>
  }

  return (
    <>
      <h1>리액트란...</h1>
      
      <pre>
        U.I(User Interface)를 구현하기 위한 JavaScript Library
        <br />
        코드의 단위를 Component로 구분하여 Component를 조합하여 복잡한 U.I를 구성할 수 있음
        <br />
        SPA(Single Page Application)을 구현하기 위한 도구로 사용됨.        
        <br />
        <strong>
          화면을 예쁘게 만드는 것과 React는 전혀 연관이 없음 = CSS 임 꾸미는 건
        </strong>
        <br />
        리액트를 구동하기 위해서는 Node.js라는 JavaScript Runtime을 설치
        <br />
        NPM(Node Package Manager)라는 패키지 매니저 + JSX(Babel) 문법을 활용할 수 있음.
      </pre>

      <Button />

      <hr />

      <h2>JSX란 무엇인가?</h2>

      <pre>
        JSX(JavaScript XML) JavaScript + XML을 사용한 자바스크립트 확장 문법
        <br />
        리액트 문법 : React.createElement('h1', null, 'Hello world!') <br />
        JSX 문법 : &lt;h1&gt; Hello World! &lt;/h1&gt; <br />
        JSX 문법을 사용해서 JavaScript 코드 내부에서 React의 "Element"를 생성할 수 있으며,
        JavaScript의 모든 기능을 이용할 수 있고,
        U.I를 구현할 때 React와 함께 사용하길 권장됨
        <br />
        ReactElement란?
        <br />
        Component를 구성하는 요소 <br />
        화면에 만들어내고 싶은(기술할) 요소를 작성하여 React가 브라우저에 렌더링 할 수 있게 해줌
        <br />
        특징 : 불변 객체
        <br />
        <br />
        React는 index.html 파일 안에 있는 root라는 아이디 속성 값을 가진 div 요소 안에서 모든 요소를 관리
        <br />
        main.jsx에서 root.render()를 호출해서 element를 전달
        React를 이용해서 U.I를 변경하는 방법은 ReactElement를 만들어서
        root.render()의 인자값으로 전달하는 방법밖에 없다.

      </pre>


      <Button />
    </>
  );
}

export default App;
