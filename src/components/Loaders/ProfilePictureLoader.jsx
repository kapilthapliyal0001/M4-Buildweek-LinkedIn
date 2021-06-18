import React from "react";
import ContentLoader from "react-content-loader";
const ProfilePictureLoader = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={170}
      viewBox="0 0 400 170"
      backgroundColor="lightskyblue"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="135" cy="59" r="49" />
      <rect x="75" y="115" rx="0" ry="0" width="156" height="8" />
      <rect x="75" y="130" rx="0" ry="0" width="100" height="8" />
    </ContentLoader>
  );
};

export default ProfilePictureLoader;
