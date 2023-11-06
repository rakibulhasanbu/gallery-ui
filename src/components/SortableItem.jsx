import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ImageItem from "./ImageItem";

const SortableItem = (props) => {
  const {
    isDragging,
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    // eslint-disable-next-line react/prop-types
  } = useSortable({ id: props?.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || undefined,
  };

  return (
    <ImageItem
      ref={setNodeRef}
      style={style}
      withOpacity={isDragging}
      {...props}
      {...attributes}
      {...listeners}
    />
  );
};

export default SortableItem;
