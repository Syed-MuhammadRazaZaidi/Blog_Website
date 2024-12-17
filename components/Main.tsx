"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Main = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "Getting Started with React and Tailwind CSS",
      description: "Learn how to build modern user interfaces with React and Tailwind CSS...",
      author: "John Doe",
      date: "Nov 12, 2023",
      readTime: "5 min read",
      image: "https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "Getting Started with React and Tailwind CSS",
      description: "Learn how to build modern user interfaces with React and Tailwind CSS...",
      author: "John Doe",
      date: "Nov 12, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "Getting Started with React and Tailwind CSS",
      description: "Learn how to build modern user interfaces with React and Tailwind CSS...",
      author: "John Doe",
      date: "Nov 12, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      title: "Getting Started with React and Tailwind CSS",
      description: "Learn how to build modern user interfaces with React and Tailwind CSS...",
      author: "John Doe",
      date: "Nov 12, 2023",
      readTime: "5 min read",
      image: "https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      title: "Getting Started with React and Tailwind CSS",
      description: "Learn how to build modern user interfaces with React and Tailwind CSS...",
      author: "John Doe",
      date: "Nov 12, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      title: "Getting Started with React and Tailwind CSS",
      description: "Learn how to build modern user interfaces with React and Tailwind CSS...",
      author: "John Doe",
      date: "Nov 12, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-5 text-orange-500">
          Welcome to Blog
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          Discover stories, thinking, and expertise from writers on any topic.
        </p>  
      </div>
    
      {/* Categories Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-5">Popular Categories</h2>
        <div className="flex flex-wrap gap-4">
          {['Technology', 'Programming', 'Design', 'Tutorial', 'Career'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full hover:bg-orange-500 transition-colors duration-300 border hover:border-black"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Posts Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
  {featuredPosts.map((post) => (
    <div key={post.id} className="rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
      <Image 
        src={post.image} 
        alt={post.title}
        height={500}
        width={500}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 hover:text-gray-600">
          {post.title}
        </h2>
        <p className=" mb-4">
          {post.description.substring(0, 150)}...
          <button className=" hover:text-gray-600 font-medium ml-2">
            Read More
          </button>
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-sm">
              <p className=" font-medium">{post.author}</p>
              <p className="">{post.date}</p>
            </div>
          </div>
          <span className="text-sm">{post.readTime}</span>
        </div>
      </div>
    </div>
  ))}
</div>

<section className=" body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className=" -my-8 divide-y-2 ">
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-orange-500">
            CATEGORY
          </span>
          <span className="mt-1  text-sm">12 Jun 2023</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium  title-font mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h2>
          <p className="leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium sapiente, cum voluptatibus sunt dolor eius perferendis fuga quo sed numquam, aliquid officia, necessitatibus quos ad blanditiis at? Nemo, delectus aspernatur!
          </p>
          <Link className=" inline-flex items-center mt-4" href={"/"}>
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-orange-500">
            CATEGORY
          </span>
          <span className="mt-1  text-sm">12 Jun 2023</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium title-font mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore.
          </h2>
          <p className="leading-relaxed">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas omnis dolor inventore, quis explicabo iste incidunt cum et tempore? Eos, aut. Impedit distinctio reprehenderit voluptate.
          </p>
          <Link className="inline-flex items-center mt-4" href={"/"}>
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-orange-500">
            CATEGORY
          </span>
          <span className="text-sm ">12 Jun 2023</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium title-font mb-2">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellendus alias ducimus corporis nulla fuga dolorum quam natus velit omnis, rem dolores cupiditate placeat ad assumenda accusantium qui, voluptatem ullam temporibus, libero quis aliquid unde? Excepturi voluptatem cupiditate possimus temporibus!
          </p>
          <Link className=" inline-flex items-center mt-4" href={"/"}>
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

  {/* Newsletter Section*/}
<div className="rounded-xl p-8 bg-gradient-to-r">
  <div className="max-w-2xl mx-auto text-center border border-black p-8 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold mb-4 text-orange-500">
      Join Our Community Newsletter
    </h2>
    <p className="mb-6">
      Get exclusive content, updates and insights delivered weekly to your inbox
    </p>
    <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 justify-center">
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2  w-full sm:w-auto"
        required
      />
      <button 
        className="px-8 py-3 rounded-lg border border-black hover:bg-orange-500 transition-all duration-300 transform hover:scale-105"
      >
        Subscribe Now
      </button>
    </div>
    <div className="mt-4 flex items-center justify-center space-x-4">
      <input type="checkbox" id="consent" className="rounded" />
      <label htmlFor="consent" className="text-sm text-gray-600">
        I agree to receive marketing emails and can unsubscribe anytime
      </label>
    </div>
    
  </div>
</div>
    </div>
  );
};

export default Main
{/* <button className="px-6 py-2 rounded-lg border border-black hover:bg-orange-500 transition-colors duration-300">
              Subscribe
            </button> */}