import React from 'react'

export default function Output() {
  return (
    <div className='output-pane'>
        <iframe
            title='output'
            sandbox='allow-script' 
            frameborder="0"
            height="100%"
            width="100%"
        />
    </div>
  )
}
