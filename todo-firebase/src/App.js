import './App.css';
import firebase from './firebase';



function App() {

  const db = firebase.ref("/test")

  const handleClick = () => {
    let data = {
      id: "test1",
      name: "test 1",
      description: "no idea"
    }

    console.log(db.once('value').then(snapshot => {
      console.log(snapshot.forEach(childSnapShot => {
        let key = childSnapShot.key;
        let ValueChild = childSnapShot.val();
        console.log('key: ', key);
        console.log('value of child: ', ValueChild);

        if(key === 'ec ec') {
          firebase.ref().child('/test/' + key).remove();
        }


      }));
    }));
    //db.push(data).then(() => console.log("success"));

  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Create</button>
      </header>
    </div>
  );
}

export default App;
