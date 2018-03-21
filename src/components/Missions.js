import React, { Component } from 'react';
import Mission from './Mission';
import Loading from './Loading';
import { connect } from 'react-redux';
import { fetchAndHandleLogs } from '../actions/logs';

class Missions extends Component {

  constructor(props){
    super(props);
    this.state = {
      n: 100
    };
  }

  // handleOnScroll = () => {
  //   var pageHeight=document.documentElement.offsetHeight,
  //   windowHeight=window.innerHeight,
  //   scrollPosition=window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
  //
  //   if (pageHeight <= windowHeight+scrollPosition) {
  //     this.setState(() => ({
  //       n: this.state.n < 100 ? 100 : this.state.n + 10
  //     }), () => {
  //       if ( this.state.n < 100 ){
  //         this.props.dispatch(fetchAndHandleLogs(this.state.n))
  //       }
  //     });
  //   }
  // };

  componentDidMount(){
    this.props.dispatch(fetchAndHandleLogs(this.state.n));
    // window.addEventListener('scroll', this.handleOnScroll);
    // Add event listener to window scroll;

  }

  // componentWillUnmount(){
  //   window.removeEventListener('scroll', this.handleOnScroll, false);
  // }

  render(){
    const missions = this.props.logs.logs;
    const { isFetching } = this.props.logs;

    return (
      <div className="container mt-3 mb-0">
        <div className="row">
          <div className="col col-lg-6 offset-lg-3">
            {
              isFetching
              ? <Loading />
              : missions.map((mission) => <Mission key={mission.day} {...mission} />)
            }
          </div>
        </div>
      </div>
    );

  } // render

} // Missions

export default connect(state => ({logs: state.logs}))(Missions);
