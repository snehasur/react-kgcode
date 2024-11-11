import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

// Define the form data interface
interface FormData {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  zip: string;
  address: string;
  gender: string;
  dob: string;
  agreed: boolean;
}

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  const {
    register,
    handleSubmit,
    setValue,
    trigger, // Manually trigger validation
    formState: { errors, touchedFields },
    reset,
  } = useForm<FormData>({
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
    mode: "onTouched", // Trigger validation on touch
  });

  const onSubmit = async (data: FormData) => {
    const isValid = await trigger(); // Ensure validation is triggered before submission
    if (!isValid) return; // Stop submission if validation fails

    setLoading(true);
    setTimeout(() => {
      const savedDataString = localStorage.getItem("formData");
      const savedData = savedDataString ? JSON.parse(savedDataString) : []; // Handle the null case
      const timestamp = new Date().toLocaleString();

      const newId =
        savedData.length > 0 ? Math.max(...savedData.map((item: any) => item.id)) + 1 : 1;
      const newEntry = { id: newId, ...data, createdAt: timestamp };
      savedData.push(newEntry);

      localStorage.setItem("formData", JSON.stringify(savedData));

      setMessage("Form submitted successfully!");
      setMessageType("success");
      reset(); // Reset form after submission
      setLoading(false);
    }, 2000);
  };

  const handleCloseMessage = () => {
    setMessage("");
  };

  return (
    <>
      <div className={`alert alert-${messageType}`} role="alert" style={{ display: message ? "block" : "none" }}>
        {message}
        <button type="button" className="btn-close" onClick={handleCloseMessage}></button>
      </div>

      {loading && (
        <div className="d-flex justify-content-center mt-3">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <form className="row g-3 needs-validation" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-md-4">
          <label htmlFor="fname" className="form-label">
            First name
          </label>
          <input
            type="text"
            className={`form-control ${
              errors.fname ? "is-invalid" : touchedFields.fname ? "is-valid" : ""
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
              errors.lname ? "is-invalid" : touchedFields.lname ? "is-valid" : ""
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
              errors.email ? "is-invalid" : touchedFields.email ? "is-valid" : ""
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
              errors.phone ? "is-invalid" : touchedFields.phone ? "is-valid" : ""
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
              errors.city ? "is-invalid" : touchedFields.city ? "is-valid" : ""
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
              errors.state ? "is-invalid" : touchedFields.state ? "is-valid" : ""
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
              errors.address ? "is-invalid" : touchedFields.address ? "is-valid" : ""
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
                  errors.gender ? "is-invalid" : touchedFields.gender ? "is-valid" : ""
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
                  errors.gender ? "is-invalid" : touchedFields.gender ? "is-valid" : ""
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
            {...register("dob", { required: "Please select your date of birth" })}
          />
          <div className="invalid-feedback">{errors.dob?.message}</div>
        </div>

        <div className="col-md-4 form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="agreed"
            {...register("agreed", { required: "You must agree to the terms" })}
          />
          <label className="form-check-label" htmlFor="agreed">
            Agree to terms
          </label>
          <div className="invalid-feedback">{errors.agreed?.message}</div>
        </div>

        <div className="col-md-12">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
