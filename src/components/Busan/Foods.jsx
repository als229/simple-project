import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StyledWrap = styled.div`
  width : 1200px;
  height : auto;
  min-height : 1200px;
  margin : auto;
  margin-top : 30px;
  margin-bottom : 30px;
  border : 1px solid #ffc3c359;
  box-shadow : 0 0 1px 1px rgba(0,0,0,0.02);
`;

const StyledTitle = styled.h1`
  font-size : 60px;
  font-weight : 800;
  color : skyblue;
  text-align : center;
  margin : 45px 30px;

`;

const StyledInnerWrap = styled.div`
  width : 1100px;
  margin : auto;
  height : auto;
  min-height : 800px;
  padding : 12px;
  border : 1px solid rgba(0,0,0,0.1);
  border-radius : 10px;
`;

const StyledCard = styled.div`
  width : 330px;
  height : 250px;
  margin : 9px 9px;
  padding : 5px;
  box-shadow : 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  display : inline-block;
  border-radius : 10px;

  &:hover{
    cursor : pointer;
    box-shadow : 1px 1px 1px 1px rgba(0, 0, 0, 0.4);
    opacity : 0.9;
  }
`
const StyledImage = styled.img`
  width : 320px;
  height : 200px;
`
const StyledStoreName = styled.h3`
  font-weight : bold;
  text-align : center;
  font-size : 17px;
  margin : 0px;
  margin-top : 12px;
`
const StyledMoreButton = styled.div`
  width : 150px;
  height : 40px;
  text-align : center;
  margin : auto;
  border-radius : 22px;
  background-color : pink;
  color : white;
  font-weight : 900;
  border : 2px dotted lightpink;
  margin-top : 35px;

  &:hover{
    cursor : pointer;
    background-color : white;
    color : pink;
  }
`


const Foods = () => {

  const [pageNo, setPageNo] = useState(1);
  const [foods, setFoods] = useState([]);
  const [hasMore, setHasMore] = useState(true); // 더 불러올 게시글이 있는지 없는지
  
  const navi = useNavigate();
  


  useEffect(() => {

 /*  방법1 */
/*     fetch(`http://localhost/spring/busans?pageNo=${pageNo}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((err) => console.log("에러 발생"))
    .finally(console.log("무조건 한 번 실행함"));

  }, []); */
/*  방법2
  axios({
    url: `http://localhost/spring/busans?pageNo=${pageNo}`
    method:"get",
  }).then((result) = > console.log(result));
   */

  /* 방법3 */
  axios.get(`http://localhost/spring/busans?pageNo=${pageNo}`)
  .then(result => {
    console.log("결과 나오니...");
    console.log(result);
    const response = result.data.getFoodKr.item;
    console.log(response);

    setFoods([...foods, ...response]);
    if(response.length < 9){
      setHasMore(false);
    }
  });
},[pageNo]);

const clickTobuttonHandler = () => {
  setPageNo((pageNo) => pageNo + 1);
}
  return (
    <>
      <StyledWrap>
        <StyledTitle>부산 맛집...</StyledTitle>
        <StyledInnerWrap>
          {
            foods.length === 0 ?(
            <h3>음식점 목록 가져오는중</h3>
            ) : (
              foods.map((e) => <StyledCard key={e.UC_SEQ} 
                onClick={() => navi(`/foods/${e.UC_SEQ}`, {
                    state : {e},
                })
                }
              >
                <StyledImage src={e.MAIN_IMG_THUMB} />
                <StyledStoreName>{e.MAIN_TITLE}</StyledStoreName>
                </StyledCard>)
            )
          }
        </StyledInnerWrap>
        {hasMore &&(
          <StyledMoreButton onClick={clickTobuttonHandler}>더보기</StyledMoreButton>
        )}
      </StyledWrap>  
    </>
  )
}

export default Foods;