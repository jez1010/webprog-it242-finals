import styles from './Selection.module.css';

function Selection() {
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
            />
            <span className= {styles.custom_input}/> <span classname = "text">Discord Bot #1</span>
          </label><br/>
        </div>


        <label for = "aya" className = {styles.selection}>
          <input 
            type = "radio" 
            id = "aya" 
            name = "project" 
            value = "aya"
          />
          <span className = {styles.custom_input}/>
        </label><br/>
      </form>
    </div>
  )
}

export default Selection;