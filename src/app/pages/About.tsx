import React from 'react';

const About = () => {
  return (
    <main id='about' className="pt-20 min-h-screen bg-gray-50 px-6 py-16 flex flex-col">
      <section className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-12 md:p-20">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">
          About TechVerse
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto mb-10 text-center">
          TechVerse is your ultimate destination for high-quality articles and tutorials
          on programming, IT, full-stack development, machine learning, artificial intelligence,
          and mobile development. Our mission is to empower developers and tech enthusiasts
          worldwide by providing clear, practical, and up-to-date content.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="p-6 bg-blue-50 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">Our Vision</h2>
            <p className="text-gray-600">
              To be the go-to platform for tech knowledge sharing, fostering a community
              of lifelong learners and innovators.
            </p>
          </div>
          <div className="p-6 bg-green-50 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-green-700 mb-3">Our Mission</h2>
            <p className="text-gray-600">
              To deliver reliable, actionable, and inspiring educational content for all levels,
              from beginners to experienced professionals.
            </p>
          </div>
          <div className="p-6 bg-purple-50 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-purple-700 mb-3">Our Team</h2>
            <p className="text-gray-600">
              Made up of passionate educators, developers, and content creators united by a
              love for technology and education.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
