import React, { Component } from "react";
import { Pie, Line, Bar } from "react-chartjs-2";
import { getAllCategories } from "../../../api/categoryHandler";

export class TagChart extends Component {
  state = {
    chartData: {
      labels: ["Coding", "Nature", "Music"],
      datasets: [
        {
          label: "People enrolled",
          data: [3, 2, 1, 0],

          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)"
            // "rgba(75, 192, 192, 0.6)"
          ]
        }
      ]
    }
  };

  componentDidMount() {
    getAllCategories()
      .then(res => res.data.map(c => console.log(c.name)))
      .catch({});
  }
  render() {
    console.log(this.state.chartData);

    return (
      <div className="chart">
        <Pie
          data={this.state.chartData}
          width={500}
          height={200}
          options={{
            title: {
              display: true,
              text: "Most famous tags",
              fontColor: "#fff"
            },
            legend: {
              display: true,
              position: "right",
              labels: {
                fontColor: "#fff"
              }
            }
          }}
        />
      </div>
    );
  }
}

export default TagChart;
