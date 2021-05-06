import * as types from './mutationTypes'

const mutations = {
  // [types.ADD_ITEM](state, item) {
  //   console.log('ADD_ITEM', item)
  //   state.items.push(item)
  // },
  [types.UPDATE_ITEM](state, item) {
    console.log('UPDATE_ITEM', item)
    let itemToUpdate = state.statesList.find(i => i.id == item.id)
    Object.assign(itemToUpdate,item)
  },

  [types.SET_TIME](state, time) {
    console.log('SET_TIME', time)
    state.notificationTime = time
    state.notificationScheduled = true
  },

  [types.UPDATE_COUNTER](state, item) {
    console.log('UPDATE_COUNTER')
    let itemToUpdate = state.statesList.find(i => i.id == item.id)
    if (itemToUpdate.count < 66) {
      let d = new Date()
      itemToUpdate.count++
      console.log("item count muta: ",itemToUpdate.count);
      itemToUpdate.dateIncremented = d;
      // itemToUpdate.dateIncremented = d.getMonth()+1 + '-' + d.getDate() + '-' + d.getFullYear()
      console.log('Counter Updated: ', item.count, item.dateIncremented)
    }
    else if (itemToUpdate.count === 66) {
      itemToUpdate.completed = true
    }
  },

  // [types.COMPLETE_STATE](state, item) {
  //   console.log('COMPLETE_STATE')
  //   let itemToUpdate = state.statesList.find(i => i.id == item.id)
  //   if (itemToUpdate.count < 66) {
  //     let d = new Date()
  //     itemToUpdate.count++
  //     itemToUpdate.dateIncremented = d.getMonth()+1 + '-' + d.getDate() + '-' + d.getFullYear()
  //     console.log('Counter Updated: ', item.count, item.dateIncremented)
  //   }
  // },
  // [types.DELETE_ITEM](state, item) {
  //   console.log('DELETE_ITEM', item)
  //   state.items.splice(state.items.findIndex(i => i.id == item.id), 1)
  // },
  //
  // [types.ADD_PROCESSING_TASK](state, task) {
  //   console.log('ADD_PROCESSING_TASK', task)
  //   state.processingTasks.push(task)
  // },
  // [types.REMOVE_PROCESSING_TASK](state, task) {
  //   console.log('REMOVE_PROCESSING_TASK', task)
  //   state.processingTasks.splice(state.processingTasks.indexOf(task), 1)
  // },
}

export default mutations;
