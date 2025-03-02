"use client";
// bu komponent müsahibə sualları səhifəsində kod parçalarını pre highlaterdən click ilə kopyalamaq üçün yazılıb

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaRegCopy, FaCheck } from "react-icons/fa6";

type CodeBlockProps = {
    language: string;
    code: string;
};

export default function CodeBlock({ language, code }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); 
        } catch (err) {
            console.error("Kopyalama xətası:", err);
        }
    };

    return (
        <div className="relative group  overflow-hidden">
            <button
                onClick={handleCopy}
                className="absolute top-3 right-2 bg-gray-800 text-white p-1 rounded hover:bg-gray-700 transition"
            >
                {copied ? <FaCheck className="text-green-400" /> : <FaRegCopy />}
            </button>
            <SyntaxHighlighter language={language} style={oneDark}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
}
