const task = {
    key:'',
    name: '',
    schedule: null,
    time: null,
    projectID: '',
    tagID: '',
    priorityID: '',
    comment: [],
    activity: [],
    subTask: [] //many task
}

const project = {
    name: '',
    description: ''
}

const tag = {
    name: '',
    description: '',
}

const priority = {
    name: '',
    description: ''
}

export {task, project, tag, priority}