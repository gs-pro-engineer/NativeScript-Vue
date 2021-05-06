// export const itemList = state => {
//     return state.states.filter((item) => !item.deleted)
// }

// export const stateFromList = state => param => {
//   return state.statesList.find(stateL => stateL.id === param)
// }

export const getStates = (state) => {
  return state.statesList
}

export const getState = (state) => (id) => {
  return state.statesList.find(stateL => stateL.id === id)
}

export const getNotificationTime = (state) => {
  return state.notificationTime
}

export const getNotificationScheduled = (state) => {
  return state.notificationScheduled
}

export const getText = (state) => (id) => {
  return state.statesList.find(stateL => stateL.id === id).text
}

// export const stateFromList = (state) => (index) => {
//   return state.statesList[index].text
// }
