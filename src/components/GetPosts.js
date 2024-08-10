"use client";

import { getPost } from "@/app/services/postApi";
import Link from "next/link";
import { useState, useEffect } from "react";

const GetPosts = () => {
  const [postsData, setPostsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPost();
        setPostsData(data.slice(0, 9)); // Fetch only the first 9 posts
      } catch (error) {
        setError("Failed to fetch posts");
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading)
    return <div className="text-center py-10">Loading...</div>;
  if (error)
    return (
      <div className="text-center py-10 text-red-500">{error}</div>
    );

  return (
    <div className=" py-20 ">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Latest Posts
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsData.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                  {post.title}
                </h2>
                <p className="text-gray-700 mb-6">{post.body}</p>
                <Link href={`/posts/${post?.id}`}>
                  <p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                      Read More
                    </button>
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetPosts;
