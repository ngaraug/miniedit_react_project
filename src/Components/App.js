import React , { useState, useEffect } from "react";
import Editor from "./editor";
// import Output from "./output";


function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
        `
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `
      )
    }, 200)
    return () => clearTimeout(timeout);
  }, [html, css, js])

  return (
    <>
      <div className="editor-container">
        <Editor 
          key = '1'
          title="HTML" 
          language="xml"
          value={html}
          onChange={setHtml}
        />

        <Editor 
          key = '2'
          title="CSS" 
          language="css"
          value={css}
          onChange={setCss}
        />

        <Editor 
          key = '3'
          title="JS" 
          language="javascript"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="output-container">
        {/* <Output /> */}
        <div className='output-pane'>
            <iframe
                srcDoc= {srcDoc}
                title='output'
                sandbox='allow-scripts' 
                frameborder="0"
                height="100%"
                width="100%"
            />
        </div>
        <div className="title-container">
          <div className="title"> 
            <h1>miniedit.</h1>
            <h4>project by gaurang mestry</h4>
          </div>
          <div className="title-description">
            <p>
              miniedit. is a small and fast HTML CSS and JS editor to test out code snippets.
            </p> 
          </div>
        </div>
      </div>
    </>
  );  
}

export default App;
