import firebase from '../firebase';

const api = {
    getAllTask: (type) => {

        const snapshot = firebase.ref('/tasks').once('value');

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
    },

    // menu (projects, labels, Filters)
    getAllProjects: () => {
        return firebase.ref('/projects').once('value');
    },
    getAllLabels: () => {
        return firebase.ref('/labels').once('value');
    },
    getAllFilters: () => {
        return firebase.ref('/filters').once('value');
    },

    addProject: (entity) => {
        return firebase.ref('/projects').push(entity);
    },
    addLabel: (entity) => {
        return firebase.ref('/labels').push(entity);
    },
    addFilter: (entity) => {
        firebase.ref('/filter').push(entity).then(key => console.log('add project success with key: ', key.key));
    },
    
    deleteProject: (id) => {
        firebase.ref('/projects/').child(id).remove().then(() => console.log('delete project success with key: ', id));
    },
    deleteLabels: (id) => {
        firebase.ref('/labels/').child(id).remove().then(() => console.log('delete label success with key: ', id));
    },
    deleteFilters: (id) => {
        firebase.ref('/filters/').child(id).remove().then(() => console.log('delete filter success with key: ', id));
    },

}

export default api;