import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";
import NavBar from "@/components/Shared/NavBar";
import Projects from "@/components/Shared/Projects";
import React from "react";

const page = () => {
  return (
    <main className="bg-neutral-100 min-h-screen w-full">
      <Header />
      <NavBar />
      <div>
        <div className="flex flex-col items-center mx-auto justify-center">
          <Projects />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default page;
