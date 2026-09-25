import React from 'react';

const About = () => {
    return (
         <div className="bg-[#0A0F1C] text-white px-6 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 mb-6">
              Our Founding Story
            </h2>
            <p className="text-gray-400 mb-4">
              Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.
            </p>
            <p className="text-gray-400">
              As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://media.istockphoto.com/id/1438634414/photo/business-women-laptop-and-and-happy-team-in-office-for-web-design-collaboration-and-training.jpg?s=612x612&w=0&k=20&c=8e5Wj1tvb4thQCJixGcDRztDtvmuw8x0sO1Fvx8SKyI="
              alt="Founding Story"
              className="rounded-md border border-pink-500 shadow-lg shadow-pink-600/30 max-h-80 object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold text-orange-400 mb-4">Our Vision</h3>
            <p className="text-gray-400">
              With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Our Mission</h3>
            <p className="text-gray-400">
              Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
            </p>
          </div>
        </div>

      </div>
    </div>
            
    );
};

export default About;