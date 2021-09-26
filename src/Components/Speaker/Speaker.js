import React from 'react';
import './Speaker.css'

const Speaker = (props) => {
    // debugger;
    // console.log(speaker.fname)
    const {speaker} = props;
    return (
        <div>
            <div className="col">
                <div className="card h-100 card-area">
                    <img src={speaker.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p><span className="fname">{speaker.fname}</span><br/> <span className="lname">{speaker.lname}</span></p>
                        <p><span className="designation">{speaker.designation}</span><br/> <span className="institute white">{speaker.institute}</span></p>
                        <p className="card-text"><span className="expertise white">{speaker.expertise}</span></p>
                        <p className="card-text"><span className="allowance">${speaker.allowance}</span></p>
                    </div>
                    {/* {cartIcon} btn btn-info */}
                    <button className="btn btn-info spk-btn" onClick={()=> props.handleAddToCart(speaker)}>Add to List</button>
                </div>
            </div>
        </div>
    );
};

export default Speaker;