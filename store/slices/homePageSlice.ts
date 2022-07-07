import { createSlice } from '@reduxjs/toolkit'

import { IHomePage, IStoreState } from '@/types'

interface IHomePageState {
  value?: IHomePage
}

const initialState: IHomePageState = {
  value: null
}

export const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    set: (state, action: { payload: IHomePage }) => {
      state.value = action.payload
    }
  }
})

export const { set } = homePageSlice.actions

export const homePageSelector = (state: IStoreState): IHomePage =>
  state.homePage.value

export default homePageSlice.reducer
