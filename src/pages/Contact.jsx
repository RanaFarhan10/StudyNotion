import React from 'react';

const Contact = () => {
    return (
        <div className="bg-[#0A0F1C] min-h-screen text-white px-6 py-16 flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-10">
        <div className="bg-[#1E1E2F] rounded-lg p-8 flex-1 text-sm space-y-8">
          <div>
            <h4 className="font-semibold text-lg mb-1 flex items-center gap-2">
              Chat on us
            </h4>
            <p className="text-gray-400">
              Our friendly team is here to help. <br />
              <p>ranafarhanqamar@gmail.com</p>
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-1 flex items-center gap-2">
              Visit us
            </h4>
            <p className="text-gray-400">
              Come and say hello at our office HQ. <br />
              DHA phase 11,Arcaid plaza first floor<br />
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-1 flex items-center gap-2">
              Call us
            </h4>
            <p className="text-gray-400">
              Mon - Fri From 8am to 5pm <br />
              +9212345678
            </p>
          </div>
        </div>

        <div className="flex-1 bg-[#0A0F1C] border border-gray-700 rounded-lg p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Got a Idea? We've got the skills. <br /> Let's team up
          </h2>
          <p className="text-gray-400 mb-8">
            Tell us more about yourself and what you're got in mind.
          </p>

          <form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter first name"
                className="bg-[#2C2C38] w-full p-3 rounded text-white placeholder-gray-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Enter last name"
                className="bg-[#2C2C38] w-full p-3 rounded text-white placeholder-gray-400 focus:outline-none"
              />
            </div>

            <input
              type="email"
              placeholder="Enter email address"
              className="bg-[#2C2C38] w-full p-3 rounded text-white placeholder-gray-400 focus:outline-none"
            />

            <div className="flex gap-4">
              <select className="bg-[#2C2C38] p-3 rounded text-white focus:outline-none">
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
              </select>
              <input
                type="tel"
                placeholder="12345 67890"
                className="bg-[#2C2C38] w-full p-3 rounded text-white placeholder-gray-400 focus:outline-none"
              />
            </div>

            <textarea
              rows="5"
              placeholder="Enter your message here"
              className="bg-[#2C2C38] w-full p-3 rounded text-white placeholder-gray-400 focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-3 rounded hover:bg-yellow-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Contact;