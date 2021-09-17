import * as Styled from './DrawerButton.style'

function DrawerButton({handleClick, isOpen}){
    return (
        <Styled.DrawerButton 
            onClick={() => { isOpen ? handleClick(true) : handleClick(false);}} 
            isOpen={isOpen}
        />
    );
}

export default DrawerButton;
