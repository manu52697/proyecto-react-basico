import type React from 'react'

const Loader: () => React.JSX.Element = () => {
  return (
        <div className="spinner-border text-secondary" role="status">
            <span className="sr-only visually-hidden">Loading...</span>
        </div>
  )
}

export default Loader
