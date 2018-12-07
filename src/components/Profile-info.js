import React, {Component} from 'react';

class Article extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        // this.handleClick = handleClick.bind(this);
    }

    // state = {
    //     isOpen: true
    // }

    render() {
        const {contentdata} = this.props;
        const body = this.state.isOpen && <section>{contentdata.text}</section>;
        return (
            <div>
                <h2>{contentdata.title}</h2>
                <button onClick={this.handleClick}>
                    {this.state.isOpen ? 'close' : 'open'}
                </button>
                {body}
                <h3>creation date: {(new Date(contentdata.date)).toDateString()}</h3>
            </div>
        );
    }

    handleClick = () => {
        console.log('----', 'clicked');
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article;