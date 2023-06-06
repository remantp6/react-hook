import React, { useState } from "react";

const Form = () => {
  /* const [formData, setFormData] = useState({ name: '', email: '' }); 
uses the useState hook in React to create a new state variable named formData.
The useState hook returns an array containing two elements:
the initial value of the formData state variable is an object containing
two properties, name and email, both of which are initially set to empty strings.
The formData object is used to store the current values of the form inputs. 
The setFormData function can be called to update the values of the formData object.*/
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    text_area: "",
    gender: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You have submitted your form");
  };
  //The handleInputChange function is called with an event object event as an argument.
  //The current value of formData is spread using the spread operator ...formData.
  //This creates a new object with the same properties as the current formData object.
  //The property with the name event.target.name is replaced with the new value event.target.value.
  //The resulting object is passed to the setFormData function to update the state of
  //the formData object.
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((currValue) => ({ ...currValue, [name]: value }));
  };
  return (
    <>
      <div className="multi_input_form">
        <div className="cont">
          <h4>A form with multiple inputs</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                placeholder="Name"
                name="username"
                value={formData.username}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              {/* such as, value={formData.email} is a React JSX expression
               that sets the value of the <input> element to the value 
              of the email property in the formData object.*/}
              <input
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <textarea
                name="text_area"
                value={formData.text_area}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
