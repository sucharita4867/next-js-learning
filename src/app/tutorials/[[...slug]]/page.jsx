import Title from "@/components/Title";
import React from "react";

const TutorialPage = async ({ params }) => {
  const { slug } = await params;
  const [technology, topic, page_no, subjet] = slug || [];
  //   const result = await slug;

  console.log(technology);
  return (
    <div>
      <Title>{technology} tutorials</Title>
      <h2>{topic}</h2>
      <div className="flex justify-between">
        <h3 className="font-bold text-blue-900">{subjet}</h3>
        <p>page no: {page_no}</p>
      </div>
      {/* <Title>this is tutorial page</Title> */}
    </div>
  );
};

export default TutorialPage;
