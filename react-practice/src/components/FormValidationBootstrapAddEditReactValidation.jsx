import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import SuccessMessage from "./SuccessMessage";

const FormValidationBootstrapAddEditReactValidation = () => {
  const [dataList, setDataList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  const {
    register,
    handleSubmit,
    setValue,
    trigger, // Added to manually trigger validation
    formState: { errors, touchedFields },
    reset,
  } = useForm({
    defaultValues: {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      zip: "",
      address: "",
      gender: "",
      dob: "",
      agreed: false,
    },
    mode: "onTouched", // Trigger validation when fields are touched
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData")) || [];
    setDataList(savedData);
  }, []);

  const onSubmit = async (data) => {
    const isValid = await trigger(); // Ensure validation is triggered before submission
    if (!isValid) return; // Stop submission if validation fails

    setLoading(true);

    setTimeout(() => {
      const savedData = JSON.parse(localStorage.getItem("formData")) || [];
      const timestamp = new Date().toLocaleString();

      if (isEditing && currentId !== null) {
        const updatedData = savedData.map((item) =>
          item.id === currentId
            ? { ...item, ...data, updatedAt: timestamp }
            : item
        );
        localStorage.setItem("formData", JSON.stringify(updatedData));
        setDataList(updatedData);
        setIsEditing(false);
        setCurrentId(null);
        setMessage("Entry updated successfully!");
      } else {
        const newId =
          savedData.length > 0
            ? Math.max(...savedData.map((item) => item.id)) + 1
            : 1;
        const newEntry = { id: newId, ...data, createdAt: timestamp };
        savedData.push(newEntry);
        localStorage.setItem("formData", JSON.stringify(savedData));
        setDataList(savedData);
        setMessage("Form submitted successfully!");
      }

      reset();
      setLoading(false);
      setFormVisible(false);
      setMessageType("success");
    }, 2000);
  };

  const handleAddNew = () => {
    reset();
    setIsEditing(false);
    setCurrentId(null);
    setFormVisible(true);
  };

  const handleEdit = (id) => {
    const itemToEdit = dataList.find((item) => item.id === id);
    if (itemToEdit) {
      Object.keys(itemToEdit).forEach((field) => {
        setValue(field, itemToEdit[field]);
      });
      setIsEditing(true);
      setCurrentId(id);
      setFormVisible(true);
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
        <form
          className="row g-3 needs-validation"
          onSubmit={handleSubmit(onSubmit)}>
          <div className="col-md-4">
            <label htmlFor="fname" className="form-label">
              First name
            </label>
            <input
              type="text"
              className={`form-control ${
                errors.fname
                  ? "is-invalid"
                  : touchedFields.fname
                  ? "is-valid"
                  : ""
              }`}
              id="fname"
              {...register("fname", {
                required: "Please enter your first name",
              })}
            />
            <div className="invalid-feedback">{errors.fname?.message}</div>
          </div>

          <div className="col-md-4">
            <label htmlFor="lname" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className={`form-control ${
                errors.lname
                  ? "is-invalid"
                  : touchedFields.lname
                  ? "is-valid"
                  : ""
              }`}
              id="lname"
              {...register("lname", {
                required: "Please enter your last name",
              })}
            />
            <div className="invalid-feedback">{errors.lname?.message}</div>
          </div>

          <div className="col-md-4">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className={`form-control ${
                errors.email
                  ? "is-invalid"
                  : touchedFields.email
                  ? "is-valid"
                  : ""
              }`}
              id="email"
              {...register("email", {
                required: "Please enter your email",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please enter a valid email",
                },
              })}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>

          <div className="col-md-4">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className={`form-control ${
                errors.phone
                  ? "is-invalid"
                  : touchedFields.phone
                  ? "is-valid"
                  : ""
              }`}
              id="phone"
              {...register("phone", {
                required: "Please enter your phone number",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
            />
            <div className="invalid-feedback">{errors.phone?.message}</div>
          </div>

          <div className="col-md-4">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              className={`form-control ${
                errors.city
                  ? "is-invalid"
                  : touchedFields.city
                  ? "is-valid"
                  : ""
              }`}
              id="city"
              {...register("city", { required: "Please enter your city" })}
            />
            <div className="invalid-feedback">{errors.city?.message}</div>
          </div>

          <div className="col-md-4">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <select
              className={`form-control ${
                errors.state
                  ? "is-invalid"
                  : touchedFields.state
                  ? "is-valid"
                  : ""
              }`}
              id="state"
              {...register("state", { required: "Please select your state" })}>
              <option value="">Choose...</option>
              <option value="CA">California</option>
              <option value="NY">New York</option>
              <option value="TX">Texas</option>
            </select>
            <div className="invalid-feedback">{errors.state?.message}</div>
          </div>

          <div className="col-md-4">
            <label htmlFor="zip" className="form-label">
              Zip Code
            </label>
            <input
              type="text"
              className={`form-control ${
                errors.zip ? "is-invalid" : touchedFields.zip ? "is-valid" : ""
              }`}
              id="zip"
              {...register("zip", {
                required: "Please enter your zip code",
                pattern: {
                  value: /^\d{5}$/,
                  message: "Zip code must be 5 digits",
                },
              })}
            />
            <div className="invalid-feedback">{errors.zip?.message}</div>
          </div>

          <div className="col-md-8">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea
              className={`form-control ${
                errors.address
                  ? "is-invalid"
                  : touchedFields.address
                  ? "is-valid"
                  : ""
              }`}
              id="address"
              {...register("address", {
                required: "Please enter your address",
              })}
            />
            <div className="invalid-feedback">{errors.address?.message}</div>
          </div>

          <div className="col-md-4">
            <label className="form-label">Gender</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className={`form-check-input ${
                    errors.gender
                      ? "is-invalid"
                      : touchedFields.gender
                      ? "is-valid"
                      : ""
                  }`}
                  type="radio"
                  id="male"
                  value="male"
                  {...register("gender", {
                    required: "Please select your gender",
                  })}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className={`form-check-input ${
                    errors.gender
                      ? "is-invalid"
                      : touchedFields.gender
                      ? "is-valid"
                      : ""
                  }`}
                  type="radio"
                  id="female"
                  value="female"
                  {...register("gender", {
                    required: "Please select your gender",
                  })}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>

              <div className="invalid-feedback d-block">
                {errors.gender?.message}
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <label htmlFor="dob" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              className={`form-control ${
                errors.dob ? "is-invalid" : touchedFields.dob ? "is-valid" : ""
              }`}
              id="dob"
              {...register("dob", {
                required: "Please enter your date of birth",
              })}
            />
            <div className="invalid-feedback">{errors.dob?.message}</div>
          </div>

          <div className="col-md-4">
            <div className="form-check">
              <input
                className={`form-check-input ${
                  errors.agreed
                    ? "is-invalid"
                    : touchedFields.agreed
                    ? "is-valid"
                    : ""
                }`}
                type="checkbox"
                id="agreed"
                {...register("agreed", {
                  required: "You must agree before submitting",
                })}
              />
              <label className="form-check-label" htmlFor="agreed">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">{errors.agreed?.message}</div>
            </div>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      )}

      {!formVisible && dataList.length > 0 && (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((item) => (
              <tr key={item.id}>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <button
                    className="btn btn-secondary me-2"
                    onClick={() => handleEdit(item.id)}>
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default FormValidationBootstrapAddEditReactValidation;
