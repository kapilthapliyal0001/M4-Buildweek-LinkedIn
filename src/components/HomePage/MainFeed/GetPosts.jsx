import { useEffect, useState } from "react";
import MainFeed from "./MainFeed";
import PostFeed from "../PostFeed/PostFeed";
const GetPosts = () => {
  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3M2NmNzI5MTkzMDAwMTU2MGFiYTQiLCJpYXQiOjE2MjM2NzAwMDcsImV4cCI6MTYyNDg3OTYwN30.USHzFfeVTSKHLcrfBBYHNfhmiYlVmRCl_sts1-YCsz0";
  const [posts, setPosts] = useState([]);
  const getData = async () => {
    console.log("HI THERE");
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "GET",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);

      let posts = await response.json();
      console.log(posts);

      setPosts(posts.slice(0, 10));
      console.log("Posts", posts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("hello");

    getData();
  }, []);

  return (
    <>
      {posts.map((post) => {
        return <MainFeed key={post._id} post={post} />;
      })}
      )
    </>
  );
};

export default GetPosts;
