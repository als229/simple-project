import { useLocation } from "react-router-dom";

const FoodDetail = () => {

  /* 야매 방법 바로 디비 안가고 앞에서 데이터 넘김 */
  const location = useLocation();

  console.log(location);
  return <>
    디테일 풰이지
  </>
};

export default FoodDetail;