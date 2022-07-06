import { createSlice } from '@reduxjs/toolkit'

import { IProfile, IStoreState } from '@/types'

interface IProfileState {
  value?: IProfile
}

const initialState: IProfileState = {
  value: null
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    set: (state, action: { payload: IProfile }) => {
      state.value = action.payload
    }
  }
})

export const { set } = profileSlice.actions

export const profileSelector = (state: IStoreState): IProfile =>
  state.profile.value

export default profileSlice.reducer
