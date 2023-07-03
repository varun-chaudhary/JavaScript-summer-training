import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    dateOfBirth: '',   
    country: '',
    state: '',
    pincode: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };
  const showAlert = () => {
    window.alert('Successfully Registered');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsRegistered(false); 
    } else {
    
      showAlert();
      setIsRegistered(true);
      setErrors({});
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        dateOfBirth: '',
        country: '',
        state: '',
        pincode: '',
        password: '',
        confirmPassword: '',
      });

    
      setTimeout(() => {
        setIsRegistered(false);
      }, 3000);
    }
  };

  const validateForm = () => {
    let validationErrors = {};

    if (!formData.firstName.trim()) {
      validationErrors.firstName = 'First name is required.';
    }

    if (!formData.lastName.trim()) {
      validationErrors.lastName = 'Last name is required.';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required.';
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = 'Invalid email format.';
    }

    if (!formData.mobileNumber.trim()) {
      validationErrors.mobileNumber = 'Mobile number is required.';
    } else if (!isValidMobileNumber(formData.mobileNumber)) {
      validationErrors.mobileNumber = 'Invalid mobile number format.';
    }

    if (!formData.dateOfBirth) {
      validationErrors.dateOfBirth = 'Date of Birth is required.';
    }

    if (!formData.country.trim()) {
      validationErrors.country = 'Country is required.';
    }

    if (!formData.state.trim()) {
      validationErrors.state = 'State is required.';
    }

    if (!formData.pincode.trim()) {
      validationErrors.pincode = 'Pincode is required.';
    } else if (!isValidPincode(formData.pincode)) {
      validationErrors.pincode = 'Invalid pincode format.';
    }

    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required.';
    }

    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match.';
    }

    return validationErrors;
  };

  const isValidEmail = (email) => {
    return email.includes('@');
  };

  const isValidMobileNumber = (mobileNumber) => {
    return /^\d{10}$/.test(mobileNumber);
  };

  const isValidPincode = (pincode) => {
    return /^\d{6}$/.test(pincode);
  };

  return (
    <div className="container mt-4 bg">
      <h1>E-Course Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row ">
          <div className="form-group col-md-6  ">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className={` field form-control ${errors.firstName ? 'is-invalid' : ''}`}
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="tel"
              className={`form-control ${errors.mobileNumber ? 'is-invalid' : ''}`}
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
            {errors.mobileNumber && <div className="invalid-feedback">{errors.mobileNumber}</div>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              className={`form-control ${errors.dateOfBirth ? 'is-invalid' : ''}`}
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
            {errors.dateOfBirth && <div className="invalid-feedback">{errors.dateOfBirth}</div>}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              className={`form-control ${errors.country ? 'is-invalid' : ''}`}
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
            {errors.country && <div className="invalid-feedback">{errors.country}</div>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="state">State</label>
            <input
              type="text"
              className={`form-control ${errors.state ? 'is-invalid' : ''}`}
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
            {errors.state && <div className="invalid-feedback">{errors.state}</div>}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="pincode">Pincode</label>
            <input
              type="text"
              className={`form-control ${errors.pincode ? 'is-invalid' : ''}`}
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
            {errors.pincode && <div className="invalid-feedback">{errors.pincode}</div>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
          </div>
        </div>
        <button type="submit" className="btn btn-primary sbtn">
          Register
        </button>
      </form>
    </div>
  );
};

export default App;
