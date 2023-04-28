import React from 'react'
import Header from './components/header'
import Main from './components/main'
import Banner from './components/main/banner'

export default function Home() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Main></Main>
    </>
  )
}
