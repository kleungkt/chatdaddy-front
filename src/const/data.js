const paiColors = ['#324d65', '#90aabf', '#00a492', '#0094c5', '#f7fafc'];
const paiLabels = ['Build your database', 'Interact with people', 'Deliver marketing campaigns', 'Set up automations', 'Other'];
const paiValues = [11.32, 8.18, 17.41, 7.09, 55];

export const pieData = props => {
    const arr = [];
    for(let i = 0; i < paiColors.length; i ++) arr.push({
        value: paiValues[i],
        color: paiColors[i],
        // highlight: "#324d65", !hover color!
        label: paiLabels[i]
    });
    
    return {
        data: arr,
        options: {
            percentageInnerCutout : 70
        },
        width: 285,
        height: 285
    };
}

const lineLabels = ['Contacts', 'Conversations', 'Message In', 'Message Out', 'Response Time (In)', 'Response Time (Out)'];
const lineTotals = [1236, 12364, 4085, 8257, 15896, 1122];

export const lineData = props => {
    const info = [], data = [];
    for(let i = 0; i < lineLabels.length; i ++) {
        info.push({
            label: lineLabels[i],
            total: lineTotals[i],
            view: true
        });
        data.push({
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                datasets: [
                    {
                        label: "Days",
                        fillColor: '#1192C4',
                        strokeColor: '#1192C4',
                        pointColor: '#1192C4',
                        pointStrokeColor: '#1192C4',
                        pointHighlightFill: '#1192C4',
                        pointHighlightStroke: '#1192C4',
                        data: getVal()
                    }
                ],
            },
            options: {
                showScale: false,
                bezierCurve: false,
                datasetFill: false,
                pointDotRadius: 4,
                pointDotStrokeWidth: 3
            },
            width: 430,
            height: 55
        });
    }
    return { data, info };
}

const getVal = () => {
    let arr = [];
    for(let i = 0; i < 6; i ++) {
        arr.push(Math.floor(Math.random() * 5));
    }
    return arr;
}