import React, { Component } from 'react';
import {connect} from 'react-redux';
import {latestNews , otherNews , gallery} from '../action' ;
import { bindActionCreators} from 'redux' ;

//Component
import LatestNews from '../components/home/latestNews' ;
import OtherNews from '../components/home/otherNews' ;
import Gallery from '../components/home/gallery'

class Home extends Component {
    componentDidMount=()=>{
        this.props.latestNews()
        this.props.otherNews()
        this.props.gallery()
    }
    render() {
        return (
            <div>
                <LatestNews latest={this.props.article.latest} />
                <OtherNews others={this.props.article.other}/>
                <Gallery galleries={this.props.article.pics}/>
            </div>
        );
    }
}
 function mapStateToProps(state){
    //  console.log(state)
    return {
        article:state.article }
 }
 function mapDispatchToProps(dispatch){
     return bindActionCreators({latestNews , otherNews, gallery} , dispatch)
 }

export default connect(mapStateToProps ,mapDispatchToProps)(Home)