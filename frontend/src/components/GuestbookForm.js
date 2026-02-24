import {useState} from 'react';
import axios from 'axios';

import {baseUrl} from '../config';
import styles from './GuestbookForm.module.css';

function GuestBookForm() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${baseUrl}/app`, 
        {
          name: name,
          content: content,
        }
      );

      setName('');
      setContent('');
    } catch (err) {
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className = {styles.guestbook_form}>
      <span className = "title">Create a post on the board.</span>
      <form onSubmit = {handleSubmit}>
        <span className = "title3">Name</span>
        <br/>
        <input
          className = {`${styles.input}`}
          type = "text"
          placeholder = "Enter name..."
          value = {name}
          onChange = {
            (e) => setName(e.target.value)
          }
        />
        <br/>
        <span className = "label">Content</span>
        <br/>
        <textarea
          className = {`${styles.input} ${styles.text_area}`}
          type = "text"
          placeholder = "Enter content..."
          value = {content}
          onChange = {
            (e) => setContent(e.target.value)
          }
        />
        <br/>
        <button type = "submit">Post</button>
      </form>
    </div>
  );
}

export default GuestBookForm;