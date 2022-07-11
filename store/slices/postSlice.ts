import { createSlice } from '@reduxjs/toolkit'

import { IPost, IStoreState } from '@/types'

interface IPostState {
  list?: IPost[]
  featuredList?: IPost[]
  selected?: IPost
}

const initialState: IPostState = {
  list: [],
  featuredList: [],
  selected: null
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setList: (state, action: { payload: IPost[] }) => {
      state.list = [...action.payload]
    },
    setFeaturedList: (state, action: { payload: IPost[] }) => {
      state.featuredList = [...action.payload]
    },
    setSelected: (state, action: { payload: IPost }) => {
      state.selected = action.payload
    }
  }
})

export const { setList, setSelected, setFeaturedList } = postSlice.actions

export const postListSelector = (state: IStoreState): IPost[] =>
  state.post?.list

export const postFeaturedListSelector = (state: IStoreState): IPost[] =>
  state.post?.featuredList

export const postSelectedSelector = (state: IStoreState): IPost =>
  state.post?.selected

export default postSlice.reducer
