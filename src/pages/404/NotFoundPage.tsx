import type React from 'react'
import { useRouteError } from 'react-router-dom'

const NotFoundPage: React.FunctionComponent = () => {
  const error = useRouteError()
  console.error(error)

  return (
        <div>
            <h1>Oooops! We couldn&apos;t find that!</h1>
        </div>
  )
}

export default NotFoundPage
