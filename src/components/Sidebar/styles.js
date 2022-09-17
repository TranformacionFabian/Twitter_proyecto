import styled, {css} from 'styled-components';

export const Contenedor = styled.div`
padding: 40px !important;
border-rigth: 1px solid red !important;
flex: 0.2 !important;
min-width: 200px !important;

>.twitter-logo{
    margin: 50px 0 !important;
    width 60px !important;
    height: 30px !important;
    fill: var(--twitterColor) !important;
    cursor: pointer !important
    
}
>Button{
    background-color: var(--twitterColor) !important;
    border: none !important;
    color: white !important;
    font-weight: 800 !important;
    text-transform: uppercase !important;
    height: 28px !important;
    padding: 0 10px !important;
    border-radius: 9999px !important;
    margin-top: 20px !important
    cursor: pointer !important
}
`
export const SidebarIcon = styled.div`
display : flex !important;
align-items: center!important;
padding: 14px 10px !important;
>h2{
    font-size: 10px !important;
    margin: 0 15px 0 20px !important;
    font-weight: 700 !important;
  
}
>.MuiSvgIcon-root{
  width: 20px !important;
  height: 20px !important;
  cursor: pointer !important
 
}
&;hover{
    background-color: var(--Hover) !important;
    color: var(--twitterColor) !important;
    transform: color 100ms ease-in !important;
    cursor: pointer !important
}
${props => props.active && css`
 color: var(--twitterColor) !important;
 background-color: var(--Hover) !important;

`}

`


