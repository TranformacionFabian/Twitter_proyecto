import React from 'react'
import TweetBox from './TweetBox';
import Post from './Pos';
import { Container, Header } from './styled';

export default function Home() {
  return (
    <Container>

      {/* Header */}
      <Header><h2>Home</h2></Header>

      {/* TweetBoxx */}
     <TweetBox/>

      {/* Post */}

        <Post/>
        <Post/>
        <Post/>
        <Post/>
        
    </Container>
  )
}
