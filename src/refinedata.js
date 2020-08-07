import React, {Component} from 'react';
import ReactDoM from 'react-dom';
import firebase from './Firestore';
import VictoryGraph from './victorygraph'


const Refine = (props) => {

  let data = props.data;
  let xy = [];
  let tick = [];
  let tempxy = data;
  let newxy = [];
  var index = 1;
  tempxy.map(variable => {
    newxy.push({date: index, footprint: variable.value});
    index++
  });

  let tickvalues = [];
  var date;

  tempxy.map(variable => {
    date = new Date(variable.timestamp.toDate());
    tickvalues.push((date.getMonth()+1) + "/" + date.getDate());
  });

  xy = newxy;
  tick = tickvalues;

  return(
    <div>
      <VictoryGraph xy={xy} tick={tick} />
    </div>
  )

}



/*
class Refine extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      data: props.data,
      xy: [],
      tick: []
    }
  }

  // componentDidUpdate(prevProps) {
  //   if(this.props != prevProps){
  //     this.setState({
  //       data: this.props.data
  //     })
  //   }
  // }

  componentDidMount(){
    //from data to array of x and y data in json {x: x, y: y}
    //from data to tick value (array of x-value label)
    console.log(this.state.data)

    let tempxy = this.state.data;
    let newxy = [];
    var index = 1;
    tempxy.map(variable => {
      newxy.push({date: index, footprint: variable.value});
      index++
    });

    let tickvalues = [];
    tempxy.map(variable => {
      var date = new Date(Date(variable.timestamp));
      tickvalues.push((date.getMonth()+1) + "/" + date.getDate());
    });

    console.log(newxy);
    console.log(tickvalues);
    this.setState({
      xy: newxy,
      tick: tickvalues
    })
    console.log(this.state.xy);
    console.log(this.state.tick);

  }

  render(){
    if (this.state.xy.length > 0, this.state.tick.length > 0) {
      return(
        <div>
          <VictoryGraph xy={this.state.xy} tick={this.state.tick} />
        </div>
      )
    } else {
      return(
        <div />
      )
    }
  }

}
*/
export default Refine;
