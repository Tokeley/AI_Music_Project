"use client";

import React from "react";
import dynamic from "next/dynamic";
import { AudioClip } from "../types/essay";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function AudioBlock({ clip }: { clip: AudioClip }) {
  return (
    <div className="audio-container">
      <div className="audio-label">{clip.label}</div>
      <ReactPlayer url={clip.src} controls width="100%" height="54px" config={{ file: { forceAudio: true } }} />
      {clip.description && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{clip.description}</p>
      )}
    </div>
  );
}


