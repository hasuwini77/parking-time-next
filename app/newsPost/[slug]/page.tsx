"use client";
import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { fetchNewsPosts } from "@/utils/fetchContentful";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../components/OurNews/loading.module.css";
import { useLanguage } from "@/context/LanguageContext";
import ButtonEditable from "@/components/ButtonEditable";

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
  const { language } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await fetchNewsPost(params.slug);
        // console.log("Post data:", postData);
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
    return (
      <div className={styles.Ring}>
        Loading
        <span className={styles.Span}></span>
      </div>
    );
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
          <p>
            {language === "english"
              ? "No Avatar available."
              : "Ingen Avatar tillgänglig."}
          </p>
        )}
        <div className="flex flex-col">
          {post.fields.author && <p className="mb-1">{post.fields.author}</p>}
          {post.fields.date && (
            <p className="text-grey1">{getFormattedDate(post.fields.date)}</p>
          )}
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-4 p-2">
        {language === "english" ? post.fields.bigTitle : post.fields.bigTitleSe}
      </h1>
      <div className="mb-4 rounded-md">
        {post.fields.featuredImage ? (
          <Image
            src={`https:${post.fields.featuredImage.fields.file.url}`}
            alt={post.fields.title}
            width={1000}
            height={600}
            className="p-3 rounded-md"
            priority
          />
        ) : (
          <p>
            {language === "english"
              ? "No Featured Image available."
              : "Ingen utvald bild tillgänglig."}{" "}
          </p>
        )}
      </div>
      <p className="p-3 font-sans text-lg">
        {language === "english"
          ? post.fields.paragraph1
          : post.fields.paragraph1Se}
      </p>
      <ButtonEditable
        linkHref="/newsPost"
        SWtext="Se alla nyheter"
        ENtext="See all news"
        textColor="text-white"
        bgColor="bg-black"
        hoverEffect="hover:bg-white hover:text-black focus:outline-none focus:bg-white focus:text-black transition duration-300 ease-in-out shadow-md"
      />
    </div>
  );
};

export default NewsDetail;
