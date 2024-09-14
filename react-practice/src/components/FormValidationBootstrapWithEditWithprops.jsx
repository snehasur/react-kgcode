import { useState, useEffect } from "react";
import Loader from "./Loader";
import AddNewBtn from "./AddNewBtn";
import FormProps from "./FormProps";
import UserList from "./UserList";
import SuccessMessage from "./SuccessMessage";
const FormValidationBootstrapWithEditWithprops = () => {
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
  const [message, setMessage] = useState(""); // Message state
  const [messageType, setMessageType] = useState("success"); // Message type state (success, danger)

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
      setMessage(
        isEditing
          ? "Entry updated successfully!"
          : "Form submitted successfully!"
      );
      setMessageType("success");
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
    setMessage("Entry deleted successfully!");
    setMessageType("danger");
  };
  const handleCloseMessage = () => {
    setMessage("");
  };

  return (
    <>
      <SuccessMessage
        message={message}
        type={messageType}
        onClose={handleCloseMessage}
      />
      {loading && <Loader />}
      {!formVisible && <AddNewBtn handleAddNew={handleAddNew} />}

      {formVisible && (
        <FormProps
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          touched={touched}
          error={error}
          inputValueFname={inputValueFname}
          inputValueLname={inputValueLname}
          inputValueEmail={inputValueEmail}
          inputValuePhone={inputValuePhone}
          inputValueCity={inputValueCity}
          inputValueState={inputValueState}
          inputValueZip={inputValueZip}
          inputValueAddress={inputValueAddress}
          inputValueGender={inputValueGender}
          inputValueDOB={inputValueDOB}
          isAgreed={isAgreed}
          isEditing={isEditing}
        />
      )}

      <UserList
        dataList={dataList}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default FormValidationBootstrapWithEditWithprops;
