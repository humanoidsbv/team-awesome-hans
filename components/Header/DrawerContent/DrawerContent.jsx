import * as Styled from './DrawerContent.style';

function DrawerContent(props){
    return (
        <Styled.DrawerContent isOpen={props.isOpen}>
            <Styled.DrawerContentItemList>
                <li>
                    <Styled.DrawerContentItem 
                        backgroundColor="hotpink" 
                        borderRadius="4px"
                    >
                        Timesheets
                    </Styled.DrawerContentItem>
                </li>
                <li><Styled.DrawerContentItem>Team members</Styled.DrawerContentItem></li>
                <li><Styled.DrawerContentItem>Projects</Styled.DrawerContentItem></li>
                <li><Styled.DrawerContentItem>Clients</Styled.DrawerContentItem></li>
                <li><Styled.DrawerContentItem>Documents</Styled.DrawerContentItem></li>
            </Styled.DrawerContentItemList>
        </Styled.DrawerContent>
    );
}

export default DrawerContent;
