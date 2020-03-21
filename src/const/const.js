export const thead = {
    Campaign: 370,
    'Targeted segment': 350,
    'Start Time': 315,
    Delivered: 140,
    Read: 140,
    Replied: 140,
    Action: 140
};

export const tbody = () => {
    const arr = [];
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
    return arr;
}