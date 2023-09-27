import Link from 'next/link'
import React from 'react'

export default function LeftAside() {
    return (
        <React.Fragment>
            <aside className="col-3 a_tbdr" >
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" href="/flight">The Flight</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/city">The City</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/island">The Island</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/food">The Food</Link>
                    </li>
                </ul>
            </aside>
        </React.Fragment>
    )
}
