<template>
    <canvas id="myChart" width="400" height="400"></canvas>
</template>

<script>
import {Line} from "vue-chartjs"
import Chart from 'chart.js/auto';

const ctx = 'myChart';

export default {
    extends: Line,
    props: {
        label: {
            type: String
        },
        xData:{
            type: Array
        },
        yData:{
            type: Array
        },
        options: {
            type: Object
        }
    },

    mounted() {
        console.log(this.yData)
        const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: this.xData,
            datasets: [{
                label: '# of Votes',
                data: this.yData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })

    myChart
    }
}
</script>