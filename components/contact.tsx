// components/ContactForm.js
"use client";
import Image from 'next/image';
import { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactForm = () => { 
  
  emailjs.init({
    publicKey: 'sIb1wSw4jng-4o9eW',
    blockHeadless: true,
    blockList: {
      list: [],
    },
    limitRate: {
      throttle: 10000, // 10s
    },
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const templateParams = {
    from_firstName: formData.firstName,
    from_lastName: formData.lastName,
    subject: formData.subject,
    message: formData.message,
    from_email: formData.email
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);

    emailjs
  .send('service_2359uht', 'template_ya65x67', templateParams, {
    publicKey: 'sIb1wSw4jng-4o9eW',
    blockList: {
      watchVariable: 'userEmail',
    },
    limitRate: {
      throttle: 0, // turn off the limit rate for these requests
    },
  })
  .then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    },
    (err) => {
      console.log('FAILED...', err);
    },
  );

  };

  return (
    <div className="bg-amber-200  min-h-screen flex items-center justify-center mb-28">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-amber-400">Get In Touch</h2>
          <p className="text-gray-600 mt-2">Fill up the form and our Team will get back to you within 24 hours.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Let's Join Together!</h3>
            <p className="text-gray-600">
              <FaMapMarkerAlt className="inline-block text-amber-400 mr-2" /> Techenologiestraat 51-55 1082 Berchem Saint Agathe
            </p>
            <p className="text-gray-600">
              <FaEnvelope className="inline-block text-amber-400 mr-2" /> infopiwcbrussels@gmail.com
            </p>
            <div className="hidden md:block">
              <img 
              src="/assets/img-contact.webp" 
                alt="Person Reading"
                className="object-cover opacity-75 w-3/4 mx-auto rounded"
              />
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-amber-200 text-white py-2 rounded-md hover:bg-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;