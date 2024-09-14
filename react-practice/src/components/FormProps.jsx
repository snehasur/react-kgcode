import React from "react";

function FormProps({
  handleChange,
  handleSubmit,
  touched,
  error,
  inputValueFname,
  inputValueLname,
  inputValueEmail,
  inputValuePhone,
  inputValueCity,
  inputValueState,
  inputValueZip,
  inputValueAddress,
  inputValueGender,
  inputValueDOB,
  isAgreed,
  isEditing,
}) {
  return (
    <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
      <div className="col-md-4">
        <label htmlFor="validationCustom01" className="form-label">
          First name
        </label>
        <input
          type="text"
          className={`form-control ${
            touched.fname ? (error.fname ? "is-invalid" : "is-valid") : ""
          }`}
          id="validationCustom01"
          value={inputValueFname}
          onChange={(e) => handleChange(e, "fname")}
        />
        <div className="invalid-feedback">{error.fname || ""}</div>
      </div>

      <div className="col-md-4">
        <label htmlFor="validationCustom02" className="form-label">
          Last name
        </label>
        <input
          type="text"
          className={`form-control ${
            touched.lname ? (error.lname ? "is-invalid" : "is-valid") : ""
          }`}
          id="validationCustom02"
          value={inputValueLname}
          onChange={(e) => handleChange(e, "lname")}
        />
        <div className="invalid-feedback">{error.lname || ""}</div>
      </div>

      <div className="col-md-4">
        <label htmlFor="validationCustomEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          className={`form-control ${
            touched.email ? (error.email ? "is-invalid" : "is-valid") : ""
          }`}
          id="validationCustomEmail"
          value={inputValueEmail}
          onChange={(e) => handleChange(e, "email")}
        />
        <div className="invalid-feedback">{error.email || ""}</div>
      </div>

      <div className="col-md-4">
        <label htmlFor="validationCustomPhone" className="form-label">
          Phone Number
        </label>
        <input
          type="tel"
          className={`form-control ${
            touched.phone ? (error.phone ? "is-invalid" : "is-valid") : ""
          }`}
          id="validationCustomPhone"
          value={inputValuePhone}
          onChange={(e) => handleChange(e, "phone")}
        />
        <div className="invalid-feedback">{error.phone || ""}</div>
      </div>

      <div className="col-md-4">
        <label htmlFor="validationCustomCity" className="form-label">
          City
        </label>
        <input
          type="text"
          className={`form-control ${
            touched.city ? (error.city ? "is-invalid" : "is-valid") : ""
          }`}
          id="validationCustomCity"
          value={inputValueCity}
          onChange={(e) => handleChange(e, "city")}
        />
        <div className="invalid-feedback">{error.city || ""}</div>
      </div>

      <div className="col-md-4">
        <label htmlFor="validationCustomState" className="form-label">
          State
        </label>
        <select
          className={`form-control ${
            touched.state ? (error.state ? "is-invalid" : "is-valid") : ""
          }`}
          id="validationCustomState"
          value={inputValueState}
          onChange={(e) => handleChange(e, "state")}>
          <option value="">Choose...</option>
          <option value="CA">California</option>
          <option value="NY">New York</option>
          <option value="TX">Texas</option>
        </select>
        <div className="invalid-feedback">{error.state || ""}</div>
      </div>

      <div className="col-md-4">
        <label htmlFor="validationCustomZip" className="form-label">
          Zip Code
        </label>
        <input
          type="text"
          className={`form-control ${
            touched.zip ? (error.zip ? "is-invalid" : "is-valid") : ""
          }`}
          id="validationCustomZip"
          value={inputValueZip}
          onChange={(e) => handleChange(e, "zip")}
        />
        <div className="invalid-feedback">{error.zip || ""}</div>
      </div>

      <div className="col-md-8">
        <label htmlFor="validationCustomAddress" className="form-label">
          Address
        </label>
        <textarea
          className={`form-control ${
            touched.address ? (error.address ? "is-invalid" : "is-valid") : ""
          }`}
          id="validationCustomAddress"
          value={inputValueAddress}
          onChange={(e) => handleChange(e, "address")}
        />
        <div className="invalid-feedback">{error.address || ""}</div>
      </div>

      <div className="col-md-4">
        <label className="form-label">Gender</label>
        <div className="form-check">
          <input
            type="radio"
            className={`form-check-input ${
              touched.gender ? (error.gender ? "is-invalid" : "is-valid") : ""
            }`}
            name="gender"
            id="genderMale"
            value="Male"
            checked={inputValueGender === "Male"}
            onChange={(e) => handleChange(e, "gender")}
          />
          <label className="form-check-label" htmlFor="genderMale">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className={`form-check-input ${
              touched.gender ? (error.gender ? "is-invalid" : "is-valid") : ""
            }`}
            name="gender"
            id="genderFemale"
            value="Female"
            checked={inputValueGender === "Female"}
            onChange={(e) => handleChange(e, "gender")}
          />
          <label className="form-check-label" htmlFor="genderFemale">
            Female
          </label>
        </div>
        <div className="invalid-feedback">{error.gender || ""}</div>
      </div>

      <div className="col-md-4">
        <label htmlFor="validationCustomDOB" className="form-label">
          Date of Birth
        </label>
        <input
          type="date"
          className={`form-control ${
            touched.dob ? (error.dob ? "is-invalid" : "is-valid") : ""
          }`}
          id="validationCustomDOB"
          value={inputValueDOB}
          onChange={(e) => handleChange(e, "dob")}
        />
        <div className="invalid-feedback">{error.dob || ""}</div>
      </div>

      <div className="col-md-12">
        <div className="form-check">
          <input
            className={`form-check-input ${
              touched.agreed ? (error.agreed ? "is-invalid" : "is-valid") : ""
            }`}
            type="checkbox"
            id="validationCustomAgree"
            checked={isAgreed}
            onChange={(e) => handleChange(e, "agreed")}
          />
          <label className="form-check-label" htmlFor="validationCustomAgree">
            Agree to terms and conditions
          </label>
          <div className="invalid-feedback">{error.agreed || ""}</div>
        </div>
      </div>

      <div className="col-12">
        <button className="btn btn-primary" type="submit">
          {isEditing ? "Update Entry" : "Submit form"}
        </button>
      </div>
    </form>
  );
}

export default FormProps;
