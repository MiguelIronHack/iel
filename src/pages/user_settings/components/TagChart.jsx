import React, { Component } from "react";
import { Pie, Line, Bar } from "react-chartjs-2";
import { getAllCategories } from "../../../api/categoryHandler";

export class TagChart extends Component {
  state = {
    chartData: {}
  };

  componentDidMount() {
    getAllCategories()
      .then(res => res.data.map(c => this.setState({ chartData: c.tags })))
      .catch({});
  }
  render() {
    console.log(this.state.chartData);

    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          width={100}
          height={50}
          options={{
            title: {
              display: true,
              text: "Largest Cities Europe"
            },
            legend: {
              display: true,
              position: "right"
            }
          }}
        />
      </div>
    );
  }
}

export default TagChart;
