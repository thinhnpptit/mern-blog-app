import { Button, Modal, TextareaAutosize, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, hideModal } from '../../redux/actions'
import { modalState$ } from '../../redux/selectors'
import useStyles from './style'
import FileBase64 from 'react-file-base64'

export default function CreatePostModal() {
  const [data, setData] = useState({
    title: '',
    content: '',
    attachment: ''
  })
  const dispatch = useDispatch()
  const { isShow } = useSelector(modalState$)
  const classes = useStyles()

  const onClose = React.useCallback(() => {
    dispatch(hideModal())
  }, [dispatch])

  const onSubmit = React.useCallback(() => {
    dispatch(createPost.createPostRequest(data))
  }, [data, dispatch])

  const body = (
    <div className={classes.paper} id='simple-modal-title'>
      <h2>Create New Post</h2>
      <form noValidate autoComplete='off' className={classes.form}>
        <TextField
          className={classes.title}
          required
          label='Title'
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <TextareaAutosize
          className={classes.textarea}
          rowsMin={10}
          rowsMax={15}
          placeholder='Content...'
          value={data.content}
          onChange={(e) => setData({ ...data, content: e.target.value })}
        />
        <FileBase64
          accept='image/*'
          multiple={false}
          type='file'
          value={data.attachment}
          onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
        />
        <div className={classes.footer}>
          <Button
            variant='contained'
            color='primary'
            component='span'
            fullWidth
            onClick={onSubmit}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  )
  return (
    <div>
      <Modal open={isShow} onClose={onClose}>
        {body}
      </Modal>
    </div>
  )
}
