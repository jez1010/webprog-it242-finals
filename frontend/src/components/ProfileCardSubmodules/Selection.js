import {useState} from 'react';
import styles from './Selection.module.css';

function Selection() {
  const [selectedProject, setSelectedProject] = useState('jessu');

  const handleChange = (event) => {
    setSelectedProject(event.target.value);
  }

  return (
    <div className>
      <form>
        <div className = {styles.choices}>
          <label for = "jessu" className = {styles.selection}>
            <input 
              type = "radio" 
              id = "jessu" 
              name = "project" 
              value = "jessu"
              checked = {selectedProject === 'jessu'}
              onChange = {handleChange}
            />
            <span className= {styles.custom_input}/> 
            <span className = {styles.label_text}>Discord Bot #1</span>
          </label>
          
        </div>


        <label for = "aya" className = {styles.selection}>
          <input 
            type = "radio" 
            id = "aya" 
            name = "project" 
            value = "aya"
            checked = {selectedProject === 'aya'}
            onChange = {handleChange}
          />
          <span className = {styles.custom_input}/>
          <span className = {styles.label_text}>Discord Bot #2</span>
        </label><br/>
        
      </form>
    </div>
  )
}

export default Selection;