import React from "react";

function Port(props) {
  return (
    <div>
      
        <div className="hover">
          <img
            src={props.img}
            alt="q"
            height="400"
            style={{
              marginLeft: "5vh",
              marginTop: "20vh",
              borderRadius: "20px",
              MozBorderRadiusTopright: "20px",
            }}
          />
        </div>
      
    </div>
  );
}

export default Port;
