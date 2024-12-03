"use client";

import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const fetchData = async (issueKey, ruleKey) => {
  const response = await fetch(
    `http://localhost:8081/api/v1/issues/search?issueKey=${issueKey}&ruleKey=${ruleKey}`
  );
  return response.json();
};

const decodeHtmlEntities = (text) => {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
};

const CodeSnippet = ({ code, isNoncompliant }) => {
  const backgroundColor = isNoncompliant ? "#fee2e2" : "#dcfce7";
  const borderColor = isNoncompliant ? "#fecaca" : "#bbf7d0";

  return (
    <div
      className="my-2 rounded-md overflow-hidden"
      style={{ backgroundColor }}
    >
      <div
        className="px-4 py-2 text-sm font-medium"
        style={{ borderLeft: `4px solid ${borderColor}` }}
      >
        <SyntaxHighlighter
          language="java"
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: 0,
            background: "transparent",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

const CodeIssueDisplay = ({ apiResponse }) => {
  const [issueData, setIssueData] = useState(null);

  useEffect(() => {
    if (apiResponse) {
      setIssueData(apiResponse.data);
    }
  }, [apiResponse]);

  if (!issueData) return <div>Loading...</div>;

  const issue = issueData.issue.issues[0];
  const snippetError = Object.values(issueData.snippetError)[0];
  const sources = snippetError?.sources;

  const codeLines = sources.flatMap((source, index) => {
    const lines = [
      {
        type: "code",
        content: decodeHtmlEntities(source.code.replace(/<\/?span[^>]*>/g, "")),
        lineNumber: source.line,
      },
    ];

    if (source.line === issue.line) {
      lines.push({
        type: "message",
        content: issue.message,
        lineNumber: null,
      });
    }

    return lines;
  });

  const renderStyledContent = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");

    const styledNodes = Array.from(doc.body.childNodes).map((node, index) => {
      if (node.nodeName === "PRE") {
        const code = node.textContent.trim();
        const isNoncompliant = code.includes("Noncompliant");
        return (
          <CodeSnippet
            key={index}
            code={code}
            isNoncompliant={isNoncompliant}
          />
        );
      }
      return (
        <div key={index} dangerouslySetInnerHTML={{ __html: node.outerHTML }} />
      );
    });

    return styledNodes;
  };

  return (
    <div className="max-w-4xl mx-auto rounded-md overflow-hidden gap-2 flex-col flex">
      <div className="p-4 border bg-white">
        <h2 className="text-xl font-semibold mb-4">Code Issue</h2>
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <div className="relative font-mono text-sm overflow-x-auto">
            <pre className="max-h-96 overflow-y-auto">
              {codeLines.map((line, index) => (
                <div
                  key={index}
                  className={`flex ${
                    line.type === "code" && line.lineNumber === issue.line
                      ? "bg-red-900 bg-opacity-30"
                      : ""
                  }`}
                >
                  <div className="w-12 text-right pr-4 select-none text-gray-500 flex-shrink-0">
                    {line.lineNumber}
                  </div>
                  <div className="w-6 flex-shrink-0 text-red-400">
                    {line.type === "code" && line.lineNumber === issue.line
                      ? "->"
                      : ""}
                  </div>
                  <div className="flex-grow">
                    {line.type === "code" ? (
                      <SyntaxHighlighter
                        language="java"
                        style={vscDarkPlus}
                        customStyle={{
                          margin: 0,
                          padding: 0,
                          background: "transparent",
                        }}
                      >
                        {line.content}
                      </SyntaxHighlighter>
                    ) : (
                      <div className="bg-red-900 bg-opacity-30 text-red-300 p-2 border-l-4 border-red-500 my-2">
                        {line.content}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </pre>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 border ">
        <div className=" text-gray-600 text-md">
          {renderStyledContent(issueData.rule.rule.htmlDesc)}
        </div>
      </div>
    </div>
  );
};

export default function CodeGeneratorComponent({ issueKey, ruleKey }) {
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData(issueKey, ruleKey);
        setApiResponse(data);
      } catch (err) {
        setError(
          "Failed to fetch data. Please check if the API is running and accessible."
        );
        console.error("Error fetching data:", err);
      }
    };
    getData();
  }, []);

  if (error) return <div className="text-center text-red-500 p-4">{error}</div>;
  if (!apiResponse) return <div className="text-center p-4">Loading...</div>;

  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4">
      <CodeIssueDisplay apiResponse={apiResponse} />
    </main>
  );
}
