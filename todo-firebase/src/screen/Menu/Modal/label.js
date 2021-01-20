import { useState } from "react";

const ModalLabel = (props) => {

    const [label, setLabel] = useState({name: '', description: ''});

    return (
        <div>
            <div className="form-item">
                <p>Name:</p>
                <input type="text" value={label.name} onChange={(e) => setLabel({ ...label, name: e.target.value })} />
            </div>
            <div className="form-item">
                <p>Description:</p>
                <input type="text" value={label.description} onChange={(e) => setLabel({ ...label, description: e.target.value })} />
            </div>
        </div>
    )
}

export default ModalLabel;