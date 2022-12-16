// import { Modal} from 'react-bootstrap';
import Modal from './Modal/Modal.js'
import React, {useState} from 'react';
const API_IMG="https://image.tmdb.org/t/p/w500/";


const MovieBox =({title, poster_path, vote_average, release_date, overview})=>{
    
    const [show, setShow]=useState(false);

    const handleShow=()=>{
      console.log(show);
      setShow(true);}
    const handleClose=()=>setShow(false);
    
    return(
        <div className="movie">
            <div className="card-body" >
                <div className="movie-card" onClick={handleShow}>
                <img className=" card-img-top" src={API_IMG+poster_path} alt = "" />
                {/* <h4>{title}</h4> */}
                <figcaption>{title}</figcaption>
                </div>
                <Modal onClose = {handleClose} show = {show}/>
              
              {/* <div className="card-body"> */}
                {/* <Modal show = {show}/> */}


              
    
                  {/* <Modal className = "modal-class" show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body className='m-container'>
                        <div className='modal-container'>
                            <img className='modal-img' src={API_IMG+poster_path} alt = ""/>
                            <div className='model-conten'>
                              <h4>IMDb: {vote_average}</h4>
                              <h5>Release Date: {release_date}</h5>
                              <br></br>
                              <h6>Overview</h6>
                              <p>{overview}</p>
                            </div>
                        </div>
                      
                      </Modal.Body>

                  </Modal> */}
              {/* </div> */}
            </div>
        </div>
    )
}

export default MovieBox;