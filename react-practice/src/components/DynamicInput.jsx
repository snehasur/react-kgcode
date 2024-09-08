import React, { useState, useEffect } from "react";

const DynamicFormComponent = () => {
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
  });

  useEffect(() => {
    // Synchronize input2 when input1 changes
    if (formData.input1 !== formData.input2) {
      setFormData((prevState) => ({
        ...prevState,
        input2: formData.input1,
      }));
    }
  }, [formData.input1]);

  useEffect(() => {
    // Synchronize input1 when input2 changes
    if (formData.input1 !== formData.input2) {
      setFormData((prevState) => ({
        ...prevState,
        input1: formData.input2,
      }));
    }
  }, [formData.input2]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input 1:", formData.input1);
    console.log("Input 2:", formData.input2);
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="input1">Input 1</label>
        <input
          type="text"
          id="input1"
          name="input1"
          value={formData.input1}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="input2">Input 2</label>
        <input
          type="text"
          id="input2"
          name="input2"
          value={formData.input2}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicFormComponent;
