import firebase from '../firebase';

const api = {
    getAllTask: (type) => {

        const snapshot = firebase.ref('/tasks').once('value')
        
        return snapshot
    },

    addTaskInbox: (task) => {
        firebase.ref('/tasks').push(task).then(key => console.log('Add task to inbox success: ', key.key))
    }
}

export default api;