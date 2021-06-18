import { useEffect, useState } from "react";
import MainFeed from "./MainFeed";
// import PostFeed from "../PostFeed/PostFeed";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Button } from "@material-ui/core";
import MyLoader from "../../Loaders/MyLoader";

const GetPosts = (props) => {
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

      setPosts(posts.slice(1).slice(-20));
      console.log("Posts", posts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("hello");

    getData();
  }, []);

  // usage

  return (
    <>
      <div id="hr_divider">
        <hr class="horizontal" />
        <span className="text-muted align-baseline">Sort by:</span>
        <DropdownButton className="btn-sm">
          <Dropdown.Item eventKey="1">Top</Dropdown.Item>
          <Dropdown.Item eventKey="2">Recent</Dropdown.Item>
        </DropdownButton>
      </div>
      {props.isLoading === true ? (
        <MyLoader />
      ) : (
        posts
          .map((post) => {
            return <MainFeed key={post._id} post={post} />;
          })
          .reverse()
      )}
    </>
  );
};

export default GetPosts;
