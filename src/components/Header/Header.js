import { createTheme, MenuItem, TextField, ThemeProvider } from "@mui/material";
import React from "react";
import "./Header.css";
import categories from "../../data/category";

const Header = ({ setCategory, category, word, setWord }) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const handleChanage = (language) => {
    setCategory(language);
    setWord("");
  };

  return (
    <div className="header">
      <span className="title">Dex   </span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="Standard"
            variant="standard"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            select
            label="Language"
            value={category}
            onChange={(e) => handleChanage(e.target.value)}
            className="select"
            disabled={true}
            helperText="Selection Discontinued"
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
