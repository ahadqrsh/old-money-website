import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full mt-16 bg-[#f8f4e3] font-serif">
      {/* Contact Section */}
      <div className="flex flex-col md:flex-row w-full min-h-screen">
        {/* Left Section with Image and Text */}
        <div className="relative w-full md:w-1/2 h-96 md:h-auto">
          <img
            src="https://media.istockphoto.com/id/665032164/photo/flat-lay-of-modern-mens-clothing-on-a-wooden-background.jpg?s=612x612&w=0&k=20&c=CVqFStPc5EDNHIqnpYKPm-DaImQVf2VDjl54oPBavK4="
            alt="Contact Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
            <h3 className="text-3xl md:text-5xl font-bold text-center leading-snug text-[#f8f4e3] drop-shadow-lg">
              WE&apos;D LOVE TO HEAR <br /> FROM YOU
            </h3>
          </div>
        </div>

        {/* Right Section with Form */}
        <div className="w-full md:w-1/2 bg-[#fdfbf5] p-10 flex flex-col justify-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4 text-stone-900">Contact Old Money</h2>
          <p className="text-sm text-stone-600 mb-8 leading-relaxed">
            Our support team is here to help. Want to get in touch? We would love to hear from you. 
            Here&apos;s how you can reach us. Thank you!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="mt-2 w-full border border-stone-300 rounded-md p-3 bg-[#fdfbf5] shadow-sm focus:outline-none focus:ring-2 focus:ring-stone-800"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-2 w-full border border-stone-300 rounded-md p-3 bg-[#fdfbf5] shadow-sm focus:outline-none focus:ring-2 focus:ring-stone-800"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-stone-700">Subject (Include Order Number)</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="mt-2 w-full border border-stone-300 rounded-md p-3 bg-[#fdfbf5] shadow-sm focus:outline-none focus:ring-2 focus:ring-stone-800"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                required
                className="mt-2 w-full border border-stone-300 rounded-md p-3 bg-[#fdfbf5] shadow-sm focus:outline-none focus:ring-2 focus:ring-stone-800"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-stone-900 text-[#f8f4e3] py-3 px-4 rounded-md font-semibold hover:bg-stone-700 transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
