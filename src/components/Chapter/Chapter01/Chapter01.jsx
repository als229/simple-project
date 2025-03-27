
// import "./Chapter01.css";
import { StyledP, StyledBlueP } from "./Chapter01.styles";

/* 
   함수형 컴포넌트 사용 시 주의할 점

   1. 함수형 컴넌트에서 return시 반환할 ReactElement가
   두 개 이상이라면 반드시 하나 이상의 부모요소로 감싸우저야 함

   2. 감쌀태그가 없다면 React에서 제공해주는 Fragment컴포넌트를 
   사용하거나 빈 태그 <></>로 감싸주어야 함
*/



const Chapter01 = () => {
  // AJAX요청 보내기
  const obj = {
    boardTitle: "제목입니다",
    boardContent: "내용입니다",
    boardWriter: "관리자",
    createDate: "2025-03-26",
    boardNo: 1,
  };
  return (
    <>
      <p style={{backgroundColor : 'yellow', color : "red"}}>{obj.boardNo}</p>
      <p className="styled-p">{obj.boardTitle}</p>
      <StyledP>{obj.boardContent}</StyledP>
      <StyledP>{obj.boardWriter}</StyledP>
      <StyledBlueP>{obj.createDate}</StyledBlueP>
    </>
  );
};

export default Chapter01;
