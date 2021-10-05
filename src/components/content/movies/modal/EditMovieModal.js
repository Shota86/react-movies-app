import React from "react";
import PropTypes from "prop-types";
import './modal.css';

let EditMovieModal = (props) => {
    return(
        <div className="modal">  
            <div className="modal-content">
                <span className="close" onClick={props.onCloseMovieModalClick}>&times;</span>
                <p className="title">EDIT MOVIE</p>
                <form>
                    <div className="leftInputs">        
                        <div className="inputControl">                
                            <label>Title</label><br/>
                            <input type="text" placeholder="Title" value="Moana"/><br/>
                        </div>
                        <div className="inputControl">                
                            <label>MOVIE URL</label><br/>
                            <input type="text" placeholder="https://" value="https://www.moana.com"/><br/>
                        </div>
                        <div className="inputControl">                
                            <label>GENRE</label><br/>
                            <select>
                                <option defaultValue={true}>Crime</option>
                                <option>Documentary</option>
                                <option>Horror</option>
                                <option>Comedy</option>
                            </select>
                        </div>
                    </div>
                    <div className="rightInputs">
                        <div className="inputControl">                
                            <label>RELEASE DATE</label><br/>
                            <input type="text" value="11/14/2016" /><br/>
                        </div>
                        <div className="inputControl">                
                            <label>RATING</label><br/>
                            <input type="text" value="7.6"/><br/>
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

EditMovieModal.PropTypes = {
    onCloseMovieModalClick: PropTypes.func.isRequired
}

export default EditMovieModal;