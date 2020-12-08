import { useEffect, useState } from 'react';
import './App.css';
import firebase from './helper/firebase';

function App() {

    const [listTask, setListTask] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [curTask, setCurTask] = useState({ key: '', name: '', description: '' });


    const db = firebase.ref("/tasks");

    const handleClick = () => {
        let data = {
            name: name,
            description: description
        }

        let task = {
            name: 'test 1',
            schedule: null,
            time: null,
            projectID: '',
            tagID: '',
            priorityID: '',
            comment: [],
            activity: [],
            subTask: []
        }
        db.push(task).then((key) => console.log('Success: ', key.key));

        //setName('');
        //setDescription('');
    }

    const handleDelete = () => {
        // delete
        db.child('/' + curTask.key).remove().then(() => console.log('delete success'));
    }

    const handleUpdate = () => {
        // update
        let newData = {
            name: curTask.name,
            description: curTask.description
        }

        //use set
        //db.child('/' + curTask.key).set(newData);

        //use update
        let updates = {};
        updates['test/' + curTask.key] = newData;
        return firebase.ref().update(updates);

        //return db.child('/' + curTask.key).update(newData);

    }

    useEffect(() => {
        // db.on('value', snapshot => {
        //     let temp = [];
        //     snapshot.forEach(child => {
        //         let key = child.key;
        //         let val = child.val();

        //         temp.push({
        //             key: key,
        //             name: val.name,
        //             description: val.description
        //         });
        //     })

        //     console.log('temp ', temp)
        //     setListTask(temp);
        // })
    }, [])

    const clickChild = (newCur) => {
        console.log(newCur);
        setCurTask(newCur);
    }

    return (

        <div className="App">
            <header className="App-header">

                <input type="text" value={name} placeholder="name" onChange={e => setName(e.target.value)} />
                <input type="text" value={description} placeholder="description" onChange={e => setDescription(e.target.value)} />
                <button onClick={handleClick}>Create</button>

                {/* <ul>
                    {listTask.map(task => <li key={task.key} onClick={() => clickChild({ key: task.key, name: task.name, description: task.description })}>{task.name}</li>)}
                </ul> */}

                <hr />

                <p>Key: <span>{curTask.key}</span></p>
                <input type="text" value={curTask.name} onChange={e => setCurTask({ ...curTask, name: e.target.value })} />
                <input type="text" value={curTask.description} onChange={e => setCurTask({ ...curTask, description: e.target.value })} />
                <button onClick={handleUpdate}>Update</button>
                <button onClick={handleDelete}>Delete</button>
            </header>
        </div>
    );
}

export default App;
