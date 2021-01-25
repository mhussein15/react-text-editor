import { ButtonStyle, ButtonSizeWrapper } from "../styles";
export default function ButtonSize(props) {
  const IncFontSize = () => {
    props.setfontSize(props.fontSize + 1);
  };
  const DecFontSize = () => {
    props.setfontSize(props.fontSize - 1);
  };
  return (
    <ButtonSizeWrapper>
      <ButtonStyle onClick={IncFontSize}>Increase</ButtonStyle>
      {props.fontSize}px
      <ButtonStyle onClick={DecFontSize}>Decrease</ButtonStyle>
    </ButtonSizeWrapper>
  );
}
