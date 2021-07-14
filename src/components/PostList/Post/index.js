import React from 'react'
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography
} from '@material-ui/core'
import MoreVerbIcon from '@material-ui/icons/MoreVert'
import FavouriteIcon from '@material-ui/icons/Favorite'
import moment from 'moment'

const Post = ({ post }) => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>A</Avatar>}
        title={post.author}
        subheader={moment(post.updatedAt).format('HH:MM MMM DD, YYYY')}
        action={
          <IconButton>
            <MoreVerbIcon />
          </IconButton>
        }
      />
      <CardMedia image={post.attachment} title='Title' />
      <CardContent>
        <Typography variant='h5' color='textPrimary'>
          {post.title}
        </Typography>
        <Typography variant='body2' component='p' color='textSecondary'>
          {post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <FavouriteIcon />
          <Typography component='span' color='textSecondary'>
            {post.likeCount}
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Post
