"use client";

import React from "react";
import {
  Button,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import { ArrowSmallDownIcon } from "@heroicons/react/24/solid";
import BlogPostCard from "@/components/blog-post-card";


const POSTS = [
  {
    img: `/image/blogs/moqueca.png`,
    tag: "Enterprise",
    title: "moqueca",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "10 September 2022",
    author: {
      img: `/image/avatar1.jpg`,
      name: "Ryan Samuel",
    },
  },
  {
    img: `/image/blogs/blog6.svg`,
    tag: "Startups",
    title: "moqueca",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "12 September 2022",
    author: {
      img: `/image/blogs/blog2.svg`,
      name: "Nora Hazel",
    },
  },
  {
    img: `/image/blogs/blog3.svg`,
    tag: "Trending",
    title: "moqueca",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "16 September 2022",
    author: {
      img: `/image/avatar2.jpg`,
      name: "Otto Gonzalez",
    },
  },
  {
    img: `/image/blogs/blog4.svg`,
    tag: "Lifestyle",
    title: "moqueca",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "18 September 2022",
    author: {
      img: `/image/avatar3.jpg`,
      name: "Ryan Samuel",
    },
  },
  {
    img: `/image/blogs/blog5.svg`,
    tag: "Enterprise",
    title: "moqueca",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "10 September 2022",
    author: {
      img: `/image/avatar3.jpg`,
      name: "Ryan Samuel",
    },
  },
  {
    img: `/image/blogs/blog6.svg`,
    tag: "Startups",
    title: "moqueca",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "12 September 2022",
    author: {
      img: `/image/avatar2.jpg`,
      name: "Nora Hazel",
    },
  },
];

export function Posts() {
  return (
    <section className="grid min-h-screen place-items-center p-8">
      <Typography variant="h6" className="mb-2">
        Culinária
      </Typography>
      <Typography variant="h1" className="mb-2">
        Nossos Pratos
      </Typography>
      <Typography
        variant="lead"
        color="gray"
        className="max-w-3xl mb-36 text-center text-gray-500"
      >
        Venha conheçer pratos típicos da culinária baiana
      </Typography>
      <div className="container my-auto grid grid-cols-1 gap-x-8 gap-y-16 items-start lg:grid-cols-3">
        {POSTS.map(({ img, tag, title, desc, date, author }) => (
          <BlogPostCard
            key={title}
            img={img}
            tag={tag}
            title={title}
            desc={desc}
            date={date}
            author={{
              img: author.img,
              name: author.name,
            }}
          />
        ))}
      </div>
      <Button
        variant="text"
        size="lg"
        color="gray"
        className="flex items-center gap-2 mt-24"
      >
        <ArrowSmallDownIcon className="h-5 w-5 font-bold text-gray-900" />
        VER MAIS
      </Button>
    </section>
  );
}

export default Posts;
