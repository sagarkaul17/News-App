import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl,source} = this.props;
        return (
            <div className="card" >
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>
                    {source}
                </span>
                <img src={imageUrl} style={{height:250}}className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                </div>
            </div>
        )
    }
}

export default NewsItem
