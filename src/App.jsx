import React, { useState } from 'react';

const App = () => {
  const [fullName, setFullName] = useState({
    firstName: '',
    lastName: ''
  });
  const [isDisplay, setIsDisplay] = useState(false);

  const handleChange = (val) => {
    const { name, value } = val.target;
    setFullName({ ...fullName, [name]: value });
  };

  const handleBtn = (e) => {
    e.preventDefault();
    setIsDisplay(true);
  };

  return (
    <div>
      <h2>Full Name Display</h2>
      <form onSubmit={handleBtn}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={fullName.firstName}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={fullName.lastName}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <button type="Submit">Submit</button>
      </form>
      {isDisplay && fullName.firstName && fullName.lastName && (
        <p>
          Full Name: {fullName.firstName} {fullName.lastName}
        </p>
      )}
    </div>
  );
};

export default App;
