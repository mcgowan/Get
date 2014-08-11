var debug = {};

var Timeline = function(scope, canvas) {
    this.scope = scope;
    this.canvas = document.getElementById(canvas);
}

Timeline.prototype = function() {

    var timeline = {};

    timeline.itemType = Object.freeze({ 
        contact: { 
            color: '#89AFD1',
            icon: '\uf098',
            toString: function(){ return 'contact'; },
        }, product: {
            color: '#44B6AE',
            icon: '\uf1b2',
            toString: function(){ return 'product'; },
        }, balance: {
            color: '#44B6AE',
            icon: '\uf19c',
            toString: function(){ return 'balance'; },
        }, shippingOrder: {
            color: '#AA9EC1',
            icon: '\uf0d1',
            toString: function(){ return 'shippingOrder'; },
        }, workOrder: {
            color: '#578EBE',
            icon: '\uf0ad',
            toString: function(){ return 'workOrder'; },
        }, outage: {
            color: '#EB8B8B',
            icon: '\uf071',
            toString: function(){ return 'outage'; },
        }});

    timeline.matchType = Object.freeze({ range: {}, day: {} });
    timeline.textAlign = Object.freeze({ left: {}, middle: {}, right: {} });

    // <option value="0">Unhealthy</option>
    // <option value="1">Healthy</option>
    // <option value="2">New Customer</option>
    // <option value="2">Slightly Problematic</option>

    timeline.customers = [{
            // unhealthy
            items: [ 
                { type: 'header', icon: timeline.itemType.balance.icon, text: 'Account Balance', drawDates: true },
                { type: 'reserve', lines: .5 },
                { type: 'balance', itemType: timeline.itemType.balance, lines: 4, notDue: 129.99, due: 129.99, pastDue: 389.97, balance: { min: 0, max: 649.95 }, items: [
                    {   day:    -99 ,   b1: 0   ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -98 ,   b1: 0   ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -97 ,   b1: 0   ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -96 ,   b1: 0   ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -95 ,   b1: 129.99  ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -94 ,   b1: 129.99  ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -93 ,   b1: 129.99  ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -92 ,   b1: 129.99  ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -91 ,   b1: 129.99  ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -90 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -89 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -88 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -87 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -86 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -85 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -84 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -83 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -82 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -81 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -80 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -79 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -78 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -77 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -76 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -75 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -74 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -73 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -72 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -71 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -70 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -69 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -68 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -67 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -66 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    259.98  },
                    {   day:    -65 ,   b1: 129.99  ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -64 ,   b1: 129.99  ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -63 ,   b1: 129.99  ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -62 ,   b1: 129.99  ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -61 ,   b1: 129.99  ,   b2: 129.99  ,   b3: 129.99  ,   b4: 0   ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -60 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -59 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -58 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -57 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -56 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -55 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -54 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -53 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -52 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -51 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -50 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -49 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -48 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -47 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -46 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -45 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -44 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -43 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -42 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -41 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -40 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -39 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -38 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -37 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -36 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    389.97  },
                    {   day:    -35 ,   b1: 129.99  ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    519.96  },
                    {   day:    -34 ,   b1: 129.99  ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    519.96  },
                    {   day:    -33 ,   b1: 129.99  ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    519.96  },
                    {   day:    -32 ,   b1: 129.99  ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    519.96  },
                    {   day:    -31 ,   b1: 129.99  ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 0   ,   balance:    519.96  },
                    {   day:    -30 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    519.96  },
                    {   day:    -29 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    519.96  },
                    {   day:    -28 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    519.96  },
                    {   day:    -27 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    519.96  },
                    {   day:    -26 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    519.96  },
                    {   day:    -25 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    519.96  },
                    {   day:    -24 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    519.96  },
                    {   day:    -23 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    519.96  },
                    {   day:    -22 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    519.96  },
                    {   day:    -21 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    519.96  },
                    {   day:    -20 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    519.96  },
                    {   day:    -19 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    519.96  },
                    {   day:    -18 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    519.96  },
                    {   day:    -17 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    519.96  },
                    {   day:    -16 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    519.96  },
                    {   day:    -15 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    519.96  },
                    {   day:    -14 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    519.96  },
                    {   day:    -13 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    519.96  },
                    {   day:    -12 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    519.96  },
                    {   day:    -11 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    519.96  },
                    {   day:    -10 ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    519.96  },
                    {   day:    -9  ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    519.96  },
                    {   day:    -8  ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    519.96  },
                    {   day:    -7  ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    519.96  },
                    {   day:    -6  ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    519.96  },
                    {   day:    -5  ,   b1: 0   ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    519.96  },
                    {   day:    -4  ,   b1: 129.99  ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    649.95  },
                    {   day:    -3  ,   b1: 129.99  ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    649.95  },
                    {   day:    -2  ,   b1: 129.99  ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    649.95  },
                    {   day:    -1  ,   b1: 129.99  ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    649.95  },
                    {   day:    0   ,   b1: 129.99  ,   b2: 129.99  ,   b3: 129.99  ,   b4: 129.99  ,   b5: 129.99  ,   balance:    649.95  },                    
                ]},
                { type: 'reserve', lines: .5 }, 
                // { type: 'summary', alert: 1, icon: timeline.itemType.outage.icon, text: 'Outages', border: 'both', itemType: timeline.itemType.outage, matchType: timeline.matchType.day, items: [
                { type: 'header', alert: 2, icon: timeline.itemType.outage.icon, text: 'Outages', drawDates: false },
                { type: 'item', text: 'Network Outages', itemType: timeline.itemType.outage, matchType: timeline.matchType.day, items: [ 
                    { day: -13, status: 2, items: [
                        { type: 1, status: 2, reportedTime: moment([2014, 1, 1, 12, 54, 23, 0]), resolvedTime: moment([2014, 1, 1, 12, 54, 23, 0]) },
                        { type: 2, status: 2, reportedTime: moment([2014, 1, 1, 12, 54, 23, 0]), resolvedTime: moment([2014, 1, 1, 12, 54, 23, 0]) },
                        { type: 1, status: 2, reportedTime: moment([2014, 1, 1, 12, 54, 23, 0]), resolvedTime: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                    { day: -2, status: 1, items: [
                        { type: 1, status: 1, reportedTime: moment([2014, 1, 1, 12, 54, 23, 0]), resolvedTime: undefined },
                        { type: 1, status: 1, reportedTime: moment([2014, 1, 1, 12, 54, 23, 0]), resolvedTime: undefined },
                    ]},
                ]},
                { type: 'reserve', lines: .5 }, 
                { type: 'header', icon: timeline.itemType.product.icon, text: 'Hardware Products', drawDates: false },
                { type: 'item', text: 'Decoder', status: 2, itemType: timeline.itemType.product, 
                    properties: [ 
                        { text: 'String 1', value: 'Some Value' },
                        { text: 'String 2', value: 'Some Value' },
                        { text: 'Date 1', value: moment([2014, 1, 1, 12, 54, 23, 0]) },
                        { text: 'Date 2', value: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ],
                    items: [ 
                    { day: -180, status: 1 },
                    { day: -5, status: 2, items: [
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                        { type: 5228, status: 2, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                        { type: 5228, status: 3, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                ] },
                { type: 'item', text: 'HD Decoder', status: 3, itemType: timeline.itemType.product, 
                    properties: [ 
                        { text: 'String 1', value: 'Some Value' },
                        { text: 'String 2', value: 'Some Value' },
                        { text: 'Date 1', value: moment([2014, 1, 1, 12, 54, 23, 0]) },
                        { text: 'Date 2', value: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ],
                    items: [ 
                    { day: -8, status: 1 },
                    { day: -5, status: 3, items: [
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 02, 15, 0]) },
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 05, 54, 0]) },
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 02, 15, 0]) },
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 05, 54, 0]) },
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                ] },
                { type: 'item', text: 'Smartcard', status: 1, itemType: timeline.itemType.product, items: [ 
                    { day: -180, status: 1 },
                    { day: -22, status: 1, items: [
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                    { day: -12, status: 1, items: [
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                    { day: -5, status: 7, items: [
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                    { day: -4, status: 6, items: [
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                    { day: -3, status: 1, items: [
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                    { day: -2, status: 1, items: [
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                ] },
                { type: 'reserve', lines: .5 }, 
                { type: 'header', icon: timeline.itemType.product.icon, text: 'Software Products', drawDates: false },
                { type: 'item', text: 'TV Basic', status: 1, itemType: timeline.itemType.product, items: [ 
                    { day: -180, status: 1 },
                ] },
                { type: 'item', text: 'TV Gold Package', itemType: timeline.itemType.product, items: [ 
                    { day: -180, status: 1 },
                    { day: -10, status: 2, items: [
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                    { day: -9, status: 5, items: [
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                    { day: -4, status: 5, items: [
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                    { day: -3, status: 0 },
                ] },
                { type: 'item', text: 'TV Silver Package', status: 1, itemType: timeline.itemType.product, items: [ 
                    { day: -10, status: 4, items: [
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                    { day: -9, status: 1, items: [
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                ] },
                { type: 'item', text: 'VoIP Basic', status: 2, itemType: timeline.itemType.product, items: [ 
                    { day: -10, status: 1, items: [
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                    { day: -7, status: 2, items: [
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                    { day: -6, status: 2, items: [
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                    { day: -5, status: 0},
                ] },
                { type: 'reserve', lines: .5 }, 
                // { type: 'summary', alert: 1, icon: timeline.itemType.contact.icon, text: 'Contacts', border: 'both', itemType: timeline.itemType.contact, matchType: timeline.matchType.day, items: [
                { type: 'header', alert: 2, icon: timeline.itemType.contact.icon, text: 'Contacts', drawDates: false },
                { type: 'item', text: 'All Contacts', itemType: timeline.itemType.contact, matchType: timeline.matchType.day, items: [ 
                    { day: -10, status: 3, items: [
                        { id: 873465, type: 1, status: 3, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                        { id: 873465, type: 2, status: 3, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                        { id: 873465, type: 3, status: 3, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                    { day: -5, status: 3, items: [
                        { id: 873465, type: 1, status: 3, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                    { day: -4, status: 1, items: [
                        { id: 873465, type: 1, status: 3, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                        { id: 873465, type: 1, status: 1, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                ]},
                { type: 'reserve', lines: .5 }, 
                { type: 'header', icon: timeline.itemType.workOrder.icon, text: 'Work Orders', drawDates: false },
                { type: 'item', text: 'Installation', itemType: timeline.itemType.workOrder, 
                    properties: [ 
                        { text: 'Date 1', value: moment([2014, 1, 1, 12, 54, 23, 0]) },
                        { text: 'String 1', value: 'Some Value' },
                        { text: 'String 2', value: 'Some Value' },
                    ],
                    items: [ 
                    { day: -16, status: 2, items: [
                        { id: 873465, type: 1, status: 1, serviceTime: moment([2014, 1, 1, 12, 54, 23, 0]), completedTime: undefined },
                        { id: 873465, type: 1, status: 2, serviceTime: moment([2014, 1, 1, 12, 54, 23, 0]), completedTime: undefined },
                    ]},
                    { day: -12, status: 3, items: [
                        { id: 873465, type: 1, status: 3, serviceTime: moment([2014, 1, 1, 12, 54, 23, 0]), completedTime: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                    { day: -11, status: 5, items: [
                        { id: 873465, type: 1, status: 5, serviceTime: moment([2014, 1, 1, 12, 54, 23, 0]), completedTime: undefined },
                    ]},
                    { day: -10, status: 3, items: [
                        { id: 873465, type: 1, status: 2, serviceTime: moment([2014, 1, 1, 12, 54, 23, 0]), completedTime: undefined },
                        { id: 873465, type: 1, status: 3, serviceTime: moment([2014, 1, 1, 12, 54, 23, 0]), completedTime: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                    { day: -9, status: 0 },
                ]},
                { type: 'item', text: 'Trouble Call', itemType: timeline.itemType.workOrder, items: [
                    { day: -5, status: 1, items: [
                        { id: 873465, type: 3, status: 1, serviceTime: moment([2014, 1, 1, 12, 54, 23, 0]), completedTime: undefined },
                    ]},
                    { day: -4, status: 2, items: [
                        { id: 873465, type: 3, status: 2, serviceTime: moment([2014, 1, 1, 12, 54, 23, 0]), completedTime: undefined },
                    ]},
                    { day: -3, status: 3, items: [
                        { id: 873465, type: 3, status: 3, serviceTime: moment([2014, 1, 1, 12, 54, 23, 0]), completedTime: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                    { day: -2, status: 0 },
                ]},
                { type: 'reserve', lines: .5 }, 
                { type: 'header', icon: timeline.itemType.shippingOrder.icon, text: 'Shipping Orders', drawDates: false },
                { type: 'item', text: 'Customer Shipping Order', border: 'both', itemType: timeline.itemType.shippingOrder, items: [
                    { day: -8, status: 4, items: [
                        { id: 873465, type: 1, status: 1, time1: moment([2014, 1, 1, 12, 54, 23, 0]), time2: moment([2014, 1, 1, 12, 54, 23, 0]) },
                        { id: 873465, type: 1, status: 4, time1: moment([2014, 1, 1, 12, 54, 23, 0]), time2: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                    { day: -6, status: 5, items: [
                        { id: 873465, type: 1, status: 5, time1: moment([2014, 1, 1, 12, 54, 23, 0]), time2: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                    { day: -2, status: 6, items: [
                        { id: 873465, type: 1, status: 6, time1: moment([2014, 1, 1, 12, 54, 23, 0]), time2: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                ]},
            ],
        },
        {   // healthy  
            items: [ 
                { type: 'header', icon: timeline.itemType.balance.icon, text: 'Account Balance', drawDates: true },
                { type: 'reserve', lines: .5 },
                { type: 'balance', lines: 4, notDue: 0, due: 0, pastDue: 0, balance: { min: 0, max: 129.99 }, items: [
                    {   day:    -99 ,   b1: 129.99  ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -98 ,   b1: 129.99  ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -97 ,   b1: 129.99  ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -96 ,   b1: 129.99  ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -95 ,   b1: 0   ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -94 ,   b1: 0   ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -93 ,   b1: 0   ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -92 ,   b1: 0   ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -91 ,   b1: 0   ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -90 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -89 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -88 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -87 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -86 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -85 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -84 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -83 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -82 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -81 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -80 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -79 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -78 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -77 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -76 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -75 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -74 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -73 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -72 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -71 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -70 ,   b1: 129.99  ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -69 ,   b1: 129.99  ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -68 ,   b1: 129.99  ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -67 ,   b1: 129.99  ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -66 ,   b1: 129.99  ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -65 ,   b1: 0   ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -64 ,   b1: 0   ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -63 ,   b1: 0   ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -62 ,   b1: 0   ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -61 ,   b1: 0   ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -60 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -59 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -58 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -57 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -56 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -55 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -54 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -53 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -52 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -51 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -50 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -49 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -48 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -47 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -46 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -45 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -44 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -43 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -42 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -41 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -40 ,   b1: 129.99  ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -39 ,   b1: 129.99  ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -38 ,   b1: 129.99  ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -37 ,   b1: 129.99  ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -36 ,   b1: 129.99  ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -35 ,   b1: 0   ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -34 ,   b1: 0   ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -33 ,   b1: 0   ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -32 ,   b1: 0   ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -31 ,   b1: 0   ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -30 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -29 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -28 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -27 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -26 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -25 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -24 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -23 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -22 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -21 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -20 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -19 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -18 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -17 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -16 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -15 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -14 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -13 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -12 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -11 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -10 ,   b1: 129.99  ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -9  ,   b1: 129.99  ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -8  ,   b1: 129.99  ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -7  ,   b1: 129.99  ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -6  ,   b1: 129.99  ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -5  ,   b1: 0   ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -4  ,   b1: 0   ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -3  ,   b1: 0   ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -2  ,   b1: 0   ,   b2: 0  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0  },
                    {   day:    -1  ,   b1: 0   ,   b2: 0  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0  },
                    {   day:    0   ,   b1: 0   ,   b2: 0  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0  },
                ]},
                { type: 'reserve', lines: .5 }, 
                { type: 'header', icon: timeline.itemType.outage.icon, text: 'Outages', drawDates: false },
                { type: 'reserve', lines: .5 }, 

                { type: 'header', icon: timeline.itemType.product.icon, text: 'Hardware Products', drawDates: false },
                { type: 'item', text: 'HD Decoder', status: 1, itemType: timeline.itemType.product, items: [ 
                    { day: -180, status: 1 },
                ] },
                { type: 'item', text: 'Smartcard', status: 1, itemType: timeline.itemType.product, items: [ 
                    { day: -180, status: 1 },
                ] },
                { type: 'reserve', lines: .5 }, 
                { type: 'header', icon: timeline.itemType.product.icon, text: 'Software Products', drawDates: false },
                { type: 'item', text: 'TV Basic', status: 1, itemType: timeline.itemType.product, items: [ 
                    { day: -180, status: 1 },
                ] },
                { type: 'item', text: 'TV Gold Package', status: 1, itemType: timeline.itemType.product, items: [ 
                    { day: -180, status: 1 },
                ] },
                { type: 'reserve', lines: .5 }, 
                { type: 'header', icon: timeline.itemType.contact.icon, text: 'Contacts', drawDates: false },
                { type: 'item', text: 'All Contacts', itemType: timeline.itemType.contact, matchType: timeline.matchType.day, items: [ 
                    { day: -6, status: 3, items: [
                        { id: 873465, type: 1, status: 3, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                ]},
                { type: 'reserve', lines: .5 }, 
                { type: 'header', icon: timeline.itemType.workOrder.icon, text: 'Work Orders', drawDates: false },
                { type: 'reserve', lines: .5 }, 
                { type: 'header', icon: timeline.itemType.shippingOrder.icon, text: 'Shipping Orders', drawDates: false },
            ]
        },
        {   // new customer
            items: [ 
                { type: 'header', icon: timeline.itemType.balance.icon, text: 'Account Balance', drawDates: true },
                { type: 'reserve', lines: .5 },
                { type: 'balance', lines: 4, notDue: 0, due: 0, pastDue: 0, balance: { min: 0, max: 129.99 }, items: [
                    {   day:    -99 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -98 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -97 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -96 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -95 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -94 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -93 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -92 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -91 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -90 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -89 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -88 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -87 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -86 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -85 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -84 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -83 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -82 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -81 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -80 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -79 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -78 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -77 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -76 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -75 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -74 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -73 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -72 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -71 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -70 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -69 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -68 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -67 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -66 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -65 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -64 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -63 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -62 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -61 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -60 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -59 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -58 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -57 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -56 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -55 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -54 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -53 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -52 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -51 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -50 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -49 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -48 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -47 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -46 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -45 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -44 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -43 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -42 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -41 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -40 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -39 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -38 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -37 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -36 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -35 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -34 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -33 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -32 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -31 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -30 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -29 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -28 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -27 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -26 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -25 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -24 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -23 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -22 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -21 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -20 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -19 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -18 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -17 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -16 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -15 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -14 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -13 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -12 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -11 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -10 ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -9  ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -8  ,   b1: 0   ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    0   },
                    {   day:    -7  ,   b1: 129.99  ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -6  ,   b1: 129.99  ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -5  ,   b1: 129.99  ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -4  ,   b1: 129.99  ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -3  ,   b1: 129.99  ,   b2: 0   ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -2  ,   b1: 0   ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    -1  ,   b1: 0   ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                    {   day:    0   ,   b1: 0   ,   b2: 129.99  ,   b3: 0   ,   b4: 0   ,   b5: 0   ,   balance:    129.99  },
                ]},
                { type: 'reserve', lines: .5 }, 
                { type: 'header', icon: timeline.itemType.outage.icon, text: 'Outages', drawDates: false },
                { type: 'reserve', lines: .5 }, 
                { type: 'header', icon: timeline.itemType.product.icon, text: 'Hardware Products', drawDates: false },
                { type: 'item', text: 'HD Decoder', status: 3, itemType: timeline.itemType.product, 
                    properties: [ 
                        { text: 'String 1', value: 'Some Value' },
                        { text: 'String 2', value: 'Some Value' },
                        { text: 'Date 1', value: moment([2014, 1, 1, 12, 54, 23, 0]) },
                        { text: 'Date 2', value: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ],
                    items: [ 
                    { day: -10, status: 6, items: [
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 02, 15, 0]) },
                    ]},
                    { day: -7, status: 1, items: [
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                ] },
                { type: 'item', text: 'Smartcard', status: 1, itemType: timeline.itemType.product, items: [ 
                    { day: -10, status: 6, items: [
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 02, 15, 0]) },
                    ]},
                    { day: -7, status: 1, items: [
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                ] },
                { type: 'reserve', lines: .5 }, 
                { type: 'header', icon: timeline.itemType.product.icon, text: 'Software Products', drawDates: false },
                { type: 'item', text: 'TV Basic', status: 1, itemType: timeline.itemType.product, items: [ 
                    { day: -10, status: 6, items: [
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 02, 15, 0]) },
                    ]},
                    { day: -7, status: 1, items: [
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                ] },
                { type: 'item', text: 'TV Gold Package', itemType: timeline.itemType.product, items: [ 
                    { day: -10, status: 6, items: [
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 02, 15, 0]) },
                    ]},
                    { day: -7, status: 1, items: [
                        { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                ] },
                { type: 'reserve', lines: .5 }, 
                { type: 'header', icon: timeline.itemType.contact.icon, text: 'Contacts', drawDates: false },
                { type: 'item', text: 'All Contacts', itemType: timeline.itemType.contact, matchType: timeline.matchType.day, items: [ 
                    { day: -9, status: 3, items: [
                        { id: 873465, type: 1, status: 3, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                ]},
                { type: 'reserve', lines: .5 }, 
                { type: 'header', icon: timeline.itemType.workOrder.icon, text: 'Work Orders', drawDates: false },
                { type: 'item', text: 'Installation', itemType: timeline.itemType.workOrder, 
                    properties: [ 
                        { text: 'Date 1', value: moment([2014, 1, 1, 12, 54, 23, 0]) },
                        { text: 'String 1', value: 'Some Value' },
                        { text: 'String 2', value: 'Some Value' },
                    ],
                    items: [ 
                    { day: -10, status: 2, items: [
                        { id: 873465, type: 1, status: 1, serviceTime: moment([2014, 1, 1, 12, 54, 23, 0]), completedTime: undefined },
                        { id: 873465, type: 1, status: 2, serviceTime: moment([2014, 1, 1, 12, 54, 23, 0]), completedTime: undefined },
                    ]},
                    { day: -9, status: 2 },
                    { day: -8, status: 2 },
                    { day: -7, status: 3, items: [
                        { id: 873465, type: 1, status: 3, serviceTime: moment([2014, 1, 1, 12, 54, 23, 0]), completedTime: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    ]},
                    { day: -6, status: 0 },
                ]},
                { type: 'reserve', lines: .5 }, 
                { type: 'header', icon: timeline.itemType.shippingOrder.icon, text: 'Shipping Orders', drawDates: false },
                { type: 'reserve', lines: .5 }, 
            ]
        },
    ];

    timeline.defaults = {
        margin: { top: 18, left: 5 },
        days: 14,
        lineHeight: 26,
        lineColor: '#eee',
        // lineColor: '#CCCCCC',
        // lineColor: '#000',
        
        cellWidth: 25,
        maxDetailWidth: 250,
        
        fonts: {
            header: {
                fontFamily: 'Open Sans',
                fontColor: '#505050',
                fontSize: '14px',
                fontBold: true,
            },
            item: {
                fontFamily: 'Open Sans',
                fontColor: '#428bca',
                fontSize: '13px',
                fontBold: false,
            },
            summary: {
                fontFamily: 'Open Sans',
                fontColor: '#505050',
                fontSize: '14px',
                fontBold: true,
            },
            balance: {
                fontFamily: 'Open Sans',
                fontColor: '#428bca',
                fontSize: '12px',
                fontBold: false,
            },
        },
        months: [
            { id:  0, text: 'JAN', color: '#4C87B9' },
            { id:  1, text: 'FEB', color: '#E14E4E' },
            { id:  2, text: 'MAR', color: '#3FABA4' },
            { id:  3, text: 'APR', color: '#7F6CA1' },
            { id:  4, text: 'MAY', color: '#4C87B9' },
            { id:  5, text: 'JUN', color: '#E14E4E' },
            { id:  6, text: 'JUL', color: '#3FABA4' },
            { id:  7, text: 'AUG', color: '#7F6CA1' },
            { id:  8, text: 'SEP', color: '#4C87B9' },
            { id:  9, text: 'OCT', color: '#E14E4E' },
            { id: 10, text: 'NOV', color: '#3FABA4' },
            { id: 11, text: 'DEC', color: '#7F6CA1' },
        ],
        productStatus: [ 
            { id: 1, color: '#A6D96A', stroke: '#000', text: 'Active' },
            // { id: 1, color: '#B4D989', stroke: '#000', text: 'Active' },

            { id: 2, color: '#F46D43', stroke: '#fff', text: 'Cancelled' },
            { id: 3, color: '#D73027', stroke: '#fff', text: 'Non-pay Disconnect' },
            { id: 4, color: '#FFFFBF', stroke: '#000', text: 'Waiting Activation' },
            { id: 5, color: '#FEE08B', stroke: '#000', text: 'Pending Removal' },
            { id: 6, color: '#D9EF8B', stroke: '#000', text: 'Scheduled Activation' },
            { id: 7, color: '#FDAE61', stroke: '#fff', text: 'Suspended' },
        ],
        workOrderStatus: [
            { id: 1, color: '#F46D43', stroke: '#fff', text: 'New order' },
            { id: 2, color: '#FEE08B', stroke: '#000', text: 'Assigned' },
            { id: 3, color: '#A6D96A', stroke: '#000', text: 'Complete' },
            { id: 4, color: '#D9EF8B', stroke: '#000', text: 'Cancelled' },
            { id: 5, color: '#F46D43', stroke: '#fff', text: 'Reopened' },
        ],
        workOrderTypes: [
            { id: 1, text: 'Installation' },
            { id: 2, text: 'Maintenance' },
            { id: 3, text: 'Trouble Call' },
        ],
        shippingOrderStatus: [
            { id: 1, color: '#F46D43', stroke: '#fff', text: 'New Order' },
            { id: 2, color: '#D9EF8B', stroke: '#000', text: 'Rejected' },
            { id: 3, color: '#D9EF8B', stroke: '#000', text: 'Cancelled' },
            { id: 4, color: '#FDAE61', stroke: '#fff', text: 'Approved' },
            { id: 5, color: '#FEE08B', stroke: '#000', text: 'Shipped' },
            { id: 6, color: '#A6D96A', stroke: '#000', text: 'Delivered' },
        ],
        shippingOrderTypes:  [
            { id: 1, text: 'Customer Shipping Order' },
            { id: 2, text: 'Dealer Shipping Order' },
            { id: 3, text: 'Swop Shipping Order' },
        ],
        contactStatus: [
            { id: 1, color: '#F46D43', stroke: '#fff', text: 'Active' },
            { id: 2, color: '#D9EF8B', stroke: '#000', text: 'Cancelled' },
            { id: 3, color: '#A6D96A', stroke: '#000', text: 'Completed' },
        ],
        contactTypes: [
            { id: 1, text: 'Telephone' },
            { id: 2, text: 'Email' },
            { id: 3, text: 'Visit' },
            { id: 4, text: 'SMS' },
            { id: 5, text: 'Telefax' },
            { id: 6, text: 'Letter' },
            { id: 7, text: 'Other' },
        ],
        outageStatus: [
            { id: 1, color: '#D73027', stroke: '#fff', text: 'No Service' },
            { id: 2, color: '#A6D96A', stroke: '#000', text: 'Resolved' },
        ],
        outageTypes: [
            { id: 1, text: 'Type I' },
            { id: 2, text: 'Type II' },
        ],
        accountBuckets: [
            { id: 1, color: '#A6D96A', text: 'Not Yet Due' },
            { id: 2, color: '#D9EF8B', text: 'Due Now' },
            { id: 3, color: '#FDAE61', text: 'Past Due' },
            { id: 4, color: '#F46D43', text: 'Over 30 Days' },
            { id: 5, color: '#D73027', text: 'Over 60 Days' },
        ],
        events: [
            { id: 5228, text: 'Update Product Status' },
            { id: 5228, text: 'Update Product Status' },
        ],
    };

    // timeline.getMonthAbbr = function(month) {
    //     var months = [
    //         { id:  0, text: 'JAN' },
    //         { id:  1, text: 'FEB' },
    //         { id:  2, text: 'MAR' },
    //         { id:  3, text: 'APR' },
    //         { id:  4, text: 'MAY' },
    //         { id:  5, text: 'JUN' },
    //         { id:  6, text: 'JUL' },
    //         { id:  7, text: 'AUG' },
    //         { id:  8, text: 'SEP' },
    //         { id:  9, text: 'OCT' },
    //         { id: 10, text: 'NOV' },
    //         { id: 11, text: 'DEC' },
    //     ];
    //     return months[month].text;
    // };

    // timeline.getRandomColor = function() {
    //     var colors = [
    //         { id: 1, color: '#4C87B9' },
    //         { id: 2, color: '#E14E4E' },
    //         { id: 3, color: '#3FABA4' },
    //         { id: 4, color: '#7F6CA1' },
    //     ];

    //     var i = Math.floor((Math.random() * colors.length) + 1);

    //     console.log(i);

    //     return colors[i - 1].color;
    // };

    timeline.drawLine = function(x1, y1, x2, y2, color, width) {
      return timeline.paper.path('M' + x1 + ' ' + y1 + 'L' + x2 + ' ' + y2).attr({
              'stroke': color ? color : '#000000',
              'stroke-width': width ? width : 1
          }).translate(0.5, 0.5);
    };

    timeline.drawCell = function(x1, y1, color, fill) {
        return timeline.drawRect(x1, y1, 18, 18, 1, 1, color, fill);
    };

    timeline.drawRect = function(x1, y1, w, h, radius, color, width, fill) {
        return timeline.paper.rect(x1, y1, w, h, radius ? radius : 0).attr({
                'fill': fill ? fill : undefined,
                'stroke': color ? color : '#000000',
                'stroke-width': width ? width : 1
            }).translate(0.5, 0.5);
    };

    timeline.drawText = function(text, x, y, font, align, block) {


        // TODO: clean this method up


        var alignThis = function(align, x, dim) {
            switch(align) {
                case timeline.textAlign.middle:
                    return x;
                case timeline.textAlign.right:
                    return x - d.w/2;
                default:
                    return x + d.w/2; // left
            }
        };

        var f = font ? font : {
            fontFamily: 'Arial',
            fontColor: '#000000',
            fontSize: '12px',
            fontBold: false,
        };

        var d = text.dim(f.fontSize + ' ' + f.fontFamily);

        x = alignThis(align, x, d);

        // if (block) {
        //     block.padding = block.padding ? block.padding : 2;
        //     timeline.drawRect(x - block.padding, y, d.w + (block.padding * 2), d.h + (block.padding * 2), 0, block.color, 1, block.color);

        // }

        var el = timeline.paper.text(x, y, text).attr({
            'font-family': f.fontFamily,
            'font-size': f.fontSize,
            'font-weight': f.fontBold === true ? 'bold' : 'normal',
            'fill': f.fontColor,
            'background-color': '#F65459',
            // 'opacity': 0,
        });

        var box = el.getBBox();

// cx: 39.5
// cy: 205.5
// height: 16.34375
// toString: function x_y_w_h() {
// width: 69
// x: 5
// x2: 74
// y: 197.328125
// y2: 213.671875
// __proto__: Object                


        if (block) {
            block.padding = block.padding ? block.padding : 2;
            timeline.drawRect(box.x - 3, box.y, box.width + 6, box.height, 0, block.color, 1, block.color);
        }

        el.toFront();

        return el;


    };

    timeline.drawItem = function(defaults, item, start) {
        var getMatchType = function(item) {
           return item.matchType ? item.matchType : timeline.matchType.range; 
        };

        // { type: 'balance', lines: 4, notDue: 129.99, due: 0, pastDue: 0, balance: { min: 0, max: 129.99 }, items: [
        var getBalanceAmount = function(item, index) {
            var day = item.items[item.items.length - 3]; // TODO: day range is 2 days out...
            switch(index) {
                // notDue
                case 0: return day ? day.b1 : 0; 
                // due
                case 1: return day ? day.b2 : 0;
                // pastDue
                case 2: return day ? day.b3 + day.b4 + day.b5 : 0;
                // pastDue
                case 3: return day ? day.balance : 0;
            }
        };

        var y = start + (defaults.lineHeight/2);

        switch(item.type){
            case 'header': {
                timeline.drawText(item.icon, defaults.margin.left, y, defaults.fonts.header).attr({'font-weight': 'normal', 'font-family': 'FontAwesome'});
                var el = timeline.drawText(item.text, defaults.margin.left + 16, y, defaults.fonts.header);
                
                if (item.alert && timeline.showAlertCounts) {
                    var box = el.getBBox();
                    var font = jQuery.extend({}, defaults.fonts.item);

                    font.fontColor = '#fff';
                    font.fontSize = '11px';

                    timeline.drawText(item.alert.toString(), box.x2 + 9, y, font, timeline.textAlign.left, { color: '#F65459', padding: 0 });
                }

                y = start + defaults.lineHeight - 2;

                // timeline.drawRect(0, y - defaults.lineHeight + 2, defaults.canvas.width, 1, 0, defaults.lineColor, 1, defaults.lineColor);
                timeline.drawRect(0, y - defaults.lineHeight + 2, defaults.canvas.width, 1, 0, '#EDF3F9', 1, '#EDF3F9');

                // timeline.drawRect(0, y - defaults.lineHeight + 2, defaults.canvas.width, 1, 0, '#9CA6AD', 1, '#9CA6AD');

                
                
                // timeline.drawRect(0, y, defaults.canvas.width, 1, 0, defaults.lineColor, 1, defaults.lineColor);
                timeline.drawRect(0, y, defaults.canvas.width, 1, 0, '#505050', 1, '#505050');
                // timeline.drawRect(0, y, defaults.canvas.width, 1, 0, '#9CA6AD', 1, '#9CA6AD');
                // timeline.drawRect(0, y, defaults.canvas.width, 1, 0, '#558DC0', 1, '#558DC0');
                // timeline.drawRect(0, y, defaults.canvas.width, 1, 0, '#88AED3', 1, '#88AED3');


                





                // timeline.drawLine(0, y - defaults.lineHeight + 2, defaults.canvas.width, y - defaults.lineHeight + 2, '#BFCAD1');
                // timeline.drawLine(0, y + 2, defaults.canvas.width, y + 2, '#BFCAD1');

                if (item.drawDates) {
                    timeline.drawDates(defaults, y);
                }

                break;
            }
            case 'item': {
                var el = timeline.drawText(item.text, defaults.margin.left, y, defaults.fonts.item).attr({
                    'cursor': 'pointer'
                });

                if (item.properties) {
                    el.tip = '<table>';
                    el.tip += '<tr class="tip-table-tr tip-table-tr-head"><td colspan="2"><b>' + item.text + '</b></td><tr>';
                    _.each(item.properties, function(property) {
                        var value = property.value._isAMomentObject ? property.value.format('MMM Do YYYY') : property.value;
                        el.tip += '<tr class="tip-table-tr"><td>' + property.text + ':</td><td class="tip-table-td-right">' + value + '</td><tr>';
                    });
                    el.tip += '</table>';

                    el.hover(function(){
                        showTooltip({ text: this.tip, offset: { x: 30, y: -60 } });
                    }, hideTooltip);
                    el.mousemove(function(){
                        showTooltip({ text: this.tip, offset: { x: 30, y: -60 } });
                    });
                }

                if (timeline.showProductStatus && item.status) {

                    var box = el.getBBox();

                    var status = timeline.lookupStatus(item.status, item.itemType);

                    var font = jQuery.extend({}, defaults.fonts.item);

                    font.fontColor = status.stroke;
                    font.fontSize = '11px';


                    // timeline.drawText(status.text, box.x2 + 8, y, font, timeline.textAlign.left, { color: status.color, padding: 1 });

                    var new_x = defaults.margin.left + 120;
                    timeline.drawText(status.text, new_x, y, font, timeline.textAlign.left, { color: status.color, padding: 1 });

                }



                y = start + defaults.lineHeight;

                // timeline.drawLine(0, y, defaults.canvas.width, y, defaults.lineColor);
                timeline.drawLine(0, y, defaults.canvas.width, y, '#fff');

                if (item.items)
                    timeline.drawItems(defaults, item.itemType, getMatchType(item), item, start);

                break;
            }
            case 'summary': {
                timeline.drawText(item.icon, defaults.margin.left, y, defaults.fonts.header).attr({'font-weight': 'normal', 'font-family': 'FontAwesome'});

                var el = timeline.drawText(item.text, defaults.margin.left + 16, y, defaults.fonts.summary);

                if (item.alert && timeline.showAlertCounts) {
                    var box = el.getBBox();
                    var font = jQuery.extend({}, defaults.fonts.item);

                    font.fontColor = '#fff';
                    font.fontSize = '11px';

                    timeline.drawText(item.alert.toString(), box.x2 + 9, y, font, timeline.textAlign.left, { color: '#F65459', padding: 0 });
                }

                y = start + defaults.lineHeight - 2;

                if (!item.border) item.border = 'both';

                if (item.border === 'top' || item.border === 'both' )
                    // timeline.drawRect(0, y - defaults.lineHeight + 2, defaults.canvas.width, 1, 0, defaults.lineColor, 1, defaults.lineColor);
                    

                    // timeline.drawRect(0, y - defaults.lineHeight + 2, defaults.canvas.width, 1, 0, '#EDF3F9', 1, '#EDF3F9');
                    timeline.drawRect(0, y - defaults.lineHeight + 2, defaults.canvas.width, 1, 0, '#E3E9EF', 1, '#E3E9EF');

                    // timeline.drawRect(0, y - defaults.lineHeight + 2, defaults.canvas.width, 1, 0, '#88AED3', 1, '#88AED3');


                    // timeline.drawLine(0, y - defaults.lineHeight + 2, defaults.canvas.width, y - defaults.lineHeight + 2, '#9CA6AD');


                if (item.border === 'bottom' || item.border === 'both' )
                    // timeline.drawRect(0, y + 1, defaults.canvas.width, 1, 0, defaults.lineColor, 1, defaults.lineColor);
                    timeline.drawRect(0, y + 1, defaults.canvas.width, 1, 0, '#505050', 1, '#505050');
                    // timeline.drawRect(0, y + 1, defaults.canvas.width, 1, 0, '#88AED3', 1, '#88AED3');




                    // timeline.drawLine(0, y + 2, defaults.canvas.width, y + 2, '#BFCAD1');


                if (item.items)
                    timeline.drawItems(defaults, item.itemType, getMatchType(item), item, start);

                break;
            }
            case 'balance': {
                    var x = defaults.canvas.width - ((defaults.days - 1) * defaults.cellWidth), 
                        w = defaults.canvas.width - x,
                        h = (defaults.lineHeight * timeline.balanceLines) - 20;

                    // draw account summary

                    if (timeline.showAccountInfo) {
                        var asw = defaults.canvas.width - defaults.margin.left - w,
                            ash = h, asc = asw/20,
                            asx = asc;

                        var text = ['Not Yet Due', 'Due Now', 'Past Due', 'Total Balance'];

                        // y += 5;

                        for (var i = 0; i < text.length; i++) {
                            
                            timeline.drawText(text[i], asx, y, defaults.fonts.balance);

                            timeline.drawText(getBalanceAmount(item, i).format(2, 3, ',', '.'), asx * 15, y, defaults.fonts.balance, timeline.textAlign.right);

                            // if (i !== text.length - 1) timeline.drawLine(asx - 2, y + 10, (asx * 15) + 2, y + 10, i < text.length - 2 ? '#eee' : '#DFE0E0', 1);
                            if (i !== text.length - 1) timeline.drawLine(asx - 2, y + 10, (asx * 15) + 2, y + 10, i < text.length - 2 ? '#fff' : '#eee', 1);

                            y += timeline.defaults.lineHeight - 5;
                        }
                    }


                    y = start + 10;


                    timeline.drawRect(x, y, w, h, 0, '#eee', 1);

                    
                    // round value up to nearest 100
                    
                    var b = item.balance.max;
                    var m = b % 100; //mod = 34
                    if (m > 0) b += 100 - m;

                    var d = b / 100;
                    var l = h/d;
                    
                    for (var i = 1; i < d; i++) {
                        var ly = y + (l * i);
                        // timeline.drawLine(x, ly, defaults.canvas.width, ly, '#eee', 1);
                        timeline.drawLine(x, ly, defaults.canvas.width, ly, '#fff', 1);
                    }

                    // TODO: create right-align text method

                    // draw scale
                    timeline.drawText(item.balance.min.toString(), x - 12, y + h, defaults.fonts.summary).attr({
                        'font-family': 'Open Sans',
                        'font-style': 'normal',
                        'font-variant': 'small-caps',
                        'font-weight': 400,
                        'font-size': '10px',
                        'fill': '#74808E',
                    });

                    timeline.drawText(b.toString(), x - 25, y, defaults.fonts.summary).attr({
                        'font-family': 'Open Sans',
                        'font-style': 'normal',
                        'font-variant': 'small-caps',
                        'font-weight': 400,
                        'font-size': '10px',
                        'fill': '#74808E',
                    });

                    // timeline.drawBarItems = function(defaults, item, bottom, left, height) {
                    timeline.drawBarItems(defaults, item, y + h, x, h, b);

                break;
            }
        }
    };

    timeline.getItemData = function(items, day, matchType) {
        return _.chain(items)
            .filter(function(i) {
                if (matchType === timeline.matchType.range)
                    return (day >= i.day)
                else
                    return day === i.day;
            }).sortBy(function(i) {
                return i.day * -1;
            }).first().value();
    };

    timeline.drawItems = function(defaults, itemType, matchType, item, start) {
        var x = defaults.canvas.width - (defaults.days * defaults.cellWidth);

        for (var i = 0; i < defaults.days - 1; i++) {
            x += defaults.cellWidth;
            var day = defaults.days * -1 + i; 
            var data = timeline.getItemData(item.items, day, matchType);

            if (data) {
                var status = timeline.lookupStatus(data.status, itemType);

                if (status) {
                    var set = timeline.paper.set();
                    var rx = x + 3, ry = start + 3, rw = defaults.cellWidth - 6, rh = defaults.lineHeight - 6;
                    
                    // squares
                    // var el = timeline.drawRect(x + 3, start + 3, defaults.cellWidth - 6, defaults.lineHeight - 6, 0, status.color, 1, status.color).attr({
                    //     'cursor': day === data.day && data.items && data.items.length > 0 ? 'pointer' : 'default',
                    // });
                    // var el = timeline.drawRect(x + 4, start + 4, defaults.cellWidth - 8, defaults.lineHeight - 8, 0, status.color, 1, status.color).attr({
                    //     'cursor': day === data.day && data.items && data.items.length > 0 ? 'pointer' : 'default',
                    // });
                    // var el = timeline.drawRect(x + 4, start + 4, defaults.cellWidth - 8, defaults.lineHeight - 8, 0, timeline.defaults.lineColor, 1, status.color).attr({
                    //     'cursor': day === data.day && data.items && data.items.length > 0 ? 'pointer' : 'default',
                    // });
                    var el = timeline.drawRect(x + 3, start + 3, defaults.cellWidth - 6, defaults.lineHeight - 6, 0, timeline.defaults.lineColor, 1, status.color).attr({
                        'cursor': day === data.day && data.items && data.items.length > 0 ? 'pointer' : 'default',
                    });

                    // circles
                    // var el = timeline.paper.circle((rx + rw/2) + .5, (ry + rh/2) + .5, 11.5).attr({                                
                    //     'fill': status.color,
                    //     'stroke': '#fff',
                    // });

                    set.push(el);

                    set.itemType = itemType;
                    set.text = item.text;
                    set.data = data;
                    set.date = moment().add(day + 2, 'day');
                    set.status = status;
                    set.dayBar = timeline.dayBars[i];

                    timeline.dayBars[i].set.push(set);


                    if (day === data.day && data.items && data.items.length > 0) {
                        var px1 = rx + 1, py1 = ry + rh + 1, px2 = rx + rw + 1, py2 = ry + rh + 1, px3 =  rx + rw + 1, py3 = ry + 1;
                        
                        // diagonal half-square + num
                        // set.push(timeline.paper.path('M' + px1 + ',' + py2 + ',' + px2 + ',' + py2 + ',' + px3 + ',' + py3 + 'z').attr({
                        //     'fill': '#fff',
                        //     'stroke': '#fff',
                        //     'cursor': 'pointer',
                        // }), timeline.paper.text((rx + rw/2) + 5, (ry + rh/2) + 5, data.items.length).attr({
                        //     'font-family': 'Open Sans',
                        //     'font-size': '10px',
                        //     'fill': '#000',
                        //     'cursor': 'pointer',
                        // }));

                        // num
                        set.push(
                            timeline.paper.text((rx + rw/2) + .6, (ry + rh/2), data.items.length).attr({
                                'font-family': 'Open Sans',
                                'font-size': '11.5px',
                                'fill': status.stroke,
                                'cursor': 'pointer'
                            })
                        );

                        set.click(function(){
                            var data = timeline.prepareData(this.set);

                            var cx = timeline.paper.canvas.offsetLeft;
                            var cy = timeline.paper.canvas.offsetTop;
                            var dv = timeline.paper.canvas.parentElement.getBoundingClientRect();
                            var dx = dv.left, dy = dv.top;
                            var bx = this.set[0].getBBox();
                            var ox = 15, oy = -15;
                            
                            showPopup({ 
                                coords: { x: dx + bx.x2 + ox, y: dy + bx.y + oy },
                                itemType: this.set.itemType,
                                data: { 
                                    title: data.title, 
                                    date: this.set.date,
                                    items: data.items,
                                }
                            });
                        });

                    }

                    timeline.setEvents(set);
                }
            }
        }
    };

    timeline.drawBarItems = function(defaults, item, bottom, left, height, maxY) {
        var getBucket = function(id) {
            return _.chain(timeline.defaults.accountBuckets)
                .filter(function(bucket) {
                    return bucket.id === id;
                }).first().value();
        };

        var x = defaults.canvas.width - (defaults.days * defaults.cellWidth);

        for (var i = 0; i < defaults.days - 1; i++) {
            x += defaults.cellWidth;
            var day = defaults.days * -1 + i; 
            var data = timeline.getItemData(item.items, day, timeline.matchType.day);
            if (data) {
                var f = (item.balance.max/maxY) * 100, //max bal. as a percent of max y
                    // y = bottom, h = 0, p = 9, w = 7;
                    y = bottom, h = 0, p = 10, w = 5;

                for (var prop in data) {
                    if (prop.substr(0, 1) === 'b') {
                        if (data[prop] > 0) {
                            var b = getBucket(parseInt(prop.substr(1, 1)));
                            if (b) {
                                if (data[prop] === item.balance.max) {
                                    h = height/100 * f;
                                } else {
                                    // calc data[prop] as percentage of balance
                                    var pc = (data[prop]/item.balance.max) * 100;
                                    h = (height/100 * f)/100 * pc;
                                }

                                var s = timeline.paper.set();
                                s.push(
                                    timeline.drawRect(x + (p/2), y - h, defaults.cellWidth - ((p/2) * 2), h, 0, b.color, 1, b.color).attr({ 'opacity': 0 }),
                                    // timeline.drawRect(x + (p/2), y - h, defaults.cellWidth - (((p/2) * 2)) - 8, h, 0, b.color, 1, b.color).attr({ 'opacity': 0 }),

                                    timeline.drawRect(x + p, y - h, w, h, 0, b.color, 1, b.color)
                                );

                                
                                timeline.dayBars[i].set.push(s);
                                
                                _.each(s.items, function(item){
                                    item.dayBar = timeline.dayBars[i];
                                    item.tip = '<table>' +
                                        '<tr class="tip-table-tr"><td>' + b.text + ':</td><td class="tip-table-td-numeric">' + data[prop].format(2, 3, ',', '.') + '</td><tr>' + 
                                        '<tr class="tip-table-tr"><td >Balance:</td><td class="tip-table-td-numeric">' + data.balance.format(2, 3, ',', '.') + '</td></tr>' + 
                                        '</table>';
                                });

                                s.hover(function(){
                                    showTooltip({ text: this.tip, offset: { x: 0, y: -60 } });
                                    this.dayBar.attr({'fill': '#FAC3C2', 'opacity': .3 });
                                    this.dayBar.toFront();
                                    this.dayBar.moveChildrenFront();
                                }, function() {
                                    hideTooltip();
                                    this.dayBar.toBack();
                                    this.dayBar.attr({'fill': this.dayBar.fill, 'opacity': 1 });
                                });
                                s.mousemove(function(){
                                    showTooltip({ text: this.tip, offset: { x: 0, y: -60 } });
                                    this.dayBar.attr({'fill': '#FAC3C2', 'opacity': .3 });
                                    this.dayBar.toFront();
                                    this.dayBar.moveChildrenFront();
                                });

                                y -= h;
                            }
                        }
                    }
                }
            }
        }
    };

    timeline.setEvents = function(set) {
        _.each(set.items, function(item){
            item.set = set;
            item.hover(function(){
                showTooltip({ text: this.set.status.text });
                item.set.dayBar.attr({'fill': '#FAC3C2', 'opacity': .3 });
                item.set.dayBar.toFront();
                item.set.dayBar.moveChildrenFront();
            }, function() {
                hideTooltip();
                item.set.dayBar.toBack();
                item.set.dayBar.attr({'fill': item.set.dayBar.fill, 'opacity': 1 });
            });
            item.mousemove(function(){
                showTooltip({ text: this.set.status.text });
                item.set.dayBar.toFront();
                item.set.dayBar.attr({'fill': '#FAC3C2', 'opacity': .3 }); 
                item.set.dayBar.moveChildrenFront();
            });

            // if (set.data.items) {
            //     item.click(function(){
            //         var data = timeline.prepareData(this.set);

            //         var cx = timeline.paper.canvas.offsetLeft;
            //         var cy = timeline.paper.canvas.offsetTop;
            //         var dv = timeline.paper.canvas.parentElement.getBoundingClientRect();
            //         var dx = dv.left, dy = dv.top;
            //         var bx = this.set[0].getBBox();
            //         var ox = 15, oy = -15;
                    
            //         showPopup({ 
            //             coords: { x: dx + bx.x2 + ox, y: dy + bx.y + oy },
            //             itemType: this.set.itemType,
            //             data: { 
            //                 title: data.title, 
            //                 date: this.set.date,
            //                 items: data.items,
            //             }
            //         });
            //     });
            // }
        });
    };

    timeline.lookup = function(list, id) {
        return _.chain(list)
            .filter(function(item) {
                return item.id === id;
            }).first().value();
    }

    timeline.lookupStatus = function(status, itemType) {
        var getStatusByType = function(type) {
            switch (type) {
                case timeline.itemType.product:
                    return timeline.defaults.productStatus;
                case timeline.itemType.workOrder:
                    return timeline.defaults.workOrderStatus;
                case timeline.itemType.shippingOrder:
                    return timeline.defaults.shippingOrderStatus;
                case timeline.itemType.contact:
                    return timeline.defaults.contactStatus;
                case timeline.itemType.outage:
                    return timeline.defaults.outageStatus;
            }
        };
        
        return _.chain(getStatusByType(itemType))
            .filter(function(s) {
                return s.id === status;
            }).first().value();
    };

    timeline.lookupType = function(type, itemType) {
        var getTypeByType = function(type) {
            switch (type) {
                case timeline.itemType.product:
                    return timeline.defaults.events;
                case timeline.itemType.workOrder:
                    return timeline.defaults.workOrderTypes;
                case timeline.itemType.shippingOrder:
                    return timeline.defaults.shippingOrderTypes;
                case timeline.itemType.contact:
                    return timeline.defaults.contactTypes;
                case timeline.itemType.outage:
                    return timeline.defaults.outageTypes;
            }
        };

        return _.chain(getTypeByType(itemType))
            .filter(function(s) {
                return s.id === type;
            }).first().value();
    };

    timeline.prepareData = function(set) {
        set.data.title = set.itemType === timeline.itemType.product ? 'Events for ' + set.text + ' on ' + set.date.format('MMMM Do YYYY') 
            : set.text + ' on ' + set.date.format('MMMM Do YYYY');

        _.each(set.data.items, function(item) {
            if (item.type && !item.type.id)
                item.type = timeline.lookupType(item.type, set.itemType);
            if (item.status && !item.status.id)
                item.status = timeline.lookupStatus(item.status, set.itemType);
        });

        return set.data;
    };

    timeline.drawDates = function(defaults, start) {
        var today = new Date();

        var x = defaults.canvas.width;

        for (var i = defaults.days - 1; i > 0; i--) {
            var d = today.getDate();
            var m = today.getMonth();

            x -= defaults.cellWidth;

            if ((d === 1) || (i === 1)) {

                var dx = x, dy = start - defaults.lineHeight - 12, dw = defaults.cellWidth, dh = 13;

                timeline.drawRect(dx, dy, dw, dh, 0, defaults.months[m].color, 1, defaults.months[m].color);

                timeline.paper.text(dx + (dw/2), dy + (dh/2), defaults.months[m].text).attr({
                    'font-family': 'RobotoL',
                    'font-size': '10.5px',
                    'fill': '#ffffff'
                });

                var pw = 8, ph = 5;

                var px1 = (dx + (dw/2)) - (pw/2), py1 = dy + dh;
                var px2 = px1 + pw, py2 = py1;
                var px3 = px2 - (pw/2), py3 = py1 + ph;

                timeline.paper.path('M' + px1 + ',' + py2 + ',' + px2 + ',' + py2 + ',' + px3 + ',' + py3 + 'z').attr({
                    'fill': defaults.months[m].color, 'stroke': defaults.months[m].color
                });
            }

            if (i === defaults.days - 1) {
                // var c = '#D73027';
                var c = '#F65459';

                timeline.drawRect(x + 3, start - defaults.lineHeight + 5, defaults.cellWidth - 6, defaults.lineHeight - 7, 0, c, 1, c);

                timeline.paper.text(x + (defaults.cellWidth/2), start - defaults.lineHeight/2 + 2, d).attr({
                    'font-family': 'Open Sans',
                    'font-size': '11px',
                    'fill': '#ffffff'
                });
            }
            else {
                timeline.paper.text(x + (defaults.cellWidth/2), start - defaults.lineHeight/2 + 2, d).attr({
                    'font-family': 'Open Sans',
                    'font-size': '11px',
                    'fill': '#000000'
                });
            }

            today.setDate(today.getDate() - 1);
        };
    };

    timeline.drawVerticalBars = function(defaults) {
        // var moveChildrenFront = function(el) {
        //     _.each(el.set.items, function(set) {
        //         set.toFront();
        //     });

        //     // console.log(el.set.items);
        // };

        var el, x = defaults.canvas.width - (defaults.days * defaults.cellWidth);

        timeline.dayBars = timeline.paper.set();

        for (var i = 0; i < defaults.days - 1; i++) {
            x += defaults.cellWidth;
            
            // var color = '#FFFFFF';
            // if (i % 2 === 0) {
            //     timeline.drawRect(x, defaults.margin.top, defaults.cellWidth, defaults.canvas.height, 0, color, 1, color);
            // }

            if (i % 2 === 0) {
                el = timeline.drawRect(x, defaults.margin.top, defaults.cellWidth, defaults.canvas.height, 0, '#fff', 1, '#fff');
                el.fill = '#fff';

            } else {
                el = timeline.drawRect(x, defaults.margin.top, defaults.cellWidth, defaults.canvas.height, 0, '#FAFAFA', 1, '#FAFAFA');
                el.fill = '#FAFAFA';

            }

            // el.index = i; // not sure if this is necessary yet...

            el.set = timeline.paper.set();

            timeline.dayBars.push(el);

            el.moveChildrenFront = function() {
                _.each(this.set.items, function(set) {
                    set.toFront();
                });

                // console.log(el.set.items);
            };


            // el.hover(function() { moveIn(this) }, function() { moveOut(this) });
            // el.mousemove(function() { moveIn(this) });

            el.hover(function(){

                this.attr({'fill': '#FAC3C2', 'opacity': .3 }); 
                this.toFront();

                // moveChildrenFront(this);
                this.moveChildrenFront();

                // moveIn(this);

            }, function() {
                
                this.attr({'fill': this.fill, 'opacity': 1 });
                this.toBack();

                // moveOut(this);

            } );
            el.mousemove(function(){
                
                this.attr({'fill': '#FAC3C2', 'opacity': .3});
                this.toFront();

                // moveChildrenFront(this);
                this.moveChildrenFront();


            });

        }
    };

    timeline.draw = function(scope, canvas, params) {
        timeline.data = timeline.customers[params.customerIndex];
        
        timeline.balanceLines = params.balanceLines;
        timeline.showAccountInfo = params.showAccountInfo;
        timeline.showProductStatus = params.showProductStatus;
        timeline.showAlertCounts = params.showAlertCounts;

        var getLineNumber = function(item) {
            if (item.lines) {
                if (item.type === 'balance')
                    return timeline.balanceLines ? timeline.balanceLines : 1;
                else 
                    return item.lines; 
            } else return 1;
        };

        var getLineCount = function() {
            var result = 0;
            for (var i = 0; i < timeline.data.items.length; i++) {
                result += getLineNumber(timeline.data.items[i]);
            }
            return result;
        };

        timeline.destroy();

        timeline.scope = scope;

        var tdefs = timeline.defaults;

        tdefs.canvas = {
            width: canvas.clientWidth,
            height: (getLineCount() * tdefs.lineHeight) + tdefs.margin.top
        }

        var l = tdefs.canvas.width/3; // left
        var r = l * 2; // right

        if (l > tdefs.maxDetailWidth) {
            r = tdefs.canvas.width - tdefs.maxDetailWidth; // take rest of space
        }

        tdefs.days = Math.floor(r/tdefs.cellWidth);

        timeline.paper = Raphael(canvas, tdefs.canvas.width, tdefs.canvas.height + 5);

        tdefs.canvas.width = tdefs.canvas.width - 5;

        timeline.drawVerticalBars(tdefs);

        
        // TODO: lines

        var line = 0;

        for (var i = 0; i < timeline.data.items.length; i++) {
            timeline.drawItem(tdefs, timeline.data.items[i], (line * tdefs.lineHeight) + tdefs.margin.top)
            line += getLineNumber(timeline.data.items[i]);
        }
    };

    timeline.destroy = function() {
        if (timeline.paper) {
            timeline.paper.clear();
            timeline.paper.remove();
        }
    };

    var draw = function(params) {
        timeline.draw(this.scope, this.canvas, params);
    };

    var redraw = function(params) {
        hidePopup();
        timeline.draw(this.scope, this.canvas, params);
    };

    var showTooltip = function(params) {
        timeline.scope.$emit('TOOLTIP_SHOW', params);
    };

    var hideTooltip = function() {
        timeline.scope.$emit('TOOLTIP_HIDE');
    };

    var showPopup = function(params) {
        timeline.scope.$emit('POPUP_SHOW', params);
    };

    var hidePopup = function() {
        timeline.scope.$emit('POPUP_HIDE');
    };

    // var getDateRange = function() {
    //     var today = new Date();
    //     return { 
    //         from: today.setDate(today.getDate() - defaults.days),
    //         to: today,
    //     };
    // };

    var getDays = function() {
        return timeline.defaults.days - 2;
    };

    var getClientWidth = function() {
        return timeline.defaults.canvas.width;
    };

    return {
        draw: draw,
        redraw: redraw,
        getDays: getDays,
        getClientWidth: getClientWidth,
        showTooltip: showTooltip,
        hideTooltip: hideTooltip,
        showPopup: showPopup,
        hidePopup: hidePopup,
    }

}();