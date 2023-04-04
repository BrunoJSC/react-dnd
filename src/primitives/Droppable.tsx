import { useDroppable } from "@dnd-kit/core";
import { ReactNode, useMemo } from "react";

interface IDroppableProps {
  id: string;
  children: ReactNode;
}

export function Droppable({ id, children }: IDroppableProps) {
  const { isOver, setNodeRef } = useDroppable({ id });

  const style = useMemo(
    () => ({
      opacity: isOver ? 0.5 : 1,
    }),
    [isOver]
  );
  
  return <div ref={setNodeRef}>{children}</div>;
}
