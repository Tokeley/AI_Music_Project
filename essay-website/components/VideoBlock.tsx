"use client";

import React from "react";
import dynamic from "next/dynamic";
import { VideoClip } from "../types/essay";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function VideoBlock({ clip }: { clip: VideoClip }) {
  return (
    <div className="my-8">
      {clip.label && (
        <div className="audio-label">{clip.label}</div>
      )}
      <div className="aspect-video rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
        <ReactPlayer url={clip.url} controls width="100%" height="100%" />
      </div>
      {clip.description && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{clip.description}</p>
      )}
    </div>
  );
}


