import React from 'react'
import { Typography } from '@material-ui/core'
import useStyle from './style'

export default function Header() {
  const classed = useStyle()
  return (
    <Typography variant='h4' align='center' className={classed.container}>
      Blog
    </Typography>
  )
}
