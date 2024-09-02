import { useState } from "react";

const Formnew = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});

  const onSubmit = () => {
    let nameError = "";
    let emailError = "";
    setError({});
    if (name == "") {
      nameError = "Please enter your name";
      //
      //alert("Please enter your name");
      //return false;
    }
    if (email == "") {
      emailError = "Please enter your email";
      //
      //alert("Please enter your email");
      //allError.push(["Please enter your email"]);
      //return false;
    }
    setError({ name: nameError, email: emailError });
    console.log("Form submitted", name, email);
  };
  const getName = (e) => {
    setName(e.target.value);
  };
  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <form>
        <input type="text" name="username" onChange={getName} />
        {error.name ? error.name : ""}
        <input type="email" name="email" onChange={getEmail} />
        {error.email ? error.email : ""}
        <button type="button" onClick={onSubmit}>
          save
        </button>
      </form>
    </>
  );
};
export default Formnew;
