import React, { ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, } from "./ui/dialog";

interface DialogBoxProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children?: ReactNode;
}

const DialogBox: React.FC<DialogBoxProps> = ({ open, onOpenChange, title, children }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-blue-700">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
