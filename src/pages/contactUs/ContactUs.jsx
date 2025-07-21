import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <>
      {/* Sección superior con título y redes sociales */}
      <div className="w-full bg-white px-4 py-12 flex flex-col md:flex-row items-center justify-between max-w-[1439px] h-[311px] mx-auto mt-[128px]">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-5xl font-bold mb-4">Get in touch with us.</h1>
          <p className="text-lg text-gray-600">
            We're here to{' '}
            <span className="text-blue-600 font-semibold">assist you</span>.
          </p>
        </div>

        {/* Íconos de redes sociales */}
        <div className="flex gap-4">
          {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition"
            >
              <Icon className="text-xl" />
            </a>
          ))}
        </div>
      </div>

      {/* Sección principal de contacto */}
      <section className="w-full bg-[#f7f9fc] py-20 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Título principal */}
          <h2 className="text-5xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-10">
            Any question or remarks? Just write us a message!
          </p>

          {/* Contenedor del formulario */}
          <div className="bg-white shadow-xl rounded-3xl flex flex-col md:flex-row overflow-hidden">
            {/* Columna izquierda - Información */}
            <div className="bg-gradient-to-b from-blue-500 to-blue-300 text-white w-full md:w-1/2 p-8 flex items-center justify-center relative">
              <div className="absolute top-4 left-4 w-28 h-28 bg-blue-200 rounded-full opacity-40 blur-3xl" />
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Pyramid_of_Khafre_and_Great_Sphinx_of_Giza.jpg/480px-Pyramid_of_Khafre_and_Great_Sphinx_of_Giza.jpg"
                  alt="pyramid"
                  className="w-full max-w-xs mx-auto rounded-lg"
                />
              </div>
            </div>

            {/* Columna derecha - Formulario */}
            <div className="w-full md:w-1/2 p-8">
              <form className="space-y-6">
                {/* Nombres */}
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Correo y Teléfono */}
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Asunto */}
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Select Subject?
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {['Services', 'Account Access', 'Application', 'Partners'].map((option) => (
                      <label key={option} className="flex items-center gap-2">
                        <input type="radio" name="subject" className="accent-blue-500" />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Mensaje */}
                <textarea
                  placeholder="Write your message..."
                  rows={4}
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                ></textarea>

                {/* Botón */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer inferior de la sección de contacto */}
      <div className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-gray-700 text-sm">
          <div>
            <p className="text-blue-600 font-medium mb-2">Contact Info</p>
            <h3 className="text-2xl font-bold">
              We are always happy <br />
              to <span className="text-blue-600">assist you</span>
            </h3>
          </div>
          <div>
            <p className="font-semibold mb-1">Email Address</p>
            <p className="text-blue-600">support@solutions.rwa.inc</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Assistance hours:</p>
            <p>Monday - Friday 6 am to 8 pm EST</p>
          </div>
        </div>
      </div>
    </>
  );
}
