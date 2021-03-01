import styled from "styled-components";
const blackColor = "#1c1f28";
export const ColorCard = styled.div`
  position: absolute;
  left:180px;
  z-index: 100;
  width: 180px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const ColorCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ColorCardheading = styled.div`
  color: ${blackColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`;

export const CloseButton = styled.div`
  border-radius: 50%;
  border: 1px solid black;
  font-size: 7px;
  height: 18px;
  width: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${blackColor};
`;

export const Swatch = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  background: ${({ bgColor }) => bgColor};
  boxsizing: "border-box";
  border-radius: 4px;
`;
