import React from "react";
import { Contenedor } from "./styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconOption from "./IconOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";

export default function Sidebar() {
  return (
    <Contenedor>

      <TwitterIcon className="twitter-logo" />
      <IconOption active Icon={HomeIcon} text="Home" />
      <IconOption Icon={SearchIcon} text="Explorar" />
      <IconOption Icon={NotificationsNoneIcon} text="Notificaciones" />
      <IconOption Icon={MailOutlineIcon} text="Mensaje" />
      <IconOption Icon={BookmarkBorderIcon} text="Marcadores" />
      <IconOption Icon={ListAltIcon} text="Listas" />
      <IconOption Icon={MoreHorizIcon} text="Perfil" />
      <IconOption Icon={PermIdentityIcon} text="Mas" />
      <Button variant="outllined" fullWidth>Twitter</Button>
    </Contenedor>
  );
}
