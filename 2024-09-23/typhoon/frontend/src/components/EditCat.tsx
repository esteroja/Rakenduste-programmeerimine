import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

type EditCatProps = {
  fetchCats: () => void;
  catID: string;
};

const EditCat = ({ fetchCats, catID }: EditCatProps) => {
  const [name, setName] = useState("");

  const editCat = async () => {
    try {
      const response = await fetch("http://localhost:8080/cats", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: catID, name: name }),
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

    editCat();
    setTimeout(fetchCats, 100);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        onChange={(event) => setName(event.target.value)}
        sx={{ maxWidth: 100 }}
      />
      <Button type="submit" >Change</Button>
    </form>
  );
};

export default EditCat;
