var SM = require('javascript-state-machine');
var vis = require('javascript-state-machine/lib/visualize');


var panel = new SM({
    init: 'idle',
    transitions: [
        { name: 'step', from: 'read', to: 'write' },
        { name: 'step', from: 'read', to: 'update' },
        { name: 'step', from: 'update', to: 'write' },
        { name: 'step', from: 'read', to: 'update' },
        { name: 'reset', from: ['read', 'write', 'update', 'thrash'], to: 'idle' },
    ]
});

vis(panel);