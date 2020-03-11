import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import DataContext from 'components/DataContext';

function Navbar(){
    const data = useContext(DataContext);
    const items = Object.keys(data);

    let location = useLocation();
    var isProject = location.pathname.includes('/project');
    // console.log(isProject);
    return (
        <nav>
            <ul>
                {isProject ? (
                    (<li key={isProject}>
                        {/* <a href=".">Go Back</a> */}
                        <Link to="/">Go Back</Link>
                    </li>)
                    ):
                    (items.map(d=>
                        (<li key={d}>
                            {/* <a href={"#" + d}>{d.toUpperCase()}</a> */}
                            <Link to={"#" + d}>{d.toUpperCase()}</Link>
                        </li>
                    ))
                )}
            </ul>
        </nav>
    );
}

export default Navbar;