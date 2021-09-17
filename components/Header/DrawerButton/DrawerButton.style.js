import styled from 'styled-components';

export const DrawerButton = styled.button`

    background: url(${(props) => props.isOpen ? "/img/shape.svg" : "/img/group.svg"}) no-repeat center;
    border: none;
    padding: 10px;
    position: absolute;
    right: 18px;
    top: 24px;
    transition: 0.2s;
`

export default DrawerButton;
