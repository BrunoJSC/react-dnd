import { useDraggable } from "@dnd-kit/core";
import { ReactNode, useMemo } from "react";

interface IDraggableProps {
  id: string;
  children: ReactNode;
}

export function Draggable({id, children}: IDraggableProps) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id,
  });
  const style = useMemo(
    () => ({
      transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    }),
    [transform]
  );
  
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
}