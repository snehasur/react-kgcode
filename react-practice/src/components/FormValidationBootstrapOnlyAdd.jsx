import { useState } from "react";

const FormValidationBootstrapOnlyAdd = () => {
  const [inputValueFname, setInputValueFname] = useState("");
  const [inputValueLname, setInputValueLname] = useState("");
  const [error, setError] = useState({});
  const [touched, setTouched] = useState({ fname: false, lname: false });

  const handleChangeFname = (event) => {
    setInputValueFname(event.target.value);
    setTouched({ ...touched, fname: true });

    if (event.target.value.trim() === "") {
      setError((prevError) => ({
        ...prevError,
        name: "Please enter your name",
      }));
    } else {
      setError((prevError) => ({ ...prevError, name: "" }));
    }
  };

  const handleChangeLname = (event) => {
    setInputValueLname(event.target.value);
    setTouched({ ...touched, lname: true });

    if (event.target.value.trim() === "") {
      setError((prevError) => ({
        ...prevError,
        email: "Please enter your email",
      }));
    } else {
      setError((prevError) => ({ ...prevError, email: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ fname: true, lname: true });

    let nameError = "";
    let emailError = "";

    if (inputValueFname.trim() === "") {
      nameError = "Please enter your name";
    }
    if (inputValueLname.trim() === "") {
      emailError = "Please enter your email";
    }

    setError({ name: nameError, email: emailError });

    if (nameError || emailError) {
      console.log("Form has errors, not submitted");
      return;
    }
    const savedData = JSON.parse(localStorage.getItem("formData")) || [];

    const newId =
      savedData.length > 0
        ? Math.max(...savedData.map((item) => item.id)) + 1
        : 1;

    const newEntry = {
      id: newId,
      fname: inputValueFname,
      lname: inputValueLname,
    };

    savedData.push(newEntry);

    localStorage.setItem("formData", JSON.stringify(savedData));

    console.log("Form submitted", newEntry);

    setError({});
    setInputValueFname("");
    setInputValueLname("");
    setTouched({ fname: false, lname: false });
    console.log("Form submitted", inputValueFname, inputValueLname);
  };

  return (
    <>
      <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            First name
          </label>
          <input
            type="text"
            className={`form-control ${
              touched.fname ? (error.name ? "is-invalid" : "is-valid") : ""
            }`}
            id="validationCustom01"
            value={inputValueFname}
            onChange={handleChangeFname}
          />
          <div className="invalid-feedback">{error.name || ""}</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className={`form-control ${
              touched.lname ? (error.email ? "is-invalid" : "is-valid") : ""
            }`}
            id="validationCustom02"
            value={inputValueLname}
            onChange={handleChangeLname}
          />
          <div className="invalid-feedback">{error.email || ""}</div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </>
  );
};

export default FormValidationBootstrapOnlyAdd;
