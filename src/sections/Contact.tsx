"use client";

import { useState } from "react";
import Image from "next/image";
import contactImage from "@/assets/images/contact_image.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacts" className="my-10">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
          {/* Left Image Section */}
          <div className="relative min-h-[400px]">
            <Image
              src={contactImage}
              alt="executive_profile"
              className="absolute inset-0 w-full h-full object-cover relative"
            />
          </div>

          {/* Right Contact Form Section */}
          <div className="p-6 lg:p-10 flex flex-col justify-center">
            <h1 className="text-2xl font-bold mb-4">Get A Free Quote</h1>
            <p className="mb-6 text-gray-600">
              Get in touch with Virtual Boardroom SA for expert business
              solutions! Our team is ready to help you achieve organizational
              success!
            </p>

            <form  className="space-y-4" action="https://api.web3forms.com/submit" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             
              <input type="hidden" name="access_key" value="57e61543-3fbc-4093-9069-33b6321f355b"/>


                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-stone-900"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-stone-900"
                  placeholder="Your Email"
                  required
                />
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-stone-900"
                  placeholder="Your Mobile"
                  required
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-stone-900"
                  required
                >
                  <option value="">Select A Service</option>
                  <option value="Virtual Assistance">Virtual Assistance</option>
                  <option value="Personal & Business Finance">
                    Personal & Business Finance
                  </option>
                  <option value="Recruitment Pack">Recruitment Pack</option>
                  <option value="Branding & IT">Branding & IT</option>
                  <option value="Travel Management">Travel Management</option>
                  <option value="Social Media Management">
                    Social Media Management
                  </option>
                  <option value="Mentorship">Mentorship</option>
                  <option value="Events Management">Events Management</option>
                </select>
              </div>

              <textarea
                name="note"
                value={formData.note}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-stone-900"
                placeholder="Message"
                rows={4}
              ></textarea>

              <button
                type="submit"
                className="w-full bg-stone-900 text-white font-medium py-3 rounded-md hover:bg-stone-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
