import Footer from "@/components/Shared/Footer";
import NavBar from "@/components/Shared/NavBar";
import Projects from "@/components/Shared/Projects";
import Topbar from "@/components/Shared/Topbar";
import React from "react";

const page = () => {
  return (
    <main className="bg-neutral-100 min-h-screen w-full">
      <NavBar />
      <div>
        <div className="flex items-center mx-auto justify-center">
          <Projects />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default page;
