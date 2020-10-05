import React from 'react';
import './Detail.css';
class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
        return <div className = "detail__container">
                    <span>{ location.state.title}</span>
                    <span>{ location.state.year}</span><br/>
                    <img src = { location.state.poster}></img><br/>
                    <span>{ location.state.summary}</span><br/>
                    <span className = "last__span">{ location.state.genres}</span><br/><br/><br/>
                </div>
        } else {
            return null;
        }
    }
}

export default Detail;