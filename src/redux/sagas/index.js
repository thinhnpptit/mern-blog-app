import { call, put, takeLatest } from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from '../../api'

// Generator function ES6
function* fetchPostsSaga() {
  try {
    const posts = yield call(api.fetchPosts)
    console.log('[posts]', posts)
    yield put(actions.getPosts.getPostsSuccess(posts.data))
  } catch (err) {
    yield put(actions.getPosts.getPostsFailure(err))
  }
}

function* createPostSaga(action) {
  try {
    const post = yield call(api.createPost, action.payload)
    console.log('[createPostSaga]', post)
    yield put(actions.createPost.createPostSuccess(post.data))
  } catch (err) {
    yield put(actions.createPost.createPostFailure(err))
  }
}

function* updatePostSaga(action) {
  try {
    console.log('updatePostSaga', { action })
    const updatedPost = yield call(api.updatePost, action.payload)
    console.log('[updatePostSaga]', updatedPost)
    yield put(actions.updatePost.updatePostSuccess(updatedPost.data))
  } catch (err) {
    yield put(actions.updatePost.updatePostFailure(err))
  }
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga)
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga)
  yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga)
}

export default mySaga
