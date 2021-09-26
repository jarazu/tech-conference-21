import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Speaker from '../Speaker/Speaker';
import './Speakers.css'

const Speakers = () => {
     const [speakers, setSpeakers] = useState([]);
     const [speakerAdded, setSpeakerAdded] = useState([]);
     const [clickedSpeaker, setClickedSpeaker] = useState([]);

     const [show, setShow] = useState(false);

     useEffect(()=>{
         fetch('./speakers.JSON')
         .then(res => res.json())
         .then(data => setSpeakers(data))
     },[]);

     // handle add to list
     const handleAddToCart = (data) =>{
        setClickedSpeaker(data);
        setShow(false);
        const checkExist = speakerAdded.find(x => x.fname === data.fname);
        // debugger
        if(checkExist){
            setShow(true);
        }else{
            const newSpeaker = [...speakerAdded, data]
            setSpeakerAdded(newSpeaker);
        }
     }
    
     //render alert
     function renderAlert() {
          return (
            <div className="alert alert-danger" role="alert">
                <span className="font-bold">{clickedSpeaker.fname}</span> is already added in cart!!!
            </div>
          );
      }

    return (
        <div className="main-area container">
            <div className="speaker-list w-75">
                <h2>This is from speakers</h2>

                {show ? renderAlert() : <React.Fragment />}

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        speakers.map(x => <Speaker speaker={x} key={x.id}  handleAddToCart={handleAddToCart}/>)
                    }
                </div>
            </div>
            <div className="float-end">
                <Cart speaker={speakerAdded}/>
            </div>
        </div>
    );
};

export default Speakers;