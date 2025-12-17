import Title from "@/components/Title";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <Title>welcome to about pages</Title>

      <nav className="space-x-5">
        <Link href={"/about/contacts"}>Contacts</Link>
        <Link href={"/about/teams"}>Teams</Link>
      </nav>
    </div>
  );
};

export default About;
