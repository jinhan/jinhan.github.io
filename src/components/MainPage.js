import React, { useContext } from 'react';
import About from 'components/About';
import News from 'components/News';
import Projects from 'components/Projects';
import DataContext from 'components/DataContext';

function MainPage() {
    const data = useContext(DataContext);
   
    return (
        <React.Fragment>
            <About about={data.about}/>
            <News news={data.news} />
            <Projects projects={data.projects}/>
            <footer>Copyright © 2020 Jinhan Choi</footer>
        </React.Fragment>
    );
}

export default MainPage;