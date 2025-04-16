"use client";
import React, { useState } from "react";

export default function ContractForm() {
  const [contractTitle, setContractTitle] = useState("");
  const [contractContent, setContractContent] = useState("");
  const [response, setResponse] = useState("");

  // Handler for generating contract clauses using OpenAI API.
  const handleGenerate = async () => {
    const res = await fetch("/api/ai/generate-clauses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: contractTitle, content: contractContent }),
    });
    const data = await res.json();
    setResponse(data.generated || "No response");
  };

  // Handler for compliance check using OpenAI API.
  const handleCompliance = async () => {
    const res = await fetch("/api/ai/compliance-check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: contractContent || response }),
    });
    const data = await res.json();
    setResponse(data.feedback || "No feedback");
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 border rounded shadow">
      <input
        type="text"
        placeholder="Contract Title"
        value={contractTitle}
        onChange={(e) => setContractTitle(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <textarea
        placeholder="Enter initial contract content..."
        value={contractContent}
        onChange={(e) => setContractContent(e.target.value)}
        className="w-full p-2 h-32 mb-4 border rounded"
      />
      <div className="flex justify-between">
        <button
          onClick={handleGenerate}
          className="px-4 py-2 bg-purple-500 text-white rounded"
        >
          Generate Contract
        </button>
        <button
          onClick={handleCompliance}
          className="px-4 py-2 bg-purple-300 text-white rounded"
        >
          Compliance Check
        </button>
      </div>
      {response && (
        <div className="mt-4 p-2 border rounded bg-gray-50">{response}</div>
      )}
    </div>
  );
}
