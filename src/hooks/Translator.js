import React, { useState } from 'react'

const Translator = () => {
    const [srcLanguage, setSrcLanguage] = useState('en');
    const [tgtLanguage, setTgtLanguage] = useState('es');
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    const translate = async (e) => {
        e.preventDefault();
        const url = 'https://text-translator2.p.rapidapi.com/translate';
        const options = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': 'ea86ec0756msh17e532df1e1c9c9p170c20jsnebad0933d91c',
                'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                source_language: srcLanguage,
                target_language: tgtLanguage,
                text: text
            })
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result.data.translatedText);
            setTranslatedText(result.data.translatedText);
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <div className='container m-5 p-4 rounded border border-secondary shadow'>
        <h1 className='text-center'>Translator App</h1>
        <form onSubmit={translate}>
            <div className="mb-3">
                <label className="form-label">Text</label>
                <input type="text" className="form-control" value={text} onChange={(e) => setText(e.target.value)} />
            </div>

            <div className="mb-3">
                <label className="form-label">Source Language</label>
                <select className='form-select' value={srcLanguage} onChange={(e) => setSrcLanguage(e.target.value)}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="te">Telugu</option>
                    <option value="hi">Hindi</option>
                    <option value="fr">French</option>
                </select>
            </div>

            <div className="mb-3">
                <label className="form-label">Target Language</label>
                <select className='form-select' value={tgtLanguage} onChange={(e) => setTgtLanguage(e.target.value)}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="te">Telugu</option>
                    <option value="hi">Hindi</option>
                    <option value="fr">French</option>
                </select>
            </div>
            
            <div className='mb-3 p-2 bg-light'>
                {translatedText ? <p>{translatedText}</p> : <p></p>}
            </div>

            <button type='submit' className='btn btn-success'>Translate</button>
        </form>
    </div>
  )
}

export default Translator
