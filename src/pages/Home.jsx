import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

const Home = () => {
  return (
    <div className="container mx-auto py-4">
      <DndContext>
        <SortableContext>
          <div className="">this is modee</div>
          <div className="">this is modee</div>
          <div className="">this is modee</div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default Home;
