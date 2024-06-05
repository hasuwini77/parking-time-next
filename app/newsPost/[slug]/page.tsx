"use client";
import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { fetchNewsPosts } from "@/utils/fetchContentful";

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
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await fetchNewsPost(params.slug);
        if (postData) {
          setPost(postData.fields);
        } else {
          notFound(); // Next.js built-in 404
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

  return (
    <div>
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          {/* Other fields can be added here */}
        </>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
};

export default NewsDetail;
