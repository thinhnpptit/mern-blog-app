import React from 'react'
import { Container, Fab } from '@material-ui/core'
import Header from '../components/Header'
import PostList from '../components/PostList'
import AddIcon from '@material-ui/icons/Add'
import useStyles from './style'

export default function HomePage() {
  const classes = useStyles()

  return (
    <Container maxWidth='lg' className={{}}>
      <Header />
      <PostList />
      <Fab color='primary' className={classes.fab}>
        <AddIcon />
      </Fab>
    </Container>
  )
}
