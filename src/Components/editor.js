import React from 'react';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/duotone-dark.css';

import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'

import {Controlled as ControlledEditor} from 'react-codemirror2'



export default function Editor(props) {
    const {
        title,
        language,
        value,
        onChange,

    }   = props

    function handleChange(editor, data, value){
        onChange(value)
    }

  return (
    <div className='editor'>
        <div className='editor-pos-reference'>
            <div className='editor-title'>
                <span className='language'>{title}</span>
                <button>Exp.</button>
            </div>
            <div className='editor-window'>
                <ControlledEditor
                    onBeforeChange={handleChange}
                    value={value}
                    // className='editor-window' 
                    options={
                        {
                            lineWrapping:true,
                            mode: language,
                            lineNumbers: true,
                            lint:true,
                            theme:'duotone-dark'
                        }
                    } 
                />
            </div>
        </div>
    </div>
  );
}

// themes: dracula , darcula
    