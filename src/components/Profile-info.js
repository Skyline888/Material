import React, {PureComponent} from 'react';

class Article extends PureComponent{
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    // componentWillReceiveProps(nextProps) {
    //     if(nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
    //         isOpen: nextProps.defaultOpen
    //     })
    // }

    render() {

        const {contentitemdata, isOpen, onButtonClick} = this.props;
        const body = isOpen && <section>{contentitemdata.text}</section>;
        // console.log(isOpen);
        return (
            <div>
                <h2 onClick={this.changeCounter}>
                    {contentitemdata.title}
                    clicked {this.state.count}
                </h2>
                <button onClick={onButtonClick}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {body}
                <h3>creation date: {(new Date(contentitemdata.date)).toDateString()}</h3>
            </div>
        );
    }

    changeCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    };

    // handleClick = () => {
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     })
    // };
}

export default Article;