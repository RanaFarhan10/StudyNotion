import React from "react";

function Courses() {
  const courses = [
    {
      title: "Web Development Bootcamp",
      price: "$49",
      description: "Learn HTML, CSS, and JavaScript from scratch to build modern websites.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiEjBilP-PBEbL7NAsVh5jU2PEYPgaGhh8-g&s",
    },
    {
      title: "Python for Data Science",
      price: "$59",
      description: "Master Python basics and start analyzing data with popular libraries.",
      image: "https://static.vecteezy.com/system/resources/previews/005/442/693/non_2x/data-science-analytics-internet-and-technology-concept-concept-photo.jpg",
    },
    {
      title: "React.js Basics",
      price: "$39",
      description: "Understand components, props, state and build interactive UIs.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Cybersecurity Fundamentals",
      price: "$69",
      description: "Get started with security concepts, threats, and ethical hacking basics.",
      image: "https://www.1stformationsblog.co.uk/wp-content/uploads/2021/10/shutterstock_505066678.jpg",
    },
    {
    title: "Machine Learning A-Z",
    price: "$79",
    description: "Learn supervised and unsupervised machine learning algorithms from scratch.",
    image: "https://static.vecteezy.com/system/resources/previews/007/136/275/non_2x/machine-learning-modern-computer-technologies-concept-artificial-intelligence-ai-photo.jpg",
  },
  {
    title: "AWS Cloud Practitioner",
    price: "$89",
    description: "Understand cloud concepts, AWS services, and start deploying applications.",
    image: "https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fmt3jqwc0z2s685arc8tx.png",
  },
  {
    title: "JavaScript Advanced Concepts",
    price: "$45",
    description: "Deep dive into closures, asynchronous JS, event loop, and ES6+ features.",
    image: "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg",
  },
  {
    title: "Data Structures & Algorithms",
    price: "$55",
    description: "Learn essential DSA concepts to ace coding interviews and problem solving.",
    image: "https://i.ytimg.com/vi/CBYHwZcbD-s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA8k4zs5HJdzb77umvgq2jh6a5-Xg",
  },
  {
    title: "UI/UX Design Fundamentals",
    price: "$49",
    description: "Learn design principles, prototyping, and creating intuitive user interfaces.",
    image: "https://enozom.com/wp-content/uploads/2024/04/mobile-app-design-fundamentals-the-difference-between-UI-and-UX.webp",
  },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white px-6 md:px-20 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Explore Our Courses</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-[#0a0f1c] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-yellow-400 font-bold mb-2">{course.price}</p>
            <p className="text-gray-400 text-sm">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
