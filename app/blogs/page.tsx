import React from "react";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";

const dirContent = fs.readdirSync("content", "utf-8");

const blogs = dirContent.map((file) => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(fileContent);
  return data;
});

const Blog = () => {
  return (  
    <>
      <div className="text-center mt-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-orange-500">Blogs</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
      </div>
      <div className="container mx-auto flex justify-between items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 mt-16">
          {blogs.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id}>
              <div className="rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={500}
                  className="w-full h-72 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 hover:text-gray-600">
                    {post.title}
                  </h2>
                  <p className=" mb-4">
                    {post.description.substring(0, 150)}...
                    <span className=" hover:text-gray-600 font-medium ml-2">
                      Read More
                    </span>
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <p className=" font-medium">{post.author}</p>
                        <p className="">{post.date}</p>
                      </div>
                    </div>
                    <span className="text-sm ">{post.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
