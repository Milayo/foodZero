import Head from "next/head";
import HeroSection from "../src/components/herosection/herosection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FoodZero</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection/>
      </main>
    </div>
  );
}
