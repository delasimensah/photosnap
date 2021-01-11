import Head from "next/head";

//components
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Photosnap"}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
