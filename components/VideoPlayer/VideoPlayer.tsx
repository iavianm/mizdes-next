"use client";
import React, { useEffect } from "react";
import styles from "./VideoPlayer.module.css";

interface VideoPlayerProps {
  src: string;
  autoplay?: boolean;
  loop?: boolean;
  controls?: boolean;
  muted?: boolean;
  poster?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  autoplay = true,
  loop = true,
  controls = true,
  muted = true,
  poster,
}) => {
  const videoId = "uniqueVideoId";

  const videoHtml = `
    <video
      poster="${poster}"
      id="${videoId}"
      class="${styles.video}" 
      src="${src}"
      ${autoplay ? "autoplay" : ""}
      ${loop ? "loop" : ""}
      ${controls ? "controls" : ""}
      ${muted ? "muted" : ""}
      playsinline
    >
      Ваш браузер не поддерживает видео тег.
    </video>
  `;

  useEffect(() => {
    const videoElement = document.getElementById(videoId) as HTMLVideoElement;
    if (videoElement) {
      videoElement
        .play()
        .catch((err) => console.error("Error playing the video:", err));
    }
  }, []);

  return (
    <div
      className={styles.videoContainer}
      dangerouslySetInnerHTML={{ __html: videoHtml }}
    ></div>
  );
};

export default VideoPlayer;
