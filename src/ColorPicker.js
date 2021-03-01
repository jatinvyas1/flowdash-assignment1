import React from "react";
import { CustomPicker } from "react-color";
import { Hue, Saturation } from "react-color/lib/components/common";
import {
  CloseButton,
  ColorCard,
  ColorCardHeader,
  ColorCardheading,
} from "./StaticComponents";
export const MyPicker = ({ hex, hsl, hsv, onChange, handleClose }) => {
  const styles = {
    hue: {
      height: 10,
      position: "relative",
      width: "100%",
      marginTop: 10,
      borderRadius: "20px",
    },
    saturation: {
      width: "100%",
      height: 100,
      position: "relative",
      marginTop: 10,
    },
    input: {
      height: 34,
      paddingLeft: 10,
      width: "70%",
      border: "1px solid #E5E5E5",
      borderRadius: "4px",
    },
    swatch: {
      width: 54,
      height: 38,
      background: hex,
    },
  };
  return (
    <ColorCard>
      <ColorCardHeader>
        <ColorCardheading>Color</ColorCardheading>
        <CloseButton onClick={handleClose}>X</CloseButton>
      </ColorCardHeader>
      <div style={styles.saturation}>
        <Saturation hsl={hsl} hsv={hsv} onChange={onChange} />
      </div>
      <div style={styles.hue}>
        <Hue hsl={hsl} onChange={onChange} />
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        Hex:{"  "}
        <input style={styles.input} readonly value={hex} />
      </div>
    </ColorCard>
  );
};

export default CustomPicker(MyPicker);
