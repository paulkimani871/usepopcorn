import React from 'react'

function Box({children}) {
    const [isOpen, setIsOpen] = React.useState(true)
  return (
    <div className="box">
        <button
            className="btn-toggle"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? "–" : "+"}
          </button>
        {isOpen &&children}
    </div>
  )
}

export default Box