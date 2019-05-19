import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import { getAllCategories } from "../../api/categoryHandler";

export class TagChart extends Component {
  state = {
    chartData: {
      labels: ["Coding", "Nature", "Music"],
      datasets: [
        {
          label: "People enrolled",
          data: [3, 2, 1, 0],

          backgroundColor: [
            "rgba(255, 99, 132, 0.9)",
            "rgba(54, 162, 235, 0.9)",
            "rgba(255, 206, 86, 0.9)"
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
    return (
      <div className="chart">
        <Pie
          data={this.state.chartData}
          width={500}
          height={200}
          options={{
            title: {
              display: true,
              text: "Courses enrolled by type",
              fontColor: "hsl(0, 0%, 96%)"
            },
            legend: {
              display: true,
              position: "right",
              labels: {
                fontColor: "hsl(0, 0%, 96%)"
              }
            }
          }}
        />
      </div>
    );
  }
}

export default TagChart;
