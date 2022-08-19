import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Meta-v2-clone</title>
      </Head>
      <Header />
      <div className="flex lg:px-20 xl:px-64">
        <SideBar />
        <Feed />
      </div>
    </div>
  );
}
