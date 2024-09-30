import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

type SubmitCatProps = {
  fetchCats: () => void;
};

const SubmitCat = ({ fetchCats }: SubmitCatProps) => {
  const [name, setName] = useState("");

  const submitCat = async () => {
    try {
      const response = await fetch("http://localhost:8080/cats", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name }),
      });

      if (response.ok) {
        console.log("Success", response);
        // Snackbar success
      } else {
        console.warn("No success");
        // Snackbar
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await submitCat();
    fetchCats();
    // setTimeout(fetchCats, 100);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginTop: 5,
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack gap={2}>
          <TextField
            label="Cat name"
            onChange={(event) => setName(event.target.value)}
          />
          <Button type="submit" variant="contained">
            Add
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default SubmitCat;
