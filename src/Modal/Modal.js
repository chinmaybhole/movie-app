import "./Modal.css";

const Modal = props => {

  if (!props.show) {
    return null
  }

  return (

      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
          </div>
          <div className="modal-body"><div className='modal-container'>
                            <img className='modal-img' src={props.title_img} alt = ""/>
                            <div className='model-conten'>
                              <h4>IMDb: {props.vote_average}</h4>
                              <h5>Release Date: {props.release_date}</h5>
                              <br></br>
                              <h6>Overview</h6>
                              <p>{props.overview}</p>
                            </div>
                        </div></div>
          <div className="modal-footer">
            <button onClick={props.onClose} className="button">
              Close
            </button>
          </div>
        </div>
      </div>
    
  );
};

export default Modal;