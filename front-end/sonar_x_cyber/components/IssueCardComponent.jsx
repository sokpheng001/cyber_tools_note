'use client'
import { useRouter } from "next/navigation";
export default function IssueCardComponent({ message, issueKey, ruleKey , type, tags}) {
  const router = useRouter();
  return (
    <div className="border p-4 flex flex-col gap-2">
      <div className="flex gap-8">
        {" "}
        <h1
          className="text-blue-500 underline cursor-pointer"
          onClick={() => {
            router.push(`issue/${issueKey}/${ruleKey}`);
          }}
        >
          {message}
        </h1>
        {tags.map((tag) => (
          <span className="bg-yellow-200 text-black p-2 rounded-md">{tag}</span>
        ))}
      </div>
      <p className="text-gray-400">{type}</p>
    </div>
  );
}
