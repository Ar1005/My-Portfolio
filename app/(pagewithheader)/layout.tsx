import NavBar from "@/components/Shared/NavBar";
import Header from "@/components/Shared/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <NavBar />
      {children}
    </>
  );
}
