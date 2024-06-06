"use client";
import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { fetchNewsPosts } from "@/utils/fetchContentful";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";

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

const getFormattedDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long" };
  const formattedDate = new Date(date).toLocaleDateString("en-US", options);
  return formattedDate.replace(/(\d)(st|nd|rd|th)/, "$1<sup>$2</sup>");
};

const NewsDetail = ({ params }: { params: { slug: string } }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await fetchNewsPost(params.slug);
        console.log("Post data:", postData);
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
    <div className="container mx-auto w-full max-w-screen-lg flex flex-col justify-center items-start text-start py-3">
      <div className="mb-4 flex flex-row items-center justify-start">
        {post.fields.avatar ? (
          <div className="rounded-full overflow-hidden mr-2 ml-1">
            <Image
              src={`https:${post.fields.avatar.fields.file.url}`}
              alt={post.fields.title}
              width={60}
              height={60}
            />
          </div>
        ) : (
          <p>No Avatar available.</p>
        )}
        <div className="flex flex-col">
          {post.fields.author && <p className="mb-1">{post.fields.author}</p>}
          {post.fields.date && (
            <p className="text-grey1">{getFormattedDate(post.fields.date)}</p>
          )}
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-4 p-2">{post.fields.bigTitle}</h1>
      <div className="mb-4">
        {post.fields.featuredImage ? (
          <Image
            src={`https:${post.fields.featuredImage.fields.file.url}`}
            alt={post.fields.title}
            width={1000}
            height={600}
            className="p-3"
          />
        ) : (
          <p>No Featured Image available.</p>
        )}
      </div>
      <p className="p-3 font-sans text-lg">{post.fields.paragraph1}</p>
      <Link href="/newsPost" passHref>
        <Button className="h-12 px-5 ml-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:from-secondary hover:to-primary transition duration-300">
          See all news
        </Button>
      </Link>
    </div>
  );
};

export default NewsDetail;
