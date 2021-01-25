import { MainWrapper, Header, Container, GlobalStyle } from "./styles";
import SearchBar from "./Components/SearchBar.jsx";
import { CirclePicker } from "react-color";
import { useState } from "react";
import Button from "./Components/Button";
import ButtonSize from "./Components/ButtonSize";
function App() {
  const [color, setcolor] = useState("white");
  const [fontstyle, sethandstyle] = useState(["normal", "white"]);
  const [textDecoration, settextDecoration] = useState(["none", "white"]);
  const [fontWeight, setfontWeight] = useState(["normal", "white"]);
  const [fontSize, setfontSize] = useState(50);

  const handleChange = (color) => {
    setcolor(color.hex);
  };
  const handleFontStyle = (text) =>
    fontstyle[0] === "normal"
      ? sethandstyle([text, "#fad390"])
      : sethandstyle(["normal", "white"]);

  const handletextDecoration = (text) =>
    textDecoration[0] === "none"
      ? settextDecoration([text, "#fad390"])
      : settextDecoration(["none", "white"]);

  const handlefontWeight = (text) =>
    fontWeight[0] === "normal"
      ? setfontWeight([text, "#fad390"])
      : setfontWeight(["normal", "white"]);

  return (
    <MainWrapper>
      <GlobalStyle />

      <Header>TextEditor App</Header>
      <SearchBar
        color={color}
        fontstyle={fontstyle[0]}
        textDecoration={textDecoration[0]}
        fontWeight={fontWeight[0]}
        fontSize={fontSize}
      />
      <Container>
        <Button
          text={"Italic"}
          editText={handleFontStyle}
          backGroundColor={fontstyle[1]}
        />
        <Button
          text={"Underline"}
          editText={handletextDecoration}
          backGroundColor={textDecoration[1]}
        />
        <Button
          text={"Bold"}
          editText={handlefontWeight}
          backGroundColor={fontWeight[1]}
        />
      </Container>

      <Container>
        <CirclePicker onChange={handleChange} />
      </Container>

      <Container>
        <ButtonSize setfontSize={setfontSize} fontSize={fontSize} />
      </Container>
    </MainWrapper>
  );
}

export default App;
