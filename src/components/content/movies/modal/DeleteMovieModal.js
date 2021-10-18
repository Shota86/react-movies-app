import React from "react";
import PropTypes from "prop-types";
import './modal.css';

let DeleteMovieModal = (props) => {
    return(
        <div className="modal">  
            <div className="deleteModalContent">
                <span className="close" onClick={props.onCloseMovieModalClick}>&times;</span>
                <p className="title">DELETE MOVIE</p>
                <div className="deleteWrapper">
                    <p>Are you sure you want to delete this movie ?</p>
                </div>
                <button className="submit">SUBMIT</button>
            </div>
        </div>
    );
}

DeleteMovieModal.propTypes = {
    onCloseMovieModalClick: PropTypes.func.isRequired
}

export default DeleteMovieModal;