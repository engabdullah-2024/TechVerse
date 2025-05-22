'use client'
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About'; 
import Contact from './pages/Contact';

const articles = [
  {
    title: 'Programming',
    description: 'Explore the latest in coding practices, languages, and tips to improve your skills.',
    fullDescription: `🧠 What is Programming?
Programming is the process of writing instructions that a computer can understand and execute to perform specific tasks.

🔧 Types:
- Frontend (HTML, CSS, JavaScript)
- Backend (Node.js, Python, Java)
- Scripting (Bash, PowerShell, PHP)
- Mobile (Swift, Kotlin)

🚀 How to Use:
Start with beginner-friendly languages like Python or JavaScript using an editor like VS Code or Replit.

🛣️ Roadmap:
1. Choose a language (e.g., Python, JS)
2. Learn basic syntax and logic
3. Understand data structures and algorithms
4. Build small projects
5. Explore advanced concepts and frameworks

⏱️ Estimated Read Time: 3 min`,
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1469&auto=format&fit=crop',
  },
  {
    title: 'Information Technology',
    description: 'Stay updated with trends in IT, networking, and infrastructure.',
    fullDescription: `🧠 What is Information Technology?
Information Technology (IT) involves the use of computers, storage, networking, and other infrastructure to process and manage information.

🔧 Types:
- Networking
- System Administration
- Cybersecurity
- Cloud Computing

🚀 How to Use:
Start with basic hardware/software concepts, then dive into networking, servers, and cloud services like AWS.

🛣️ Roadmap:
1. Understand basic computer systems
2. Learn about operating systems and networking
3. Get hands-on with server management
4. Study cybersecurity and cloud computing
5. Earn certifications (CompTIA, AWS, Cisco)

⏱️ Estimated Read Time: 4 min`,
    image:
      'https://images.unsplash.com/photo-1561883088-039e53143d73?q=80&w=1470&auto=format&fit=crop',
  },
  {
    title: 'Fullstack Web Development',
    description: 'Build dynamic web apps using frontend and backend technologies.',
    fullDescription: `🧠 What is Fullstack Web Development?
Fullstack development means working on both frontend (client-side) and backend (server-side) of web applications.

🔧 Technologies:
- Frontend: React, Vue, Angular
- Backend: Node.js, Django, Ruby on Rails
- Databases: MongoDB, PostgreSQL, MySQL

🚀 How to Use:
Learn JavaScript deeply, master a frontend framework, then pick a backend technology and connect both.

🛣️ Roadmap:
1. Learn HTML, CSS, JavaScript
2. Pick a frontend framework (React recommended)
3. Learn backend basics (Node.js/Express)
4. Work with databases
5. Build full projects and deploy

⏱️ Estimated Read Time: 6 min`,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Ng8rf_znwgtmjoGn-wSxBev49L5Z6d2mGg&s',
  },
  {
    title: 'Machine Learning',
    description: 'Dive into models and algorithms that power intelligent systems.',
    fullDescription: `🧠 What is Machine Learning?
Machine Learning (ML) is a branch of AI focused on building systems that learn from data to make predictions or decisions.

🔧 Types:
- Supervised Learning
- Unsupervised Learning
- Reinforcement Learning

🚀 How to Use:
Start with Python, learn libraries like scikit-learn, TensorFlow, and build models with datasets.

🛣️ Roadmap:
1. Understand statistics and linear algebra
2. Learn Python basics
3. Explore ML algorithms and libraries
4. Build projects and participate in competitions
5. Study Deep Learning for advanced models

⏱️ Estimated Read Time: 8 min`,
    image:
      'https://d3caycb064h6u1.cloudfront.net/wp-content/uploads/2025/02/what-is-machine-learning-and-machine-learning-techniques-67bc2a273a4f0-e1740981449660.webp',
  },
  {
    title: 'Artificial Intelligence',
    description: 'Understand AI principles and how it’s transforming industries.',
    fullDescription: `🧠 What is Artificial Intelligence?
AI enables machines to mimic human intelligence, enabling tasks like recognition, decision-making, and natural language processing.

🔧 Branches:
- Neural Networks
- Natural Language Processing (NLP)
- Computer Vision
- Robotics

🚀 How to Use:
Study algorithms, work with frameworks like TensorFlow and PyTorch, and implement AI models.

🛣️ Roadmap:
1. Learn programming and math foundations
2. Study AI concepts and algorithms
3. Practice with AI frameworks
4. Build AI projects (chatbots, vision apps)
5. Keep updated with latest research and tools

⏱️ Estimated Read Time: 8 min`,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4r1zB9MwRITLqU_H7ztLvVPvHN8Hrn-cyJw&s',
  },
  {
    title: 'Mobile Development',
    description: 'Create mobile apps for iOS and Android platforms.',
    fullDescription: `🧠 What is Mobile Development?
Mobile development involves building applications that run on mobile devices like smartphones and tablets.

🔧 Platforms:
- iOS (Swift, Objective-C)
- Android (Java, Kotlin)
- Cross-platform (React Native, Flutter)

🚀 How to Use:
Pick a platform, learn its language and SDK, then develop, test, and publish your apps.

🛣️ Roadmap:
1. Learn programming basics
2. Choose iOS, Android, or cross-platform
3. Study platform-specific SDKs
4. Build simple apps
5. Publish to App Stores and gather feedback

⏱️ Estimated Read Time: 6 min`,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYctSr4B2GRLaEz1VbrMRsVX0WemmwDGnuSw&s',
  },
];

const Home = () => {
  const [activeArticleIndex, setActiveArticleIndex] = useState<number | null>(null);

  return (
    <div>
      <Header/>

    <div id='articles'   className="min-h-screen bg-gray-50 px-6 py-10 mt-16">
      <div className="max-w-7xl mx-auto text-center mb-12 ">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-3">Welcome to TechVerse</h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Your hub for Programming, IT, Fullstack Dev, Machine Learning, AI & Mobile Development articles.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {articles.map((article, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-semibold mb-2 text-gray-900">{article.title}</h2>
              <p className="text-gray-600 flex-grow">{article.description}</p>
              <button
                onClick={() => setActiveArticleIndex(i)}
                className="mt-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeArticleIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-8 relative shadow-2xl">
            <button
              onClick={() => setActiveArticleIndex(null)}
              className="absolute top-4 right-6 text-gray-600 hover:text-gray-900 text-3xl font-bold leading-none"
              aria-label="Close Modal"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">{articles[activeArticleIndex].title}</h2>
            <pre className="whitespace-pre-wrap text-gray-800 text-lg leading-relaxed">
              {articles[activeArticleIndex].fullDescription}
            </pre>
            <button
              onClick={() => setActiveArticleIndex(null)}
              className="mt-8 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-xl w-full"
            >
              Close
            </button>
          </div>
          

          
        </div>
      )}
     
    </div>
    <div>
            <About/>
            <Contact/>
          </div>
     <Footer/>
                </div>
  );
};

export default Home;
