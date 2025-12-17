import Title from "@/components/Title";
import React from "react";

const StoryDetailsPage = async ({ params }) => {
  const result = await params;
  console.log(result);
  return (
    <div>
      <Title>StoryDetailsPage</Title>
    </div>
  );
};

export default StoryDetailsPage;
