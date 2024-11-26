'use client'

import React, { useState } from "react";
import DialogBox from "./components/DialogBox";



const Home: React.FC = () => {
  const [openDialogs, setOpenDialogs] = useState<number[]>([]); // Track opened dialogs by index

  // handle Open Dialog
  const handleOpenDialog = (index: number) => {
    if (!openDialogs.includes(index)) {
      setOpenDialogs((prev) => [...prev, index]);
    }
  };
  
  // handle Close Dialog
  const handleCloseDialog = (index: number) => {
    setOpenDialogs((prev) => prev.filter((id) => id !== index));
  };

  const isAnyDialogOpen = openDialogs.length > 0;
  // console.log('openDialogs = ', openDialogs)


  return (
    <div className={`relative transition-all duration-300 ${isAnyDialogOpen ? "blur-sm" : ""}`}>

      <button
        className="absolute top-4 left-4 bg-green-600 text-white font-bold px-4 py-2 rounded"
        onClick={() => handleOpenDialog(0)} // Open the first dialog
      >
        Click Here
      </button>

      {/* First dialog */}
      <div>
        {openDialogs.includes(0) && (
          <DialogBox
            open={true}
            onOpenChange={(open) => (open ? handleOpenDialog(0) : handleCloseDialog(0))}
            title="Hello World 1"
          >
            <button
              className="bg-green-500 w-fit text-white font-bold px-4 py-2 rounded mt-4"
              onClick={() => handleOpenDialog(1)} // Open the next dialog
            >
              +
            </button>

            <button
              className="bg-red-600 w-fit text-white font-bold px-4 py-2 rounded mt-4"
              onClick={() => handleCloseDialog(0)}
            >
              Close
            </button>
          </DialogBox>
        )}


        {/* Render additional dialogs dynamically */}
        {openDialogs
          .filter((index) => index > 0) // Skip the first dialog (index 0)
          .map((index) => (
            <DialogBox
              key={index}
              open={true}
              onOpenChange={(open) => (open ? handleOpenDialog(index) : handleCloseDialog(index))}
              title={`Hello World ${index + 1}`}
            >
              <button
                className="bg-green-500 w-fit text-white font-bold px-4 py-2 rounded mt-4"
                onClick={() => handleOpenDialog(index + 1)} // Open next dialog
              >
                +
              </button>
              <button
                className="bg-red-600 w-fit text-white font-bold px-4 py-2 rounded mt-4"
                onClick={() => handleCloseDialog(index)}
              >
                Close
              </button>
            </DialogBox>
          ))}
      </div>
    </div>
  );
};

export default Home;
