import React from 'react';
import Bunimg from "../Bunimg.json";

function Bunline() {
    let Bunline = Bunimg;
    return (
        <div className="row mx-4">
            {Bunline.map((allbun) => (
                <div className="col" style={{ marginBottom: "1%" }}>
                    <img style={{ height: "150px", width: "170px", borderRadius: "100%" }} src={require("../Images/" + allbun.img)} />
                    <h5 className='ps-4 mt-2 ms-1' style={{fontWeight:"bolder", fontFamily:"sans-serif"}}>{allbun.text}</h5>
                </div>
            ))}
        </div>
    )
}

export default Bunline;