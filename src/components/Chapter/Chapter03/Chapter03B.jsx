import { useState, useEffect } from "react";

const Chapter03B = () =>{

  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('메시지당');

  const minusBtnHandler = () => {

    setCount((count) =>  count -1);

  }

  useEffect(() => {
    alert(count + "번 클릭~");

  },[count, message]);
  /*
    첫 렌더링(MOUNT)과 재렌더링(UPDATE) 시점에 무언가 수행하고 싶다면 useEffect Hook 사용
    [] => 첫 렌더링 시점에만 수행하고 싶다.

    [state, state, state] => 각각의 state가 set 될 때마다 수행하겠다.

    Hook 사용 시 주의사항
    - Hook 은 기본적으로 블럭 최상위에서만 Hook을 호출할 수 있음(반복, 조건, 함수내부 호출할 수 없음)
    - React 함수 컴포넌트 내부에서만 사용가능(클래스 컴포넌트에서는 사용할 수 없음)
  */


  // 한번만 실행하고 싶으면 useEffect 두번째 인자로 [] 빈 배열을 넘겨줌

  return (
    <>
      <h3>{count}</h3>
      <h3>{message}</h3>
      <h3></h3>
      <h3>
        <button onClick={minusBtnHandler}>감소버튼</button>
      </h3>



    </>
  );
};



export default Chapter03B;