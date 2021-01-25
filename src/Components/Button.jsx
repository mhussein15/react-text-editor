import {ButtonStyle} from "../styles"
export default function Button(props) {
    return (
        <ButtonStyle onClick={() => props.editText(props.text.toLowerCase())} backGroundColor={props.backGroundColor}>
            {props.text}
        </ButtonStyle>
    )
}
