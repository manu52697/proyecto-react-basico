import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Root: React.FunctionComponent = () => {

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
    );
}

export default Root;
