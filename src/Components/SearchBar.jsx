import { SearchBarStyle } from "../styles";

export default function SearchBar(props) {

  const fontSize = `${props.fontSize}px`
  return (
    <SearchBarStyle
      color={props.color}
      fontstyle={props.fontstyle}
      textDecoration={props.textDecoration}
      fontWeight={props.fontWeight}
      fontSize={fontSize}
    />
  );
}
