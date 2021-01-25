import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  background:black;
  color:white;
  font-family: 'Quicksand', sans-serif;
}
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.h1`
  text-align: center;
  font-weight: bold;
  margin: 1rem auto;
  font-size:2.5rem;
`;

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 15px;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const SearchBarStyle = styled.textarea`
  overflow: hidden;
  resize: none;
  height: 10rem;
  padding: 10px;
  width: 70%;
  font-size: ${(props) => props.fontSize};
  margin: 1rem auto;
  border-radius: 6px;
  box-shadow: 2px 2px 8px rgba(black, 0.3);
  color: ${(props) => props.color};
  font-style: ${(props) => props.fontstyle};
  text-decoration: ${(props) => props.textDecoration};
  font-weight: ${(props) => props.fontWeight};
  background: black;
  font-family: "Quicksand", sans-serif;
`;

export const ButtonStyle = styled.button`
  display: inline-block;
  padding: 10px;
  border: 0.1em solid #000000;
  margin: 10px;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: black;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  background-color: ${(props) => props.backGroundColor};
  text-align: center;
  transition: all 0.15s;
  &:hover {
    text-shadow: 0 0 2em rgba(255, 255, 255, 1);
    background: #05c46b;
    color: #ffffff;
    font-weight: bolder;
  }
  width: 250px;
  height: 50px;
  text-align: center;
`;

export const ButtonSizeWrapper = styled.div`
  text-align: center;
`;
