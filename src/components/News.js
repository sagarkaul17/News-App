import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8, 
        category: 'general',
      }

      static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number, 
        category: PropTypes.string,
      }

    constructor(){
        super();
        this.state = {
            articles : [],
            loading: false,
            page: 1
        }
    }


    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=5cf4e296897c41bf8321150c826abd9f&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults,loading: false})
    }

    handleNext = async () => {
        // console.log("Next");
        // if(Math.ceil(this.state.totalResults/this.props.pageSize)<this.state.page+1){

        // }
        // else
        // {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=5cf4e296897c41bf8321150c826abd9f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page+1,
            articles: parsedData.articles,
            loading: false
        })
    }

    handlePrevious = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=5cf4e296897c41bf8321150c826abd9f&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page-1,
            articles: parsedData.articles,
            loading: false
        })
    }

    render() {
        return (
            <>
            <div className="container my-3">
                <h1 style={{textAlign: "center"}}>NewsMonkey - Top {this.props.category?this.capitalizeFirstLetter(this.props.category):""} Headlines</h1>
                {this.state.loading && <Loading/>}
                <div className="row my-3">
                        {!this.state.loading && this.state.articles.map((element)=>{
                            return <div className="col-md-4" key={element.url}> 
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} />
                            </div>
                        })} 
                </div>
            </div>
            <div className="container d-flex justify-content-between my-2">
                <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
                <button type="button" disabled={Math.ceil(this.state.totalResults/this.props.pageSize)<this.state.page+1} className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
            </div>
            </>
        )
    }
}

export default News
