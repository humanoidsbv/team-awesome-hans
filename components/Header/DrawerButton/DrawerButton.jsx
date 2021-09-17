import * as Styled from './DrawerButton.style'

function DrawerButton(props){
    return <Styled.DrawerButton 
        onClick={() => { props.isOpen ? props.handleClick(true) : props.handleClick(false);}} 
        isOpen={props.isOpen}/>;
}

export default DrawerButton;
