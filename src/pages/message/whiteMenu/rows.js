export default {
    get: function(rows) {
        console.log(rows)
        return this[rows];
    },
    profile: ['New group', 'Profile', 'Archived'],
    Everyone: ['VVVIP', 'VVVIP', 'Oyster Gand'],
    chat: ['Archive chat', 'Mark as unread'],
    message: ['Forward message', 'Insert note'],
    input: ['hot', 'hotpot'],
    time: ['21', 'March 2020', '21', '31'],
    send: ['Send now', 'Schedule', 'Insert note']
}