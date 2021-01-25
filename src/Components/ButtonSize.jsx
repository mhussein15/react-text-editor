import { ButtonStyle, ButtonSizeWrapper } from "../styles";
export default function ButtonSize(props) {
  const IncFontSize = () => {
    if (props.fontSize < 100) props.setfontSize(props.fontSize + 1);
  };
  const DecFontSize = () => {
    if (props.fontSize <= 100 && props.fontSize > 0) {
      props.setfontSize(props.fontSize - 1);
    }
  };
  return (
    <ButtonSizeWrapper>
      <ButtonStyle onClick={IncFontSize}>Increase</ButtonStyle>
      {props.fontSize}px
      <ButtonStyle onClick={DecFontSize}>Decrease</ButtonStyle>
    </ButtonSizeWrapper>
  );
}
