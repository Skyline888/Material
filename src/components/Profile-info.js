import React from 'react';

function Article(props) {
    const {contentdata} = props;
    console.log('----', props);
    const body = <section>{contentdata.text}</section>;
    return (
        <div>
            <h2>{contentdata.title}</h2>
            {body}
            <h3>creation date: {(new Date(contentdata.date)).toDateString()}</h3>
        </div>
    );
}

export default Article;