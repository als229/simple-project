import { useState } from "react";

const Chapter03Input = () => {
   // 사용자가 값을 입력할 때 마다
   // 적절한 메시지를 화면상에 출력
   const [message, setMessage] = useState("값을 입력해주세요.");

   const [text, setText] = useState('');

   const inputTextHandler = (e) => {

      setText(e.target.value);    

      if (e.target.value.length > 10) {
         setMessage('글자가 너무 길어.......');
      } else {
         setMessage('값을 입력해.....');
      }

   }

   return (
      <>
         <h1>값을 입력받는 경우가 많은 인풋</h1>    

         <br />
         <br />
         <br />
         <input type="text" onChange={inputTextHandler}/>
         <br />
         <br />
         <span>입력값 : {text}</span> <br />
         <span>안내메시지 : {message}</span>
         <br />

      </>
   );
};


export default Chapter03Input;