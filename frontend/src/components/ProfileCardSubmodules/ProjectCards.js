import React, {useState, useEffect, useMemo} from 'react';
import axios from 'axios';

import styles from './ProjectCards.module.css';
import {baseUrl} from '../../config';

function ProjectCards ({ project_id }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const {data} = await axios.get(`${baseUrl}/app/projects`);
        setProjects(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const project = useMemo(() => {
    return projects.find(p => p.id === Number(project_id));
  }, [projects, project_id]);

  //empty template
  if (loading) return (
    <div className = {styles.project_window}>
      <div className = {styles.image_side}>
        Test
      </div>

      <div className = {styles.desc}>
        Testt
      </div>
    </div>
  );
  
  //content
  return (
    <>
      {project 
        ? (
          <div className = {styles.project_window}>
            <div className = {styles.image_side}>
              <img src = {project.imagelink} alt = "stuff"/>
            </div>

            <div className = {styles.desc}>
              <div className = "label">{project?.title}</div>
              <div className = {styles.indent}>
                <div className = "text">{project?.description}</div>
                <div className = {styles.tag}>
                  <div className = "text">{project?.status}</div>
                </div>
                <a href = {project?.links}>
                  <div>
                    <div className = "subtext">Link</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )
        : (
          <div className = {styles.project_window}>
            <div className = {styles.image_side}>
              Test2
            </div>

            <div className = {styles.desc}>
              Testt2
            </div>
          </div>
        )
      }
    </>
  );
}

export default ProjectCards;