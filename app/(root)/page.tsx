import Topbar from "@/components/Shared/Topbar";
import Footer from "@/components/Shared/Footer";
import Content from "@/components/Shared/Content";
import NavBar from "@/components/Shared/NavBar";

export default function Home() {
  return (
    <main className="bg-neutral-100 min-h-screen w-full">
      <NavBar />
      <div>
        <Content/>
        <Footer />
      </div>
    </main>
  );
}
