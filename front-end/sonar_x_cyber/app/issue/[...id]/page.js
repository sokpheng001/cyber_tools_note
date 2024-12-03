import CodeGeneratorComponent from "@/components/CodeGeneratorComponent";

export default function Issue({ params }) {
  return (
    <main className="min-h-screen flex justify-center items-center  p-2">
      <CodeGeneratorComponent
        issueKey={params?.id[0]}
        ruleKey={params?.id[1]}
      />
    </main>
  );
}
