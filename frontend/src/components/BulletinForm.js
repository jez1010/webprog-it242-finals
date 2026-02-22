import {useState} from 'react';
import axios from 'axios';

import {baseUrl} from '../config';
import './BulletinForm.css';

function BulletinForm() {
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
      alert("Post added to bulletin.");
    } catch (err) {
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className = "bulletin_form">
      <span className = "title">Create a post on the bulletin.</span>
      <form onSubmit = {handleSubmit}>
        <span className = "label">Name</span>
        <br/>
        <input
          className= "input"
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
          className = "input"
          type = "text"
          placeholder = "Enter content..."
          value = {content}
          onChange = {
            (e) => setContent(e.target.value)
          }
        />
      </form>
      <button type = "submit">Post</button>
    </div>
  );
}

export default BulletinForm;