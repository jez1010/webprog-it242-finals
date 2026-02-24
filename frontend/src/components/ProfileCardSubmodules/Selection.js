import {useState} from 'react';

import styles from './Selection.module.css';
import ProjectCards from './ProjectCards';



function Selection() {
  const [selectedProject, setSelectedProject] = useState('1');

  const handleChange = (event) => {
    setSelectedProject(event.target.value);
  }

  return (
    <div>
      <form>
        <div className = {styles.form_row}>

          <div className = {styles.choices}>
            <label htmlFor = "jessu" className = {styles.selection}>
              <input 
                type = "radio" 
                id = "jessu" 
                name = "project" 
                value = "1"
                checked = {selectedProject === '1'}
                onChange = {handleChange}
              />
              <span className= {styles.custom_input}/> 
              <span className = {styles.label_text}>Discord Bot #1</span>
            </label>
          </div>

          <div className = {styles.choices}>
            <label htmlFor = "aya" className = {styles.selection}>
              <input 
                type = "radio" 
                id = "aya" 
                name = "project" 
                value = "2"
                checked = {selectedProject === '2'}
                onChange = {handleChange}
              />
              <span className = {styles.custom_input}/>
              <span className = {styles.label_text}>Discord Bot #2</span>
            </label>
          </div>

          <div className = {styles.choices}>
            <label htmlFor = "ch" className = {styles.selection}>
              <input 
                type = "radio" 
                id = "ch" 
                name = "project" 
                value = "3"
                checked = {selectedProject === '3'}
                onChange = {handleChange}
              />
              <span className = {styles.custom_input}/>
              <span className = {styles.label_text}>Campus Hub</span>
            </label>
          </div>

          <div className = {styles.choices}>
            <label htmlFor = "compass" className = {styles.selection}>
              <input 
                type = "radio" 
                id = "compass" 
                name = "project" 
                value = "4"
                checked = {selectedProject === '4'}
                onChange = {handleChange}
              />
              <span className = {styles.custom_input}/>
              <span className = {styles.label_text}>Compass</span>
            </label>
          </div>

          <div>
            <ProjectCards project_id={selectedProject}/>
          </div>

        </div>
      </form>
    </div>
  )
}

export default Selection;