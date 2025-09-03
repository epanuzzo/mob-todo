export interface ToDoItemProps {
  text: string;
  done?: boolean;
  onDone?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}
