import React, {PureComponent} from "react";
import ArticleList from './ArticaleList';
import simpledata from '../json-data';

class Content extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            reverted: false
        };
    }


    render() {
        // console.log('---', 1);
        // const simpledatelist =  this.state.reverted ? simpledata.reverse() : simpledata;
        // console.log('----', 2, this.state, simpledata.map( simpledataitem =>  simpledataitem.id ));
        return (
            <div>
                <h1>App test web</h1>
                <button onClick={this.revert}> Revert </button>
                <ArticleList contentdata = { this.state.reverted ?  simpledata.slice().reverse() : simpledata }/>
            </div>
        );
    }

    revert = () => {
        this.setState({
            reverted: !this.state.reverted
        });
    }
}

export default Content;