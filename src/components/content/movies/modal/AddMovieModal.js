import React, { useState } from "react";
import { connect } from "react-redux";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

import PropTypes from "prop-types";

import DatePicker from "react-datepicker";

import { MyTextInput, MySelect } from "../../../CustomInputs";

import "react-datepicker/dist/react-datepicker.css";

import { postMovie } from "../../../../redux/actions/thunks";

import "./modal.css";

const AddMovieModal = (props) => {
  const { postMovie, onCloseMovieModalClick } = props;
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Formik
      initialValues={{
        title: "",
        poster_path: "",
        genre: "",
        vote_average: "",
        overview: "",
        runtime: "",
        release_date: startDate,
      }}
      validationSchema={Yup.object({
        title: Yup.string().required("Required"),
        poster_path: Yup.string().required("Required"),
        genre: Yup.string()
          .oneOf(["Action", "Adventure", "Science Fiction", "Fantasy", "Thriller", "Mystery", "Romance", "Drama", "Crime", "Documentary", "Horror", "Comedy"], "Invalid Genre")
          .required("Required"),
        overview: Yup.string().required("Required"),
        runtime: Yup.number()
          .typeError("Runtime must be a number")
          .positive("Runtime must be greater than zero")
          .required("Required"),
        vote_average: Yup.number()
          .max(100, "Must be less than or equal to 100")
          .typeError("Rating must be a number")
          .positive("Rating must be greater than zero"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          //alert(JSON.stringify(values, null, 2));
          postMovie(values);
          onCloseMovieModalClick();      
          setSubmitting(false);
        }, 400);
      }}
      onReset={(values, { resetForm }) => {
        setStartDate(new Date());
      }}
    >
      {(formik) => (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={onCloseMovieModalClick}>
              &times;
            </span>
            <p className="title">ADD MOVIE</p>
            <Form onSubmit={formik.handleSubmit}>
              <div className="leftInputs">
                <div className="inputControl">
                  <MyTextInput
                    label="Title"
                    name="title"
                    type="text"
                    placeholder="Title"
                  />
                  <br />
                </div>
                <div className="inputControl">
                  <MyTextInput
                    label="MOVIE URL"
                    name="poster_path"
                    type="text"
                    placeholder="https://"
                  />
                  <br />
                </div>
                <div className="inputControl">
                  <MySelect label="GENRE" name="genre">
                    <option value="">Select a genre</option>
                    <option value="Action">Action</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Romance">Romance</option>
                    <option value="Drama">Drama</option>
                    <option value="Crime">Crime</option>
                    <option value="Documentary">Documentary</option>
                    <option value="Horror">Horror</option>
                    <option value="Comedy">Comedy</option>
                  </MySelect>
                </div>
              </div>
              <div className="rightInputs">
                <div className="inputControl">
                  <label>RELEASE DATE</label>
                  <br />
                  <DatePicker
                    id="release_date"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                  <br />
                </div>
                <div className="inputControl">
                  <MyTextInput label="RATING" name="vote_average" type="text" />
                </div>
                <div className="inputControl">
                  <MyTextInput label="RUNTIME" name="runtime" type="text" />
                </div>
              </div>
              <div className="inputControl overview">
                <label htmlFor="overview">OVERVIEW</label>
                <br />
                <textarea
                  id="overview"
                  type="textarea"
                  rows="8"
                  cols="124"
                  placeholder="Movie description"
                  {...formik.getFieldProps("overview")}
                />
                {formik.touched.overview && formik.errors.overview ? (
                  <div className="error">{formik.errors.overview}</div>
                ) : null}
                <br />
              </div>
              <button className="reset" type="reset">
                RESET
              </button>
              <button className="submit" type="submit">
                SUBMIT
              </button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

AddMovieModal.propTypes = {
  onCloseMovieModalClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  console.log("state:", state);
  return {};
};

export default connect(mapStateToProps, { postMovie })(AddMovieModal);
