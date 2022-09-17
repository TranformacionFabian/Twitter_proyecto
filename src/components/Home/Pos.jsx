import { Avatar } from '@mui/material'
import { Pos, PostBody, PostDescription, Images, PostFooter } from './styled';
import React from 'react'
import Foto from '../../img/foto1.jfif';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublicIcon from '@mui/icons-material/Public';






export default function Post() {
    return (
        <Pos>

            <div className="post-avatar">
                <Avatar src={Foto} />
            </div>
            <PostBody>
                <div>
                    <div>
                        <h3>Json dev <span>
                            <VerifiedUserIcon className="post-icon" />
                            @json1.com</span></h3>
                        <PostDescription>
                            <p>Twitter es un servicio de microblogueo,</p>
                        </PostDescription>
                        <Images src={Foto} />
                        <PostFooter>
                            <ChatBubbleOutlineIcon fontSize='small' />
                            <RepeatIcon fontSize='small' />
                            <FavoriteBorderIcon fontSize='small' />
                            <PublicIcon fontSize='small' />
                        </PostFooter>
                    </div>
                </div>
            </PostBody>

        </Pos>
    )
}
