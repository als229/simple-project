import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { StyledWrap, StyledTitle, StyledImage, StyledMoreButton } from "../Foods.styles";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Comment from "../Comment/CommentList"

const StyledMainImg = styled.img`
  width : 100%;
  height : 500px;
`

const StyledDescription = styled.div`
  font-size : 19px;
  font-weight : bold;
  margin : 30px 0px;
  padding : 30px
`
const StyledOther = styled.div`
  font-size : 18px;
  text-align : center;
  margin : 15px 0px;
`
const StyledMap = styled.div`
  width : 50%;
  height : 600px;
  margin : auto;
  border 1px solid rgba (0,0,0,0.1);
  border-radius : 15px;
  box-sizing : border-box;
`

const FoodDetail = () => {

  /* 야매 방법 바로 디비 안가고 앞에서 데이터 넘김 */
/*   const location = useLocation();

  console.log(location); */

  const { id } = useParams();
  const [ load, isLoad ] = useState(false);
  const [ food, setFood ] = useState({
    title : "",
    img : "",
    description : "",
    usageTime : "",
    addres : "",
    lat : "",
    lng : "",
  });

  const [content, setContent] = useState("");
  const [success, isSuccess] = useState(false); // 댓글 작성 성공 시 스위칭 할 예정
  const navi = useNavigate();

  useEffect(() => {

    axios.get(`http://localhost/busans/${id}`).then((result) => {
      // console.log(result);

      const response = result.data.getFoodKr.item[0];

      setFood({
        title : response.MAIN_TITLE,
        img : response.MAIN_IMG_NORMAL,
        description : response.ITEMCNTNTS,
        usageTime : response.USAGE_DAY_WEEK_AND_TIME,
        address : response.ADDR1,
        lat : response.LAT,
        lng : response.LNG,
      });

      isLoad(true);

      // 1 MAIN_TTITLE : 가게이름
      // 2 MAIN_IMG_TITLE : 메인사진
      // 3. ITEMCNTNTS : 소개글
      // 4. USAGE_DATE_WEEK_AND_TIME : 운영시간
      // 5 ADDR1 : 주소
      // 6. LAT : 위도
      // 7. LNG : 경도
      if (food.lat) {

        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
            center: new window.kakao.maps.LatLng(response.LAT, response.LNG), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };
    
        var map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        
        // 마커가 표시될 위치입니다 
        var markerPosition  = new window.kakao.maps.LatLng(response.LAT, response.LNG); 
        
        // 마커를 생성합니다
        var marker = new window.kakao.maps.Marker({
            position: markerPosition
        });
        
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
  
    }

    });
  }, [food.lat, load]);

  const submitHandler = (e) => {
    
    // 기존 이벤트 제거?
    e.preventDefault();

    if(content.trim() === ""){
      alert("내용을 입력해주세유");
      return;
    }
    /*
      정규표현식으로 막을거 막기
    */
    // axios.post(요청 URL과 함께 사용자가 입력한 입력값, 식당번호)
    axios.post(`http://localhost/busans/comments`,{
      seq : id,
      content : content,
    })
    .then((result) => {
      console.log(result);
      setContent("");
      isSuccess(!success);
    });

  }

  const contentHandler = e => {
    setContent(e.target.value);
  }

  if(!load){
    return  (

    <StyledWrap>
      <StyledTitle>음식점을 조회중이다.</StyledTitle>
    </StyledWrap>
    )
  }


  return (
    <>
      <StyledWrap>
        <StyledTitle>{ food.title }</StyledTitle>
        <StyledMainImg src={ food.img } />
        <StyledDescription>{ food.description }</StyledDescription>
        <StyledOther>{food.address}</StyledOther>
        <StyledOther>{food.usageTime}</StyledOther>
        <StyledMap id="map"></StyledMap>
        <StyledMoreButton onClick={() => navi(-1)}>듸로가자</StyledMoreButton>
      </StyledWrap>
      <div style={{width : "80%", margin:"auto", height:"600px"}}>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="후기 작성데스" onChange={contentHandler} value={content}/>
          <button>후기 남겨기기</button>
        </form>
      <Comment id={id} success={success} />
      </div>
    </>
  )
};

export default FoodDetail;