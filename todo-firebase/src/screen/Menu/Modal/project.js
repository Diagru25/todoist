import { useState } from "react";

const ModalProject = (props) => {

    const [project, setProject] = useState({name: '', description: ''});
    
    return (
        <div>
            <div className="form-item">
                <p>Name:</p>
                <input type="text" value={project.name} onChange={(e) => setProject({ ...project, name: e.target.value })} />
            </div>
            <div className="form-item">
                <p>Description:</p>
                <input type="text" value={project.description} onChange={(e) => setProject({ ...project, description: e.target.value })} />
            </div>
        </div>
    )
}

export default ModalProject;