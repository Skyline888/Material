import React, {PureComponent} from 'react';
import Article from '../Profile-info';

class ArticleList extends PureComponent {
    state = {
      openArticlerId: null
    };

    render() {
        // console.log('---', 2);
        const {contentdata} = this.props;
        // console.log({contentdata});
        const articaleElements = contentdata.map( contentdata =>
            <li key = {contentdata.id}>
                <Article contentitemdata = {contentdata}
                         isOpen = {this.state.openArticlerId === contentdata.id}
                         onButtonClick = {this.handleClick.bind(this, contentdata.id)}
                />
            </li>
        );
        // console.log(this.state.openArticlerId === contentdata.id, this.state.openArticlerId, contentdata.id);
        return (
            <ul>
                { articaleElements }
            </ul>
        );
    }

    handleClick = openArticlerId => this.setState({
        openArticlerId: this.state.openArticlerId === openArticlerId ? null : openArticlerId
    })

}

export default ArticleList;
