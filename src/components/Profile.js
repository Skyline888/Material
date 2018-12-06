import React from "react";
import Article from './Profile-info';
import simpledata from '../json-data';

function Content() {
    return (
        <div>
            <h1>App test web</h1>
            <Article contentdata={simpledata[0]} foo="bar" flag={true} />
        </div>
    );
}

export default Content;