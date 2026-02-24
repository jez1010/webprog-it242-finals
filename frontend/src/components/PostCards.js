import * as functions from '../functions.js';
import styles from './PostCards.module.css';

function PostCards({ posts }) {
  return (
    <>
      {
        posts.map(
          (post) => (
            <div key = {post.id} className = {styles.bulletin_post}>
              <span className = {styles.anon_name}>{post.name}</span> <span className = {styles.post_date}>{functions.formatDate(post.created_at)} {functions.formatTime(post.created_at)}</span>
              <p>{post.content}</p>
            </div>
          )
        )
      }
    </>
  );
}

export default PostCards;