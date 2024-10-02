import React from 'react';
import styles from './ExamplePrompts.module.css';

const ExamplePrompts = ({ prompts }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>Example Prompts</h3>
      <ul className={styles.ul}>
        {prompts.map((prompt, index) => (
          <li key={index} className={styles.li}>{prompt}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExamplePrompts;
