import React from "react";
import "./blog.scss";
import { blogPosts } from "@/data";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="blog">
      <div className="blogHeader">
        <h2>آخرین خبرها</h2>
        <p>
          مطالب این بخش از سایر خبرگزاری ها جمع آوری شده است و صرفاً جهت افزایش
          آگاهی شما قرار گرفته است و لزوماً به معنای تایید آن توسط اکسچنج کوین
          نیست.
        </p>
      </div>
      <div className="post-wrapper">
        {blogPosts.map((item) => (
          <div key={item.id} className="post-box">
            <div className="post-image-container">
              <Image src={item.image} alt={item.title} className="post-image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
