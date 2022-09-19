import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Widget, Header, DivIcon, DivContent } from './styled1';
import { TwitterTimelineEmbed, TwitterTweetEmbed, TwitterShareButton  } from 'react-twitter-embed';



export default function Widgets() {
  return (
    <Widget>
      <Header>
        <DivIcon>
          <SearchIcon className="searchIcon" />
          <input placeholder="Buscar en buscar en Twitter" />
        </DivIcon>
      </Header>

<DivContent>
  <h2>what s happening</h2>

  <TwitterTweetEmbed
  tweetId={'1570877493313404931'} />



<TwitterTimelineEmbed
sourceType='profile'
screenName='jehningson1'
options={{height: 400}} />

<TwitterShareButton
url={'https://facebook.com/saurabhnemader'}
options={{text: '#reactjs is awesome!', via : 'saurabhnemader'}} />

</DivContent>

      </Widget>
  )
}
