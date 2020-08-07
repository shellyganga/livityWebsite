import React, {Component} from 'react';
import ReactDoM from 'react-dom';
import * as V from 'victory';
import {VictoryLine, VictoryChart, VictoryAxis, VictoryTheme, VictoryAnimation, VictoryTransition} from 'victory';

class VictoryGraph extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      xy: props.xy,
      //xy: [{x: xval, y: yval}, {...}, ...]
      tick: props.tick
      //tick: ["lable1", "lable2", "...", ...]
    }
  }

  render(){
    if(this.state.tick.length > 0){
      console.log(this.state.xy)
      console.log(this.state.tick)
      return(
        <div>
          <VictoryChart
            theme = {VictoryTheme.material}
            domainPadding = {20}
            animate = {{duration:500}}
          >
            <VictoryAxis
              tickValues={this.state.tick}
            />
            <VictoryAxis
              dependentAxis
            />
            <VictoryLine
              interpolation= "natural"
              style={{ data: { stroke: "#add8d0",strokeWidth: 5, strokeLinecap: "round" } }}
              data = {this.state.xy}
              x = {'date'}
              y = {'footprint'}
            />
          </VictoryChart>
        </div>
      )
    }/* else if(this.state.tick.length > 0) {
      return(
        <div><p>Only one value - not enough to graph!</p></div>
      )
    }*/ else {
      return(<div/>)
    }
  }
}

export default VictoryGraph;
