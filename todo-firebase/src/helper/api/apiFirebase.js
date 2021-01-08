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
        firebase.ref('/tasks/').child(id).remove().then(() => console.log('delete task success with key: ', id));
    },
    updateTask: (task, subtask = false) => {
        
        let {key, subTask, ...cloneTask} = task;

        // let updates = {};
        // updates[task.key] = newData;
        // firebase.ref('/tasks').update(updates).then(console.log('Update success with id: ', task.key));

        // sub-task can be null => 2 situation.

        const curUpdate = firebase.ref('/tasks/').child(task.key);
        if(subtask)
            curUpdate.child('subTask').set([...task.subtask]).then((key) => console.log('update (subTask) success with key: ', key));
        else
            curUpdate.set(cloneTask).then(console.log('update success comment test'));
    }
}

export default api;