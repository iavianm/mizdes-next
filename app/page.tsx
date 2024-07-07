import styles from "./page.module.css";
import Intro from "@/components/Intro/Intro";
import introContent from "../content/introContent.json";
import Features from "@/components/Features/Features";
import Villas from "@/components/Villas/Villas";
import TextBlock from "@/components/TextBlock/TextBlock";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";

const Home = () => {
  return (
    <main className={styles.main}>
      <Intro content={introContent.homePage} />
      <VideoPlayer
        src="/video/mizdes_video_1.mp4"
        autoplay={true}
        loop={true}
        controls={true}
      />
      <Features />
      <Villas />
      <TextBlock />
    </main>
  );
};

export default Home;
