"use client";
import React, { useEffect, useState } from "react";
import { fetchNewsPosts } from "@/utils/fetchContentful";
import Link from "next/link";
import { Image } from "@nextui-org/image";
import styles from "./loading.module.css"

interface NewsPost {
  id: string;
  title: string;
  bigTitle: string;
  avatar: string;
  author: string;
  paragraph1: string;
  featuredImage?: string;
  thumbnail?: string;
  readingTime?: number;
  slug?: string;
  date?: string;
}

const OurNews: React.FC = () => {
  const [newsPosts, setNewsPosts] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
            // 3 saniyelik gecikme eklemek için setTimeout kullanın
      await new Promise(resolve => setTimeout(resolve, 1000));
      
        const posts = await fetchNewsPosts();
        const formattedPosts = posts.map((post: any) => ({
          id: post.sys.id,
          title: post.fields.title,
          bigTitle: post.fields.bigTitle,
          avatar: post.fields.avatar?.fields?.file?.url
            ? `https:${post.fields.avatar.fields.file.url}`
            : "https://via.placeholder.com/60", // default placeholder or empty string
          author: post.fields.author,
          paragraph1: post.fields.paragraph1,
          thumbnail: post.fields.thumbnail?.fields?.file?.url
            ? `https:${post.fields.thumbnail.fields.file.url}`
            : undefined,
          featuredImage: post.fields.featuredImage?.fields?.file?.url
            ? `https:${post.fields.featuredImage.fields.file.url}`
            : undefined,
          readingTime: post.fields.readingTime,
          slug: post.fields.slug,
          date: post.fields.date,
        }));
        setNewsPosts(formattedPosts);
      } catch (err) {
        setError("Failed to fetch news posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  if (loading) {
    return <div className={styles.Ring}>Loading
      <span className={styles.Span}></span>
    </div>
  ;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="py-4 md:py-8">
      <h1 className="text-4xl text-center mb-1">Our News</h1>
      <div className="container mx-auto px-4 py-4 md:py-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {newsPosts.map((post) => (
            <div key={post.id} className="shadow-md border-2 p-3 rounded-lg">
              <Link href={`/newsPost/${post.slug ?? "nodata"}`}>
                {post.thumbnail ? (
                  <Image
                    isBlurred
                    isZoomed
                    src={post.thumbnail}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-t-lg min-h-[304px] md:min-h-[340px] md:max-h-[340px] object-cover"
                  />
                ) : (
                  <p className="p-4">No Image available.</p>
                )}
              </Link>
              <div className="mt-3 px-2 py-2">
                <h2 className="text-xl">{post.title}</h2>
                <p className="text-base text-grey1 my-2 max-w-[90%]">{`${(post.paragraph1 ?? "No content available.").split(" ").slice(0, 18).join(" ")} ...`}</p>
                <Link
                  href={`/newsPost/${post.slug ?? "nodata"}`}
                  className="hover:text-grey1 underline"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurNews;
