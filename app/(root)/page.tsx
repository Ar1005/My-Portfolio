import Footer from "@/components/Shared/Footer";
import Content from "@/components/Shared/Content";
import NavBar from "@/components/Shared/NavBar";
import Header from "@/components/Shared/Header";

export default function Home() {
  return (
    <main className="bg-neutral-100 min-h-screen w-full">
      <Header />
      <NavBar />
      <div>
        <Content/>
        <Footer />
      </div>
    </main>
  );
}
