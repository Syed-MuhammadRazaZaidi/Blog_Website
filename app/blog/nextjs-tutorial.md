---
title: Next JS TUTORIAL
description: A comprehensive guide to building modern web applications with Next.js
slug: nextjs-tutorial
date: 31/02/2025
author: Raza
image: "https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
---

Next.js has revolutionized the way we build React applications. This comprehensive guide will walk you through everything you need to know to build production-ready applications with Next.js.

## Introduction to Next.js

Next.js is a React framework that provides building blocks to create web applications. It handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations.

## Key Features of Next.js

### 1. File-Based Routing
```tsx showLineNumbers {3}
// app/page.tsx
export default function Home() {
  return <h1>Home Page</h1>
}

// app/blog/page.tsx
export default function Blog() {
  return <h1>Blog Page</h1>
}
```
### 2. Server-Side Rendering (SSR)
```tsx showLineNumbers  {6-7}
// app/blog/[slug]/page.tsx
export default async function BlogPost({ params }) {
  const post = await fetchPost(params.slug)
  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </article>
  )
}
```
### 3. Static Site Generation (SSG)
```tsx showLineNumbers
export async function generateStaticParams() {
  const posts = await fetchPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
```
## Setting Up Your First Next.js Project
#### 1. Create a new project
```tsx showLineNumbers
npx create-next-app@latest my-app --typescript --tailwind
cd my-app
```
#### 2. Start the development server:
```tsx showLineNumbers
npm run dev
```
### Project Structure
```tsx showLineNumbers
my-app/
  ├── app/
  │   ├── layout.tsx
  │   ├── page.tsx
  │   └── globals.css
  ├── public/
  ├── components/
  └── package.json
```
## Building Components
### Creating Reusable Components
```tsx showLineNumbers
// components/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      {children}
    </button>
  );
}
```
## Data Fetching
### Server Components
```tsx showLineNumbers
async function getData() {
  const res = await fetch('https://api.example.com/data')
  return res.json()
}

export default async function Page() {
  const data = await getData()
  
  return (
    <main>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </main>
  )
}
```
## API Routes
```tsx showLineNumbers
// app/api/posts/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const posts = await fetchPosts()
  return NextResponse.json(posts)
}
```
## Styling with Tailwind CSS
```tsx showLineNumbers
// components/Card.tsx
export function Card({ title, content }) {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div>
        <div className="text-xl font-medium text-black">{title}</div>
        <p className="text-gray-500">{content}</p>
      </div>
    </div>
  )
}
```
## Deployment
```tsx 
1. Push your code to GitHub 
2. Connect your repository to Vercel
3. Deploy with a single click
```
## Best Practices
### 1. Metadata Management
```tsx showLineNumbers
// app/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'Built with Next.js and TypeScript',
}
```
### 2. Image Optimization
```tsx showLineNumbers
import Image from 'next/image'

export function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero Image"
      width={1200}
      height={600}
      priority
    />
  )
}
```
## Conclusion

Next.js provides a powerful framework for building modern web applications. With its built-in features like automatic routing, server-side rendering, and API routes, you can focus on building your application rather than configuration.

## Additional Resources

* Next.js Documentation
* React Documentation 
* Tailwind CSS Documentation 

Remember to always check the official documentation for the most up-to-date information and best practices.

