import React, { useState } from "react";

const Banner = () => {
  const [banner, setbanner] = useState(true);
  return (
    <div style={{  bottom: "0", position: "fixed"}}>
      {banner && (
        <div
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "space-between",
            // backgroundColor:'#072f47'
            background:"linear-gradient(to right,black,blue,black)"
          }}
        >
          <div style={{ textAlign: "center", width:"100%" , padding:'5px 20px'}}>
            {" "}
            <p>
              Success is no accident. It is hard work, perseverance, learning,
              studying, sacrifice and most of all, love of what you are doing or
              learning to do.
            </p>
          </div>
          <div  style={{ right: "0" ,width:"5%",padding:'5px 30px 5px 10px'}}>
            <button onClick={() => setbanner(!banner)}>
              ❌
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
