/**
 * @Author: Mohammed Cherbatji <mo>
 * @Date:   2019-10-13T12:00:03+01:00
 * @Filename: actions.js
 * @Last modified by:   mo
 * @Last modified time: 2019-10-16T18:48:58+01:00
 */



import * as types from './mutationTypes'


export const updateItem = ({ commit }, item) => {
  console.log('action updateItem')

  return commit(types.UPDATE_ITEM, item)
}

export const setNotificationTime = ({ commit }, time) => {
  console.log('action SET_TIME')

  return commit(types.SET_TIME, time)
}

export const completeState = ({ commit }, item) => {
  console.log('action completeState')
  return updateItem({ commit }, {...item, completed: true})
}

export const updateCounter = ({ commit }, item) => {
  console.log('action updateCounter')
  return commit(types.UPDATE_COUNTER, item)
}

export const addUserText = ({ commit }, [item, newText ]) => {
  console.log('action addUserText')
  return updateItem({ commit }, {...item, text: newText, edited: true, count: 0, dateIncremented: 0})
}

export const editUserText = ({ commit }, [item, newText ]) => {
  console.log('action editUserText')
  return updateItem({ commit }, {...item, text: newText, edited: true, count: 0, dateIncremented: 0})
}


// export const toggleDoneItem = ({ commit }, item) => {
//   console.log('action toggleDoneItem')
//   return updateItem({ commit }, {...item, done: !item.done})
// }
//
// export const toggleDeleteItem = ({ commit }, item) => {
//   console.log('action toggleDoneItem')
//   return updateItem({ commit }, {...item, deleted: !item.deleted})
// }
//
// export const deleteItem = ({ commit }, item) => {
//   const task = 'action deleteItem'
//   console.log(task)
// }
