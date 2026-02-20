import {useState} from 'react';
import axios from 'axios';

import {baseUrl} from '../config';

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
    <>
      <form onSubmit = {handleSubmit}>
        <input
          type = "text"
          placeholder = "Enter name..."
          value = {name}
          onChange = {
            (e) => setName(e.target.value)
          }
        />
        <textarea
          type = "text"
          placeholder = "Enter content..."
          value = {name}
          onChange = {
            (e) => setContent(e.target.value)
          }
        />
      </form>
    </>
  );
}

export default BulletinForm;