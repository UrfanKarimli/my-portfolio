"use client";

import { useEffect } from "react";

export default function Particle() {
    useEffect(() => {
        if (typeof window === "undefined") return;
        const watermark = document.createElement("div");
        const obfuscatedText = atob("YnkgVXJmYW4gS2FyaW1saQ==");
        watermark.innerText = obfuscatedText;
        watermark.style.position = "fixed";
        watermark.style.top = "1px";
        watermark.style.right = "32px";
        watermark.style.opacity = "0.2";
        watermark.style.pointerEvents = "none";
        watermark.style.fontSize = "12px";
        watermark.style.color = "white";
        watermark.style.zIndex = "9999";
        document.body.appendChild(watermark);
        return () => {
            document.body.removeChild(watermark);
        };
    }, []);

    return null;
}
