import React from 'react';

const ExamplePrompts = ({ prompts }) => {
  return (
    <div>
      <h3>Example Prompts</h3>
      <ul>
        {prompts.map((prompt, index) => (
          <li key={index}>{prompt}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExamplePrompts;
