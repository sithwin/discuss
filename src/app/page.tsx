import TopicCreateForm from "@/components/topic-create-form";

export default async function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
      </div>
      <div>
        <TopicCreateForm />
      </div>
    </div>
  );
}
