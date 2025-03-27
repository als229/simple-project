// AJAX 요청을 보내서 응답을 받아올 것
// 요번 타임 주제 => 유저정보 ==> 회원들의 정보
import styled from "styled-components";

const StyledDiv = styled.div`
   width : 400px;
   height : 14ppx;
   border : 1px solid lightgray;
   display : inline-block;
   margin: 40px;
   background-color : ${(props) => (props.color ? props.color : "white")}
`;

/* 1절 */
// const MemberInfo = (props) =>{

//    const member = props;

//    return(
//       <>
//          <StyledDiv>
//             <h4>아이디 : {props.memberId}</h4>
//             <strong>이름 : </strong>
//             <p>이메일 : </p>
//          </StyledDiv>
//       </>
//    )
// }

/* 2절 */
const MemberInfo = ({memberId, memberName, email, color}) =>{

   return(
      <>
         <StyledDiv color={color}>
            <h4>아이디 : {memberId}</h4>
            <strong>이름 : {memberName}</strong>
            <p>이메일 : {email}</p>
         </StyledDiv>
      </>
   )
}

/* 3절 */
// const MemberInfo = (props) =>{

//    const {memberId, memberName, email, color} = props.member;

//    return(
//       <>
//          <StyledDiv color={color}>
//             <h4>아이디 : {memberId}</h4>
//             <strong>이름 : {memberName}</strong>
//             <p>이메일 : {email}</p>
//          </StyledDiv>
//       </>
//    )
// }

const Chapter02 = () =>{

   const response = [
      {
         memberId : "admin",
         memberName : "짱구",
         email : "jjang9@kh.com",
         color: "lightyellow",
      },
      {
         memberId : "user01",
         memberName : "철수",
         email : "ironwater@kh.com",
         color: "lightblue",
      },
      {
         memberId : "user02",
         memberName : "유리",
         email : "glass@kh.com",
      },


   ]
   return(
      <>

      {/* { 1절 } */}
      {<MemberInfo member={response[0]}/> }

      {/* 2절 */}
      {/* <MemberInfo {...response[0]}/>
      <MemberInfo {...response[1]}/>
      <MemberInfo {...response[2]}/> */}

      {/* 3절 */}
      {/* {response ? (
         response.map(item => <MemberInfo member={item} key={item.memberId}/>) 
      ) : (
       <div> 데이터가 존재하지 않습니다.</div>  
      )} */}


      </>
   );
};


export default Chapter02;