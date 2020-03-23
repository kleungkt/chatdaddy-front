export const thead = {
    'Name / Whatsapp': 280,
    'Last Seen': 180,
    Tags: 230,
    'Warm Score': 200,
    'Message Sent': 200,
    'Message Received': 240,
    Action: 210
};

export const tbody = () => {
    const arr = [];
    for(let i = 1; i < 31; i ++) {
        arr.push([
            ['Zenith Ho', '+852 64237232'],
            'Mar '+Math.floor(Math.random() * 20)+', 2020',
            ['Oysters', 'VIP', 'Personal'],
            'Cold',
            Math.floor(Math.random() * 1235),
            Math.floor(Math.random() * 130),
        ]);
    }
    return arr;
};