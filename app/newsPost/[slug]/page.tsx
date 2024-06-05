"use client";
import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { fetchNewsPosts } from "@/utils/fetchContentful";
import Image from "next/image";

const fetchNewsPost = async (slug: string) => {
  try {
    const posts = await fetchNewsPosts();
    const post = posts.find((item: any) => item.fields.slug === slug);
    return post;
  } catch (error) {
    console.error("Error fetching news post:", error);
    throw new Error("Failed to fetch news post.");
  }
};

const NewsDetail = ({ params }: { params: { slug: string } }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await fetchNewsPost(params.slug);
        if (postData) {
          setPost(postData);
        } else {
          notFound();
        }
      } catch (err) {
        setError("Failed to fetch news post.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div>
      <div className="mb-4">
        {post.fields.avatar ? (
          <Image
            src={`https:${post.fields.avatar.fields.file.url}`}
            alt={post.fields.title}
            width={60}
            height={60}
            className="rounded-full"
            style={{ width: "auto", height: "auto" }}
          />
        ) : (
          <p>No Avatar available.</p>
        )}
      </div>
      <div className="mb-4">
        {post.fields.featuredImage ? (
          <Image
            src={`https:${post.fields.featuredImage.fields.file.url}`}
            alt={post.fields.title}
            width={1000}
            height={600}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        ) : (
          <p>No Featured Image available.</p>
        )}
      </div>
      <h1>{post.fields.title}</h1>
      <p>{post.fields.paragraph1}</p>
    </div>
  );
};

export default NewsDetail;
