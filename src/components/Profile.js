import React, {Component} from "react";
import Article from './Profile-info';
import simpledata from '../json-data';

class Content extends Component {
    render() {
        return (
            <div>
                <h1>App test web</h1>
                <Article contentdata={simpledata[0]} foo="bar" flag={true} />
            </div>
        );
    }

}

export default Content;