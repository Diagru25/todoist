import firebase from '../firebase';

const api = {
    getAllTask: (type) => {

        const snapshot = firebase.ref('/tasks').once('value')
        
        return snapshot
    },

    addTaskInbox: (task) => {
        firebase.ref('/tasks').push(task).then(key => console.log('Add task to inbox success: ', key.key))
    },

    addTask: (task) => {
        firebase.ref('/tasks').push(task).then(key => console.log('Add task to inbox success: ', key.key))
    },

    deleteTask: (id) => {
        firebase.ref('/tasks').child('/' + id).remove().then(() => console.log('delete task success with key: ', id));
    }
}

export default api;