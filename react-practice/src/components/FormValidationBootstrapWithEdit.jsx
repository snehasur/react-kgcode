import { useState, useEffect } from "react";

const FormValidationBootstrapWithEdit = () => {
  const [inputValueFname, setInputValueFname] = useState("");
  const [inputValueLname, setInputValueLname] = useState("");
  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValuePhone, setInputValuePhone] = useState("");
  const [inputValueCity, setInputValueCity] = useState("");
  const [inputValueState, setInputValueState] = useState("");
  const [inputValueZip, setInputValueZip] = useState("");
  const [inputValueAddress, setInputValueAddress] = useState("");
  const [inputValueGender, setInputValueGender] = useState("");
  const [inputValueDOB, setInputValueDOB] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formVisible, setFormVisible] = useState(false); // Toggle form visibility

  const [error, setError] = useState({});
  const [touched, setTouched] = useState({
    fname: false,
    lname: false,
    email: false,
    phone: false,
    city: false,
    state: false,
    zip: false,
    address: false,
    gender: false,
    dob: false,
    agreed: false,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData")) || [];
    setDataList(savedData);
  }, []);

  const handleChange = (event, fieldName) => {
    const value = event.target.value;
    setTouched({ ...touched, [fieldName]: true });

    switch (fieldName) {
      case "fname":
        setInputValueFname(value);
        setError((prevError) => ({
          ...prevError,
          fname: value.trim() === "" ? "Please enter your first name" : "",
        }));
        break;
      case "lname":
        setInputValueLname(value);
        setError((prevError) => ({
          ...prevError,
          lname: value.trim() === "" ? "Please enter your last name" : "",
        }));
        break;
      case "email":
        setInputValueEmail(value);
        setError((prevError) => ({
          ...prevError,
          email:
            value.trim() === ""
              ? "Please enter your email"
              : !/\S+@\S+\.\S+/.test(value)
              ? "Please enter a valid email"
              : "",
        }));
        break;
      case "phone":
        setInputValuePhone(value);
        setError((prevError) => ({
          ...prevError,
          phone:
            value.trim() === ""
              ? "Please enter your phone number"
              : !/^\d{10}$/.test(value)
              ? "Phone number must be 10 digits"
              : "",
        }));
        break;
      case "city":
        setInputValueCity(value);
        setError((prevError) => ({
          ...prevError,
          city: value.trim() === "" ? "Please enter your city" : "",
        }));
        break;
      case "state":
        setInputValueState(value);
        setError((prevError) => ({
          ...prevError,
          state: value.trim() === "" ? "Please select your state" : "",
        }));
        break;
      case "zip":
        setInputValueZip(value);
        setError((prevError) => ({
          ...prevError,
          zip:
            value.trim() === ""
              ? "Please enter your zip code"
              : !/^\d{5}$/.test(value)
              ? "Zip code must be 5 digits"
              : "",
        }));
        break;
      case "address":
        setInputValueAddress(value);
        setError((prevError) => ({
          ...prevError,
          address: value.trim() === "" ? "Please enter your address" : "",
        }));
        break;
      case "gender":
        setInputValueGender(value);
        setError((prevError) => ({
          ...prevError,
          gender: value === "" ? "Please select your gender" : "",
        }));
        break;
      case "dob":
        setInputValueDOB(value);
        setError((prevError) => ({
          ...prevError,
          dob: value === "" ? "Please enter your date of birth" : "",
        }));
        break;
      case "agreed":
        setIsAgreed(event.target.checked);
        setError((prevError) => ({
          ...prevError,
          agreed: !event.target.checked ? "You must agree to terms" : "",
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      fname: true,
      lname: true,
      email: true,
      phone: true,
      city: true,
      state: true,
      zip: true,
      address: true,
      gender: true,
      dob: true,
      agreed: true,
    });

    const newError = {};
    if (inputValueFname.trim() === "")
      newError.fname = "Please enter your first name";
    if (inputValueLname.trim() === "")
      newError.lname = "Please enter your last name";
    if (inputValueEmail.trim() === "")
      newError.email = "Please enter your email";
    else if (!/\S+@\S+\.\S+/.test(inputValueEmail))
      newError.email = "Please enter a valid email";
    if (inputValuePhone.trim() === "")
      newError.phone = "Please enter your phone number";
    else if (!/^\d{10}$/.test(inputValuePhone))
      newError.phone = "Phone number must be 10 digits";
    if (inputValueCity.trim() === "") newError.city = "Please enter your city";
    if (inputValueState.trim() === "")
      newError.state = "Please select your state";
    if (inputValueZip.trim() === "")
      newError.zip = "Please enter your zip code";
    else if (!/^\d{5}$/.test(inputValueZip))
      newError.zip = "Zip code must be 5 digits";
    if (inputValueAddress.trim() === "")
      newError.address = "Please enter your address";
    if (inputValueGender === "") newError.gender = "Please select your gender";
    if (inputValueDOB === "") newError.dob = "Please enter your date of birth";
    if (!isAgreed) newError.agreed = "You must agree to terms";

    if (Object.keys(newError).length > 0) {
      setError(newError);
      console.log("Form has errors, not submitted");
      return;
    }

    setLoading(true); // Show loader

    setTimeout(() => {
      const savedData = JSON.parse(localStorage.getItem("formData")) || [];
      const timestamp = new Date().toLocaleString();

      if (isEditing && currentId !== null) {
        const updatedData = savedData.map((item) =>
          item.id === currentId
            ? {
                ...item,
                fname: inputValueFname,
                lname: inputValueLname,
                email: inputValueEmail,
                phone: inputValuePhone,
                city: inputValueCity,
                state: inputValueState,
                zip: inputValueZip,
                address: inputValueAddress,
                gender: inputValueGender,
                dob: inputValueDOB,
                agreed: isAgreed,
                updatedAt: timestamp,
              }
            : item
        );
        localStorage.setItem("formData", JSON.stringify(updatedData));
        setDataList(updatedData);
        setIsEditing(false);
        setCurrentId(null);
      } else {
        const newId =
          savedData.length > 0
            ? Math.max(...savedData.map((item) => item.id)) + 1
            : 1;

        const newEntry = {
          id: newId,
          fname: inputValueFname,
          lname: inputValueLname,
          email: inputValueEmail,
          phone: inputValuePhone,
          city: inputValueCity,
          state: inputValueState,
          zip: inputValueZip,
          address: inputValueAddress,
          gender: inputValueGender,
          dob: inputValueDOB,
          agreed: isAgreed,
          createdAt: timestamp,
        };

        savedData.push(newEntry);
        localStorage.setItem("formData", JSON.stringify(savedData));
        setDataList(savedData);
      }

      setError({});
      setInputValueFname("");
      setInputValueLname("");
      setInputValueEmail("");
      setInputValuePhone("");
      setInputValueCity("");
      setInputValueState("");
      setInputValueZip("");
      setInputValueAddress("");
      setInputValueGender("");
      setInputValueDOB("");
      setIsAgreed(false);
      setLoading(false); // Hide loader
      setFormVisible(false); // Hide form after submission
      setIsEditing(false); // Reset editing mode
    }, 2000);
  };

  const handleAddNew = () => {
    setIsEditing(false);
    setCurrentId(null);
    setFormVisible(true); // Show form when adding new
  };

  const handleEdit = (id) => {
    const itemToEdit = dataList.find((item) => item.id === id);
    if (itemToEdit) {
      setInputValueFname(itemToEdit.fname);
      setInputValueLname(itemToEdit.lname);
      setInputValueEmail(itemToEdit.email);
      setInputValuePhone(itemToEdit.phone);
      setInputValueCity(itemToEdit.city);
      setInputValueState(itemToEdit.state);
      setInputValueZip(itemToEdit.zip);
      setInputValueAddress(itemToEdit.address);
      setInputValueGender(itemToEdit.gender);
      setInputValueDOB(itemToEdit.dob);
      setIsAgreed(itemToEdit.agreed);

      setIsEditing(true);
      setCurrentId(id);
      setFormVisible(true); // Show form when editing
    }
  };
  const handleDelete = (id) => {
    const updatedData = dataList.filter((item) => item.id !== id);
    localStorage.setItem("formData", JSON.stringify(updatedData));
    setDataList(updatedData);
  };

  return (
    <>
      {loading && (
        <div className="d-flex justify-content-center mt-3">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {!formVisible && (
        <div className="row mb-4">
          <div className="col-12">
            <button className="btn btn-primary" onClick={handleAddNew}>
              Add New
            </button>
          </div>
        </div>
      )}

      {formVisible && (
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
              onChange={(e) => handleChange(e, "state")}
            >
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
                touched.address
                  ? error.address
                    ? "is-invalid"
                    : "is-valid"
                  : ""
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
                  touched.gender
                    ? error.gender
                      ? "is-invalid"
                      : "is-valid"
                    : ""
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
                  touched.gender
                    ? error.gender
                      ? "is-invalid"
                      : "is-valid"
                    : ""
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
                  touched.agreed
                    ? error.agreed
                      ? "is-invalid"
                      : "is-valid"
                    : ""
                }`}
                type="checkbox"
                id="validationCustomAgree"
                checked={isAgreed}
                onChange={(e) => handleChange(e, "agreed")}
              />
              <label
                className="form-check-label"
                htmlFor="validationCustomAgree"
              >
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
      )}

      <ul className="list-group mt-4">
        {dataList.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {item.fname} {item.lname} - {item.email}
            <div>
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => handleEdit(item.id)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FormValidationBootstrapWithEdit;
