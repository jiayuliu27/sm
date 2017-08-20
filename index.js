// paintdom.js
import SM from 'javascript-state-machine';
import vis from 'javascript-state-machine/lib/visualize'

var panel = SM.factory({
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