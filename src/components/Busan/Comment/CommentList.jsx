import { useState, useEffect } from "react";
import axios from "axios";

const CommentList = (props) =>{
  
  const [comment, setComment] = useState([]);
  // console.log(props);
  const id = props.id;
 
  useEffect(() => {
    axios.get(`http://localhost/busans/comments/${id}`)
    .then((result ) => {
      console.log(result);

      setComment([...result.data]);
    });

  }, [props.success]); 
  
  return (
    <>
      {
        comment != [] ? (comment.map((e, i ) => {
          return (
            <div style={{width : "1100px", margin: "auto"}} key={i}>
              <h4>{e.content}</h4>
              <h5>{e.createDate}</h5>
            </div>
          );
        })
      ) : (
        <h2>아직 댓글이 존재하지 않습니다.</h2>
      )}
    </>
  );
};

export default CommentList;