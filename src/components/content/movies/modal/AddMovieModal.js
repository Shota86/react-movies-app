import React from "react";
import PropTypes from "prop-types";
import './modal.css';

let AddMovieModal = (props) => {
    return(
        <div className="modal">  
            <div className="modal-content">
                <span className="close" onClick={props.onCloseMovieModalClick}>&times;</span>
                <p className="title">ADD MOVIE</p>
                <form>
                    <div className="leftInputs">        
                        <div className="inputControl">                
                            <label>Title</label><br/>
                            <input type="text" placeholder="Title"/><br/>
                        </div>
                        <div className="inputControl">                
                            <label>MOVIE URL</label><br/>
                            <input type="text" placeholder="https://" /><br/>
                        </div>
                        <div className="inputControl">                
                            <label>GENRE</label><br/>
                            <select>
                                <option>Crime</option>
                                <option>Documentary</option>
                                <option>Horror</option>
                                <option>Comedy</option>
                            </select>
                        </div>
                    </div>
                    <div className="rightInputs">
                        <div className="inputControl">                
                            <label>RELEASE DATE</label><br/>
                            <input type="text" /><br/>
                        </div>
                        <div className="inputControl">                
                            <label>RATING</label><br/>
                            <input type="text" /><br/>
                        </div>
                        <div className="inputControl">                
                            <label>RUNTIME</label><br/>
                            <input type="text" /><br/>
                        </div>
                    </div>
                    <div className="inputControl overview">                
                        <label>OVERVIEW</label><br/>
                        <textarea type="textarea" rows="8" cols="124" placeholder="Movie description" /><br/>
                    </div>
                    <button className="reset">RESET</button>
                    <button className="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    );
}

AddMovieModal.propTypes = {
    onCloseMovieModalClick: PropTypes.func.isRequired
}

export default AddMovieModal;