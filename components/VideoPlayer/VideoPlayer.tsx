import React from "react";
import styles from "./VideoPlayer.module.css";

interface VideoPlayerProps {
  src: string;
  autoplay?: boolean;
  loop?: boolean;
  controls?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  autoplay = false,
  loop = false,
  controls = true,
}) => {
  return (
    <div className={styles.videoContainer}>
      <video
        className={styles.video}
        src={src}
        autoPlay={autoplay}
        loop={loop}
        controls={controls}
        muted={autoplay}
        playsInline
      >
        Ваш браузер не поддерживает видео тег.
      </video>
    </div>
  );
};

export default VideoPlayer;
