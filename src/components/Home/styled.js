import { Padding } from '@mui/icons-material';
import { padding } from '@mui/system';
import styled from  'styled-components';



export const Container = styled.div`
flex: o.5 !important;
border-rigth: 1px solid #ddd !important;
overflow-y: scroll !important;
box-sizing: border-box !important;

&::-webkit-scrollbar{
    display: none !important;
}

--ms-overflow-style: none !important;
scroll:-width: none !important;
`


export const Header = styled.header`


`

/*  TWEETBOX */

export const Box = styled.div`
padding: 5px 15px !important;
`

export const Div = styled.div`
display: flex !important;
width: 100% !important;
>.column{
    margin-top: 50px !important;
    display: flex !important;
    flex-direction: column !important;
    width: 50% !important;
    padding-rigth: 16px
    >input{
        margin-top: 10px !important;
        margin-left: 10px !important;
        margin-top: 10px !important;
        width: 50% !important;
        
        outline: 0 ! important
        font-size: 19px !important;
        line-height: 10px !important;
        color: #0f1419 !important;
    }
}
>input{
    margin-top: 10px !important;
    margin-left: 10px !important;
    width: 50% !important;
    outline: 0 ! important
    flex: 1 !important;
    border: none !important;
    font-size: 10px !important;
    line-height: 25px !important;
    color: #0f1419 !important;
}
>Button{
    background-color: var(--twitterColor) !important;
    border: none !important;
    color: white !important;
    font-weight: 900 !important;
    width: 80% !important;
    height: 40% !important;
    margin-top: 20% !important;
    border-radius: 30px !important;
    text-transform:inherit !important;
}
`

export const DivBox = styled.div`
display: flex !important;
justify-content: center !important;
align-items: center !important;
>.MuiSvgIcon-root{
    fill: var(--twitterColor) !important;
    margin-left: 1rem !important;
    border: 2px solid var(--twitterColor) !important;
    width: 20px !important;
    height: 20px !important;
    border-radius: 5px !important;
    cursor: pointer !important;
    &:nth-child(3) !important;
}
`

export const Avatar = styled.img`
border-radius: 50% !important;
    height: 120px !important;
    width: 120px !important;
    object-fit: fill !important;
}
`


export const Form = styled.form`
display: flex !important;
flex-direction: column !important;
`


export const Pos = styled.div`
Padding: 10px 15px!important;
border-top : 1px solid #ddd !important;
margin-top: 5px !important;
display: flex !important;
align-items: flex-start !important;
.post_avatar{
    margin-top: 5px !important;
   
}
`


 export const PostBody = styled.div`
padding-left: 10px !important;
width: 100% !important;
overflow: hidden !important;

>div span {
    font-size: 15px !important;
    font-weight: 600 !important;
    color: #5b7083
}
.post_icon{
    font-size: 14px !important;
    color: var(--twitterColor) !important;
}
h3{
    padding: 0 !important;
    margin: 0 !important;
}
`

 export const  PostDescription = styled.div`
 margin-button: 10px !important;
 >p{
    
    padding: 0 !important;
    color: #0f1419 !important;
    font-size: 14px !important;
    
  
 }
 `
  export const Images = styled.img`
  border-radius: 20px !important;
  min-width: 50px !important;
  width: 50% !important;
  min-height: 300px !important;
  `
  
  export const PostFooter = styled.div`
  display: flex !important
  justify-content: space-between !important;
  marginn-top: 10 !important
  color: #5b7083 !important;
  transition: all 100ms ease-in !important;
  >.MuiSvgIcon-root:hover:nth-child(1){
    fill: #1da1f2 !important;
    cursor: pointer !important;
  }
  >.MuiSvgIcon-root:hover:nth-child(2){
    fill: #17bf63 !important;
    cursor: pointer !important;
  }
  >.MuiSvgIcon-root:hover:nth-child(3){
    fill: #e02452 !important;
    cursor: pointer !important;
  }
  >.MuiSvgIcon-root:hover:nth-child(4){
    fill: #1da1f2 !important;
    cursor: pointer !important;
  }
  `
