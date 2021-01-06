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
        return firebase.ref('/tasks').push(task);
        //firebase.ref('/tasks').push(task).then(key => {console.log('Add task to inbox success: ', key.key)})
    },

    deleteTask: (id) => {
        firebase.ref('/tasks').child('/' + id).remove().then(() => console.log('delete task success with key: ', id));
    },
    updateTask: (task) => {
        let newData = {
            name: task.name,
            schedule: task.schedule,
            time: task.time,
            projectID: task.projectID,
            tagID: task.tagID,
            priorityID: task.priorityID,
            isComplete: task.isComplete,
            comment: [...task.comment],
            activity: [...task.activity],
            subTask: task.subTask ? [...task.subTask] : []

        }

        console.log('fhsihfsihfisdhiuhfd');
        let updates = {};
        updates[task.key] = newData;
        firebase.ref('/tasks').update(updates).then(console.log('Update success with id: ', task.key));
    }
}

export default api;