import React, { useState } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';


const Form = styled.div`
  background-color: black;
  color: grey;
  width: 60%;
  margin: 5% auto;
  padding: 2%;
`;

const FormTitle = styled.h2`
  font-family: 'Gotu', sans-serif;
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    qcc: ''
  });

  // TODO onchange 
  // TODO formSubmit

  return (
    <>
      <Header />
      <div className="Contact">
        <Form>
          <form 
            style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
          >
            <FormTitle>Contact Form</FormTitle>
            <label 
              htmlFor="name" 
              style={{margin: '2% 0', width: '100%'}}
            >
              Name:
                <input 
                  name="name" 
                  type="text" 
                  value={formData.name} 
                  placeholder="enter name"
                  style={{marginLeft: '2%'}}
                />
            </label>
            <label 
              htmlFor="email" 
              style={{margin: '2% 0', width: '100%'}}
            >
              Email:
              <input 
                name="email" 
                type="text" 
                value={formData.email} 
                placeholder="email"
                style={{marginLeft: '2%'}}
              />
            </label>
            <label 
              htmlFor="QCC" 
              style={{margin: '2% 0'}}
            >
              Questions/Comments/Concerns:
            </label>
            <textarea 
              value={formData.qcc}
            />
            <button 
              type="submit" 
              style={{margin: '2% 0', fontSize: '1rem', backgroundColor: 'black', color: 'grey', borderRadius: '10px', padding: '1.5%'}}
            >
              Inquire here
            </button>
          </form>
        </Form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;