import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e.target[0]);
    }

    return <div className=''>
        <div className="d-flex w-100 bg-black px-5 py-4 justify-content-evenly" >
            <Link className='' >Home</Link>
            <Link className='' >Movies</Link>
            <Link className='' >TV</Link>
            <Link className='' >Watchlater</Link>
            <Link className='' >Login/logout</Link>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder=' Search .....' className='bg-transparent border-end-0 boder-start-0 border-top-0 border-bottom text-white w-50' />
                <button type="submit" className='bg-transparent border-0 text-white'>🔎</button>
            </form>
        </div>
    </div>
}
