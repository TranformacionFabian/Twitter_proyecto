import React from "react";
import { Box, Div, Avatar, Form, DivBox } from "./styled";
import Foto from "../../img/avatar.jpg";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import GifIcon from "@mui/icons-material/Gif";
import { Button } from "@mui/material";

export default function Tweetbox() {
  return (
    <Box>
      <Form>
        <Div>
          <Avatar src={Foto} alt="" />
          <div className="column">
            <input text="text" placeholder="Dejenos un tweet" />
            <br/>
            <input text="text" placeholder="Usuario" />
          </div>
        </Div>
        <Div>
          <DivBox>
            <AddPhotoAlternateIcon />
            <GifIcon />
            <input text="text" placeholder="Opcional: url de la imagen" />
            <Button>Tweet</Button>
          </DivBox>
         </Div>
       </Form>
    </Box>
  );
}
