import styled from "styled-components";


export const Widget = styled.div`
flex: 0.3 !important;
overflow-y: scrollbar !important;
box-sizing: border-box !important;

&::webkit-scrollbar{
    display:none !important;
}
-ms-overflow--style: none !important;
scrollbar-width: none !important;
`

export const Header = styled.div`
background-color: white !important;
height: 10% !important;
position: sticky !important;


`

export const DivIcon = styled.div`
display: flex !important;
align-items: center !important;
background-color: white !important;
padding: 10px !important;
border-radius: 5px !important;
>.searchIcon{
    color: #5b7083 !important;
}
>.input{
    border: none !important;
    outline: 0  !important;
    padding-left: 10px !important
    background-color: #eee !important;
    font-size: 12px !important
}
`

export const DivContent = styled.div`

`