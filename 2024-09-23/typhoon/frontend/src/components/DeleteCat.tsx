import { Button } from "@mui/material";
import React from "react";

type DeleteCatProps = {
  fetchCats: () => void;
  catID: string;
};

const DeleteCat = ({ fetchCats, catID }: DeleteCatProps) => {
  const deleteCat = async () => {
    try {
      const response = await fetch("http://localhost:8080/cats", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: catID }),
      });

      if (!response.ok) {
        console.warn("No success");
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    deleteCat();
    setTimeout(fetchCats, 100);
  };

  return <Button onClick={handleSubmit}>✖</Button>;
};

export default DeleteCat;
