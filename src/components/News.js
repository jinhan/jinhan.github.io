import React, { useContext } from 'react';
import css from 'index.css';

export default function News(props){
    return (
        <section id="news">
            <h1 className={"title"}>News</h1>
            <div className={"search"}>
                <input type={"search"} name={'news'} placeholder={"Search News..."}/>
            </div>
            <div className={"news-list"}>
                {NewsItems(props.news)}
            </div>
        </section>
    );
}

export function NewsItems(items){
    let news = items;
    news = news.slice(0,5);
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

export function handleNewsFilter(data){
    let newsSearch = document.querySelector('.search input[name="news"');
    newsSearch.addEventListener('input', function(event){
        console.log('value', this.value);
        if (this.value != ''){
            let filtered = data.news.filter(d => {
                let text = (d.title + ' ' + d.date);
                return text.toLowerCase().includes(this.value.toLowerCase());
            });
            document.querySelector('.news-list').innerHTML = NewsItems(filtered);
        } else {
            document.querySelector('.news-list').innerHTML = NewsItems(data.news);
        }
    });
}