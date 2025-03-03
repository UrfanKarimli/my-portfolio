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
        <div style={{ textShadow: 'none' }}  className="relative group  overflow-hidden px-1 ur:px-4">
            <span className=" absolute top-2 right-12 ur:right-16 text-xs ur:text-base text-myWhite p-1 ">{language}</span>
            <button
                onClick={handleCopy}
                className="absolute top-3 right-3 ur:right-6 bg-gray-800 text-white p-1 rounded hover:bg-gray-700 transition"
            >
                {copied ? <FaCheck className="text-green-400" /> : <FaRegCopy />}
            </button>
            <SyntaxHighlighter  className=" text-xs ur:text-base" language={language} style={oneDark}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
}
