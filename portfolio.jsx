import React from 'react';

const Portfolio = () => {
  const skills = {
    technical: {
      'Programming Languages': ['Python', 'Bash', 'JavaScript', 'SQL'],
      'Tools & Frameworks': ['Docker', 'Kubernetes', 'TensorFlow', 'PyTorch'],
      'Cloud Platforms': ['AWS', 'GCP', 'Azure'],
    },
    soft: ['Problem Solving', 'Team Collaboration', 'Communication', 'Project Management']
  };

  const projects = [
    {
      title: 'MLOps Pipeline Automation',
      description: 'A scalable CI/CD pipeline for ML models using Kubernetes and Docker.',
      tools: ['Kubernetes', 'Docker', 'Python'],
      link: 'https://github.com/example-project-mlops',
      image: 'path/to/project-image.jpg'
    },
    {
      title: 'Sentiment Analysis Model',
      description: 'Built a sentiment analysis tool with TensorFlow using IMDb dataset.',
      tools: ['TensorFlow', 'Python'],
      link: 'https://github.com/example-project-sentiment',
      image: 'path/to/project-image.jpg'
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Landing Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hi, I'm Varun Narsana</h1>
          <p className="text-gray-600 text-lg mb-6">Aspiring MLOps Engineer | Machine Learning Enthusiast</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">View My Work</button>
        </section>

        {/* About Me Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-600">
                I'm a Computer Science student specializing in Machine Learning Operations and DevOps practices. With a strong foundation in software engineering and a passion for automating ML workflows, I'm dedicated to bridging the gap between data science and production engineering.
              </p>
              <p className="text-gray-600">
                Currently pursuing my degree at Lovely Professional University, I focus on developing scalable ML pipelines and implementing CI/CD practices for ML projects.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-600 font-medium">Fun Fact: When I'm not coding, you'll find me teaching robotics to high school students!</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Quick Facts</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                  Computer Science Student @ Lovely Professional University
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                  MLOps Intern @ [Company]
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                  Open Source Contributor
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills.technical).map(([category, items]) => (
              <div key={category} className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white text-blue-600 text-sm rounded-full shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.soft.map(skill => (
              <div
                key={skill}
                className="bg-blue-50 p-4 rounded-lg text-center"
              >
                <span className="text-blue-600 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map(tool => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-white text-blue-600 text-sm rounded-full shadow-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact</h2>
          <form className="grid gap-4 max-w-md mx-auto">
            <input type="text" placeholder="Name" className="p-3 border rounded-lg" required />
            <input type="email" placeholder="Email" className="p-3 border rounded-lg" required />
            <textarea placeholder="Message" className="p-3 border rounded-lg" rows="5" required></textarea>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-600 mt-16">
          <p>&copy; 2025 Varun Narsana. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Twitter</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
