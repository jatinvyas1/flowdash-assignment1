import React, { useState } from "react";
import styled from "styled-components";
import ColorPicker from "./ColorPicker";
import { Swatch } from "./StaticComponents";
function ContentElement({ title }) {
  const [color, setColor] = useState("#bfbfbf");
  const [text, setText] = useState("");
  const [fontStyle, setFontStyle] = useState("normal");
  const [fontSize, setFontSize] = useState(4);
  const [fontType, setFontType] = useState("DM Sans");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const sizes = [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24];
  console.log(fontStyle);
  const styles = {
    input: {
      height: "2.5rem",
      width: "20rem",
      boxSizing: "border-box",
      borderRadius: "4px",
      border: "2px solid #e5e5e5",
      paddingLeft: "10px",
    },
    select: {
      lineHeight: "16px",
      color: "#578FFF",
      marginleft: "2rem",
    },
    seperator: {
      width: "80%",
      color: "#E5E5E5",
    },
  };

  const onColorChange = (color) => {
    setColor(color);
    console.log(color);
  };
  const handleClose = () => {
    setShowColorPicker(!showColorPicker);
  };
  return (
    <div
      style={{
        width: "400px",
        margin: "0.45rem 0",
        height: "180px",
        fontWeight: "500",
        fontSize: "12px",
        lineHeight: "16px",
        color: "#1C1F28",
      }}
    >
      {title}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <input
          style={styles.input}
          value={text}
          onChange={(e) => {
            setShowColorPicker(false);
            setText(e.target.value);
          }}
        />
        <Swatch
          onClick={() => setShowColorPicker(!showColorPicker)}
          bgColor={color?.hex || color}
        />
        {showColorPicker && (
          <ColorPicker
            color={color}
            onChange={onColorChange}
            handleClose={handleClose}
          />
        )}
      </div>
      <div
        style={{
          textAlign: "left",
          color: "#8C8C8C",
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <label style={{ marginRight: "1rem" }} for="font">
            Font:{" "}
          </label>

          <select
            style={styles.select}
            name="font"
            id="font"
            onChange={(e) => {
              setShowColorPicker(false);
              setFontType(e.target.value);
            }}
          >
            <option selected value="DM Sans">
              DM Sans
            </option>
            <option value="Robotica">Robotica</option>
          </select>
        </div>
        <div>
          <label style={{ marginRight: "1rem" }} for="fontStyle">
            Font Style:{" "}
          </label>

          <select
            style={styles.select}
            name="fontStyle"
            id="fontStyle"
            onChange={(e) => {
              setShowColorPicker(false);
              setFontStyle(e.target.value);
            }}
          >
            <option selected value="normal">
              Normal
            </option>
            <option value="bold">Bold</option>
            <option value="italics">Italics</option>
            <option value="underline">Underline</option>
          </select>
        </div>
      </div>
      <div
        style={{
          color: "#8C8C8C",
          marginTop: "20px",
          display: "flex",
          marginBottom: "20px",
        }}
      >
        <label style={{ marginRight: "1rem" }} for="fontSize">
          Font Size:{" "}
        </label>

        <select style={styles.select} name="fontSize" id="fontSize">
          {sizes.map((size) => (
            <option selected={{ fontSize } == size ? true : false} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <hr style={styles.seperator} />
    </div>
  );
}

export default ContentElement;
