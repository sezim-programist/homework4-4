import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    email: '',
    phoneNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h2>Регистрация</h2>
      <form>
        <div>
          <label>Ф.И.О:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} />
        </div>
        <div>
          <label>Возраст:</label>
          <input type="text" name="age" value={formData.age} onChange={handleInputChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div>
          <label>Номер:</label>
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
        </div>
      </form>
      <h3>Информация:</h3>
      <p>Имя: {formData.fullName}</p>
      <p>Возраст: {formData.age}</p>
      <p>Email: {formData.email}</p>
      <p>Номер телефона: {formData.phoneNumber}</p>
    </div>
  );
};

export default RegistrationForm;