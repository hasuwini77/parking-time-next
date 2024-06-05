"use client";
import React, { useEffect, useState } from "react";
import { fetchNewsPosts } from "@/utils/fetchContentful";
import Link from "next/link";
import Image from "next/image";

interface NewsPost {
  id: string;
  title: string;
  body: string;
  thumbnail?: string;
  readingTime?: number;
  slug?: string;
}

const OurNews: React.FC = () => {
  const [newsPosts, setNewsPosts] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await fetchNewsPosts();
        // Assuming fetchNewsPosts returns data in the expected structure
        const formattedPosts = posts.map((post: any) => ({
          id: post.sys.id,
          title: post.fields.title,
          body: post.fields.body,
          thumbnail: post.fields.thumbnail?.fields?.file?.url
            ? `https:${post.fields.thumbnail.fields.file.url}`
            : undefined,
          readingTime: post.fields.readingTime,
          slug: post.fields.slug,
        }));
        setNewsPosts(formattedPosts);
        console.log(formattedPosts);
      } catch (err) {
        setError("Failed to fetch news posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="py-28">
      <h1 className="text-4xl text-center mb-6">Our News</h1>
      <div className="container w-full min-w-full md:py-38 px-4 md:px-20 flex flex-col md:flex-row gap-3 justify-center items-center text-start">
        {newsPosts.map((post) => (
          <div
            key={post.id}
            className="shadow-md border-2 p-3 rounded-lg w-full md:w-1/3"
          >
            {post.thumbnail ? (
              <Image
                src={post.thumbnail}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-auto rounded-t-lg min-h-[304px] md:min-h-[340px] md:max-h-[340px] object-cover"
              />
            ) : (
              <p className="p-4">No Image available.</p>
            )}
            <div className="mt-3 px-2 py-2">
              <h2 className="text-xl">{post.title}</h2>
              <p className="text-base my-2">{`This is ${post.readingTime ?? "No content available."} min Read`}</p>
              <p>{post.body}</p>
              <Link href={`/newsPost/${post.slug ?? "nodata"}`}>Read more</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurNews;
