import { createSlice } from '@reduxjs/toolkit'

import { IProject, IStoreState } from '@/types'

interface IProjectState {
  list?: IProject[]
  featuredList?: IProject[]
  selected?: IProject
}

const initialState: IProjectState = {
  list: [],
  featuredList: [],
  selected: null
}

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setList: (state, action: { payload: IProject[] }) => {
      state.list = [...action.payload]
    },
    setFeaturedList: (state, action: { payload: IProject[] }) => {
      state.featuredList = [...action.payload]
    },
    setSelected: (state, action: { payload: IProject }) => {
      state.selected = action.payload
    }
  }
})

export const { setList, setSelected, setFeaturedList } = projectSlice.actions

export const projectListSelector = (state: IStoreState): IProject[] =>
  state.project?.list

export const projectFeaturedListSelector = (state: IStoreState): IProject[] =>
  state.project?.featuredList

export const projectSelectedSelector = (state: IStoreState): IProject =>
  state.project?.selected

export default projectSlice.reducer
