import React, {useState} from 'react';
import './App.css';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

function App() {
  const {markdown, setMarkdown } = useState('# Markdown Preview')
  return (
    <main>
      <section className='markdown'>
      </section>
      <textarea className='input' value={markdown} onChange={(e) => setMarkdown(e.target.value)}></textarea>
      <article className='result'>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
    </main>
  );
}

export default App;
