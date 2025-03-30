
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StyledWrap, StyledTitle, StyledInnerWrap, StyledImage, StyledStoreName, StyledCard, StyledMoreButton } from "./Foods.styles"


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
  axios.get(`http://localhost/busans?pageNo=${pageNo}`)
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