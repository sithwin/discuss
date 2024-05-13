import { Divider } from "@nextui-org/react";
import TopicCreateForm from "@/components/topic/topic-create-form";
import TopicList from "@/components/topic/topic-list";
export default async function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
      </div>
      <div className="border shadow py-3 px-2">
        <TopicCreateForm />
        <Divider className="my-2" />
        <h2 className="text-lg">Topics</h2>
        <TopicList />
      </div>
    </div>
  );
}
