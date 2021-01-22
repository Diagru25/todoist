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
        return firebase.ref('/filter').push(entity);
    },
    
    deleteProject: (id) => {
        firebase.ref('/projects/').child(id).remove();
    },
    deleteLabel: (id) => {
        firebase.ref('/labels/').child(id).remove();
    },
    deleteFilter: (id) => {
        firebase.ref('/filters/').child(id).remove();
    },
    updateProject: (project) => {
        let {key, ...cloneProject} = project;

        const curUpdate = firebase.ref('/projects/').child(project.key);
        curUpdate.set(cloneProject);
    },
    updateLabel: (label) => {
        let {key, ...cloneLabel} = label;

        const curUpdate = firebase.ref('/labels').child(label.key);
        curUpdate.set(cloneLabel);
    },
    updateFilter: (filter) => {
        let {key, ...cloneFilter} = filter;

        const curUpdate = firebase.ref('/filters').child(filter.key);
        curUpdate.set(cloneFilter);
    }

}

export default api;