// import Modal from './Modal/Modal.js'
import { Modal} from 'react-bootstrap';
import React, {useState} from 'react';
const API_IMG="https://image.tmdb.org/t/p/w500/";


const MovieBox =({title, poster_path, vote_average, release_date, overview,vote_count})=>{
    
    const [show, setShow]=useState(false);

    const handleShow=()=>{
      console.log({show})
      setShow(true)};
    const handleClose=()=>setShow(false);
    
    return(
        <div className="movie">
            <div className="card-body" >
                <div className="movie-card" onClick={handleShow}>
                <img className=" card-img-top" src={API_IMG+poster_path} alt = {title} />
                {/* <h4>{title}</h4> */}
                  <caption className='ellipse'>{vote_average}</caption>
                <figcaption>{title}</figcaption>
                </div>
        
             
              {/* <Modal show = {show} onClose = {handleClose}
              title = {title} title_img = {API_IMG+poster_path} 
              vote_average = {vote_average} release_date = {release_date}
              overview = {overview}
              /> */}
              <Modal className = "modal-class " size= 'lg'  show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body className='m-container'>
                        <div className='modal-container'>
                            <img className='modal-img' src={API_IMG+poster_path} alt = ""/>
                            <div className='model-conten'>
                              
                              <h5>Release Date: {release_date}</h5>
                              <br></br>
                         
                              <p>{overview}</p>
                              <h4>{vote_average}/10({vote_count} total votes)</h4>
                            </div>
                        </div>
                      
                      </Modal.Body>
                  </Modal>
    
       
             
            </div>
        </div>
    )
}

export default MovieBox;