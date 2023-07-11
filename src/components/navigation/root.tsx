import { Link, Outlet } from 'react-router-dom'

const Root: () => React.JSX.Element = () => {
  return (
        <>
            <aside className='d-flex flex-column App'>
                <div className='App-intro'>
                    <Link to='/home'>| HOME |</Link>
                    <Link to='/about'>| ABOUT |</Link>
                    <Link to='/faqs'>| FAQS |</Link>
                    <Link to='/login'>| LOGIN |</Link>
                </div>
            </aside>

            <main>
                <Outlet></Outlet>
            </main>
        </>
  )
}

export default Root
