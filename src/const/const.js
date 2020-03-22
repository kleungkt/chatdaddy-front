export const thead = [
    {
        Campaign: 370,
        Message: 420,
        'Start time': 315,
        'Delivery Progress': 315,
        Action: 140
    },
    {
        Campaign: 370,
        Message: 420,
        'Targeted segment': 350,
        'Start time': 315,
        Action: 140
    },
    {
        Campaign: 350,
        'Targeted segment': 340,
        'Start Time': 290,
        Delivered: 140,
        Read: 140,
        Replied: 140,
        Action: 140
    }
];

export const tbody = (index) => {
    let arr = [];
    switch(index) {
        case 0 :

        break;
        case 2 :
            for(let i = 1; i < 31; i ++) {
                arr.push([
                    'Lunar New Year Greetings',
                    'April new Customer (89)',
                    i+' Mar 2020, 18.00',
                    [Math.floor(Math.random() * 1000), 1256],
                    [Math.floor(Math.random() * 800), 1256],
                    [Math.floor(Math.random() * 100), 1256],
                ]);
            }
        break;
        default : arr = [];
    }
    
    return arr;
}