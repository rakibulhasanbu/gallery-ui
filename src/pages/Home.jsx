import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { useCallback, useState } from "react";
import SortableItem from "../components/SortableItem";
import ImageItem from "../components/ImageItem";

const Home = () => {
  const images = [
    "https://res.cloudinary.com/dsb7txoad/image/upload/v1699105076/website%20assets/gellry-ui/gallery_klw4qh.png",
    "https://res.cloudinary.com/dsb7txoad/image/upload/v1699282427/website%20assets/gellry-ui/image_ivhrn4.png",
    "https://res.cloudinary.com/dsb7txoad/image/upload/v1699105076/website%20assets/gellry-ui/gallery_klw4qh.png",
    "https://res.cloudinary.com/dsb7txoad/image/upload/v1699105076/website%20assets/gellry-ui/gallery_klw4qh.png",
    "https://res.cloudinary.com/dsb7txoad/image/upload/v1699105076/website%20assets/gellry-ui/gallery_klw4qh.png",
  ];
  const [items, setItems] = useState(images);
  const [activeItem, setActiveItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState([]);

  const handleDragStart = useCallback((event) => {
    setActiveItem(event.active.id);
  }, []);

  const handleDragEnd = useCallback((event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active?.id);
        const newIndex = items.indexOf(over?.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveItem(null);
  }, []);

  const handleDragCancel = useCallback(() => {
    setActiveItem(null);
  }, []);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  return (
    <div className="container mx-auto py-4">
      <DndContext
        collisionDetection={closestCenter}
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
          {items?.length !== 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-max mx-auto">
              {items.map((id, index) => (
                <SortableItem
                  key={index}
                  deletedImg={deleteItem}
                  setDeletedImg={setDeleteItem}
                  index={index}
                  id={id}
                />
              ))}
              <div className="w-[144px] flex flex-col gap-2 rounded-[10px] cursor-pointer border-2 border-dashed border-slate-300 justify-center items-center h-[144px] bg-slate-100">
                <img
                  className="w-8 h-8"
                  src={
                    "https://res.cloudinary.com/dsb7txoad/image/upload/v1699282427/website%20assets/gellry-ui/image_ivhrn4.png"
                  }
                  alt=""
                />
                <h4>Add Images</h4>
              </div>
            </div>
          ) : (
            <div>
              {" "}
              <h2 className="text-5xl font-bold uppercase my-40 text-center">
                Reload the page
              </h2>
            </div>
          )}
        </SortableContext>

        <DragOverlay adjustScale style={{ transformOrigin: "0 0 " }}>
          {activeItem ? <ImageItem id={activeItem} isDragging /> : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default Home;
