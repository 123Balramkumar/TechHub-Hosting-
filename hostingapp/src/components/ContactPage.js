// ContactPage.js
import React from 'react';
import  { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
     console.log('Form submitted:', formData);
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  return (
    <div className="contact">
      
        <h2 style={{display:'flex',justifyContent:'center'}}>Make a Quick Entry</h2>
        {/* Include a contact form */}
        
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px',boxShadow:'0px 7px 15px 0px rgba(0, 0, 0, 0.25)',width:450,borderRadius:5 }}>

      <form  onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '5px' }}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '5px' }}
          />
        </label>

        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '5px' }}
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '5px' }}
          />
        </label>

        <button
          type="submit"
          style={{
            background: 'black',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
        
      </div>
  );
};

export default ContactPage;
