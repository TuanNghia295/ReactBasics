import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import useDebounce from './hooks/useDebounce';

function App() {
    const [content, setContent] = useState('markdown preview');
    const debounceSearch = useDebounce(content, 5000);

    const handleChange = (e) => {
        setContent(e.target.value);
        console.log(content);
    };

    return (
        <section className="markdown">
            <textarea
                className="input"
                style={{
                    width: 761,
                    height: 625,
                }}
                value={`${content}`}
                onChange={handleChange}
            ></textarea>

            <article className="result">
                <h1>{debounceSearch}</h1>
            </article>
        </section>
    );
}

export default App;
