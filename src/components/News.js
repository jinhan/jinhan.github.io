import React, { useRef, useEffect, useState } from 'react';

export default function News(props){
    const newsSearchRef = useRef();
    const [newsItems, setNewsItems] = useState(props.news);

    function NewsItems(){
        let news = newsItems;
        news = news.slice(0,5);
        console.log(news);
        return news.map(d => (
            <div className={"row"}>
                <div className={"col-8"}>
                    {d.title}
                </div>
                <div className={"col-4"}>
                    {d.date}
                </div>
            </div>
        ));
    }

    function handleNewsFilter(data){
        newsSearchRef.current.addEventListener('input', function(event){
            console.log('value', this.value);
            if (this.value !== ''){
                let filtered = data.news.filter(d => {
                    let text = (d.title + ' ' + d.date);
                    return text.toLowerCase().includes(this.value.toLowerCase());
                });
                setNewsItems(filtered);
                NewsItems();
            } else {
                setNewsItems(data.news);
                NewsItems();
            }
        });
    }

    useEffect(() => {
        handleNewsFilter(props);
    }, []);

    console.log(props);
    return (
        <section id="news">
            <h1 className={"title"}>News</h1>
            <div className={"search"}>
                <input type={"search"} name={'news'} placeholder={"Search News..."} ref={newsSearchRef}/>
            </div>
            <div className={"news-list"}>
                {NewsItems(props.news)}
            </div>
        </section>
    );
}


