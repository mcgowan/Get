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
            toString: function(){ return 'contact'; },
        }, product: {
            color: '#44B6AE',
            toString: function(){ return 'product'; },
        }, shippingOrder: {
            color: '#AA9EC1',
            toString: function(){ return 'shippingOrder'; },
        }, workOrder: {
            color: '#578EBE',
            toString: function(){ return 'workOrder'; },
        }, outage: {
            color: '#EB8B8B',
            toString: function(){ return 'outage'; },
        }});
    timeline.matchType = Object.freeze({ range: {}, day: {} });

    timeline.data = {
        items: [ 
            // { type: 'header', text: 'Account Balance', drawDates: true },
            // { type: 'reserve', lines: 4 }, 
            { type: 'header', text: 'Hardware Products', drawDates: true },
            { type: 'item', text: 'Decoder', itemType: timeline.itemType.product, items: [ 
                { day: -180, status: 1 },
                { day: -5, status: 2, items: [
                    { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { type: 5228, status: 2, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { type: 5228, status: 3, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
            ] },
            { type: 'item', text: 'HD Decoder', itemType: timeline.itemType.product, items: [ 
                { day: -8, status: 1 },
                { day: -5, status: 3, items: [
                    { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 02, 15, 0]) },
                    { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 05, 54, 0]) },
                    { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 02, 15, 0]) },
                    { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 05, 54, 0]) },
                    { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 02, 15, 0]) },
                    { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 05, 54, 0]) },
                ]},
            ] },
            { type: 'item', text: 'Smartcard', itemType: timeline.itemType.product, items: [ 
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
            { type: 'header', text: 'Software Products', drawDates: false },
            { type: 'item', text: 'TV Basic', itemType: timeline.itemType.product, items: [ 
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
            { type: 'item', text: 'TV Silver Package', itemType: timeline.itemType.product, items: [ 
                { day: -10, status: 4, items: [
                    { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
                { day: -9, status: 1, items: [
                    { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { type: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
            ] },
            { type: 'item', text: 'VoIP Basic', itemType: timeline.itemType.product, items: [ 
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
            { type: 'reserve', lines: 1 }, 
            { type: 'summary', text: 'Contacts', border: 'top', itemType: timeline.itemType.contact, matchType: timeline.matchType.day, items: [
                { day: -10, status: 1, items: [
                    { id: 873465, type: 1, status: 1, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 873465, type: 2, status: 2, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 873465, type: 3, status: 3, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
                { day: -5, status: 1, items: [
                    { id: 873465, type: 1, status: 1, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
                { day: -4, status: 1, items: [
                    { id: 873465, type: 1, status: 1, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 873465, type: 1, status: 1, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
            ]},
            { type: 'summary', text: 'Outages', border: 'top', itemType: timeline.itemType.outage, matchType: timeline.matchType.day, items: [
                { day: -4, status: 2, items: [
                    { type: 1, status: 1, reportedTime: moment([2014, 1, 1, 12, 54, 23, 0]), resolvedTime: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { type: 2, status: 2, reportedTime: moment([2014, 1, 1, 12, 54, 23, 0]), resolvedTime: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { type: 1, status: 1, reportedTime: moment([2014, 1, 1, 12, 54, 23, 0]), resolvedTime: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
                { day: -3, status: 1, items: [
                    { type: 1, status: 1, reportedTime: moment([2014, 1, 1, 12, 54, 23, 0]), resolvedTime: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
            ]},
            { type: 'header', text: 'Orders', drawDates: false },

            { type: 'item', text: 'Work Orders', border: 'top', itemType: timeline.itemType.workOrder, matchType: timeline.matchType.day, items: [
                { day: -4, status: 1, items: [
                    { id: 873465, type: 1, status: 1, serviceTime: moment([2014, 1, 1, 12, 54, 23, 0]), completedTime: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 873465, type: 2, status: 2, serviceTime: moment([2014, 1, 1, 12, 54, 23, 0]), completedTime: undefined },
                    { id: 873465, type: 3, status: 3, serviceTime: moment([2014, 1, 1, 12, 54, 23, 0]), completedTime: undefined },
                ]},
                { day: -3, status: 1, items: [
                    { id: 873465, type: 1, status: 1, serviceTime: moment([2014, 1, 1, 12, 54, 23, 0]), completedTime: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
            ]},
            { type: 'item', text: 'Shipping Orders', border: 'both', itemType: timeline.itemType.shippingOrder, matchType: timeline.matchType.day, items: [
                { day: -4, status: 2, items: [
                    { id: 873465, type: 1, status: 1, time1: moment([2014, 1, 1, 12, 54, 23, 0]), time2: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 873465, type: 1, status: 1, time1: moment([2014, 1, 1, 12, 54, 23, 0]), time2: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 873465, type: 1, status: 1, time1: moment([2014, 1, 1, 12, 54, 23, 0]), time2: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
                { day: -3, status: 2, items: [
                    { id: 873465, type: 1, status: 1, time1: moment([2014, 1, 1, 12, 54, 23, 0]), time2: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
            ]},
        ],
    };

    timeline.defaults = {
        margin: { top: 18, left: 5 },
        days: 14,
        lineHeight: 25,
        lineColor: '#eeeeee',
        // lineColor: '#CCCCCC',
        
        cellWidth: 25,
        maxDetailWidth: 250,
        
        fonts: {
            header: {
                fontFamily: 'Open Sans',
                fontColor: '#000000',
                fontSize: '14px',
                fontBold: true,
            },
            item: {
                fontFamily: 'Open Sans',
                fontColor: '#428bca',
                fontSize: '14px',
                fontBold: false,
            },
            summary: {
                fontFamily: 'Open Sans',
                fontColor: '#000000',
                fontSize: '14px',
                fontBold: true,
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
            { id: 1, color: '#A6D96A', text: 'Active' },
            { id: 2, color: '#F46D43', text: 'Cancelled' },
            { id: 3, color: '#D73027', text: 'Non-pay Disconnect' },
            { id: 4, color: '#FFFFBF', text: 'Waiting Activation' },
            { id: 5, color: '#FEE08B', text: 'Pending Removal' },
            { id: 6, color: '#D9EF8B', text: 'Scheduled Activation' },
            { id: 7, color: '#FDAE61', text: 'Suspended' },
        ],
        workOrderStatus: [
            { id: 1, color: '#A6D96A', text: 'New order' },
            { id: 2, color: '#D73027', text: 'Assigned' },
            { id: 3, color: '#D9EF8B', text: 'Complete' },
            { id: 4, color: '#F46D43', text: 'Cancelled' },
            { id: 5, color: '#D9EF8B', text: 'Reopened' },
        ],
        workOrderTypes: [
            { id: 1, text: 'Installation' },
            { id: 2, text: 'Maintenance' },
            { id: 3, text: 'Trouble Call' },
        ],
        shippingOrderStatus: [
            { id: 1, color: '#A6D96A', text: 'New Order' },
            { id: 2, color: '#A6D96A', text: 'Rejected' },
            { id: 3, color: '#A6D96A', text: 'Cancelled' },
            { id: 4, color: '#A6D96A', text: 'Approved' },
            { id: 5, color: '#A6D96A', text: 'Shipped' },
            { id: 6, color: '#A6D96A', text: 'Delivered' },
        ],
        shippingOrderTypes:  [
            { id: 1, text: 'Customer Shipping Order' },
            { id: 2, text: 'Dealer Shipping Order' },
            { id: 3, text: 'Swop Shipping Order' },
        ],
        contactStatus: [
            { id: 1, color: '#D73027', text: 'Active' },
            { id: 2, color: '#D9EF8B', text: 'Cancelled' },
            { id: 3, color: '#A6D96A', text: 'Completed' },
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
            { id: 1, color: '#D73027', text: 'No Service' },
            { id: 2, color: '#A6D96A', text: 'Resolved' },
        ],
        outageTypes: [
            { id: 1, text: 'Type I' },
            { id: 2, text: 'Type II' },
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

    timeline.drawText = function(text, x, y, font) {
        var f = font ? font : {
            fontFamily: 'Arial',
            fontColor: '#000000',
            fontSize: '12px',
            fontBold: false,
        };

        var d = text.dim(f.fontSize + ' ' + f.fontFamily);

        // timeline.paper.text(x + d.w/2, y + d.h/2, text).attr({
        //     'font-family': f.fontFamily,
        //     'font-size': f.fontSize,
        //     'font-weight': f.fontBold === true ? 'bold' : 'normal',
        //     'fill': f.fontColor
        // });
        return timeline.paper.text(x + d.w/2, y, text).attr({
            'font-family': f.fontFamily,
            'font-size': f.fontSize,
            'font-weight': f.fontBold === true ? 'bold' : 'normal',
            'fill': f.fontColor
        });

    };

    timeline.drawItem = function(defaults, item, start) {
        var getMatchType = function(item) {
           return item.matchType ? item.matchType : timeline.matchType.range; 
        };

        var y = start + (defaults.lineHeight/2);

        switch(item.type){
            case 'header': {
                timeline.drawText(item.text, defaults.margin.left, y, defaults.fonts.header);

                y = start + defaults.lineHeight - 2;
                timeline.drawRect(0, y - defaults.lineHeight + 2, defaults.canvas.width, 1, 0, defaults.lineColor, 1, defaults.lineColor);
                timeline.drawRect(0, y, defaults.canvas.width, 1, 0, defaults.lineColor, 1, defaults.lineColor);

                if (item.drawDates) {
                    timeline.drawDates(defaults, y);
                }

                break;
            }
            case 'item': {
                timeline.drawText(item.text, defaults.margin.left, y, defaults.fonts.item).attr({
                    'cursor': 'pointer'
                });

                y = start + defaults.lineHeight;
                timeline.drawLine(0, y, defaults.canvas.width, y, defaults.lineColor);

                if (item.items)
                    timeline.drawItems(defaults, item.itemType, getMatchType(item), item, start);

                break;
            }
            case 'summary': {
                timeline.drawText(item.text, defaults.margin.left, y, defaults.fonts.summary);

                y = start + defaults.lineHeight - 2;
                if (item.border === 'top' || item.border === 'both' )
                    timeline.drawRect(0, y - defaults.lineHeight + 2, defaults.canvas.width, 1, 0, defaults.lineColor, 1, defaults.lineColor);

                if (item.border === 'bottom' || item.border === 'both' )
                    timeline.drawRect(0, y, defaults.canvas.width, 1, 0, defaults.lineColor, 1, defaults.lineColor);

                if (item.items)
                    timeline.drawItems(defaults, item.itemType, getMatchType(item), item, start);

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
                    
                    var el = timeline.drawRect(x + 3, start + 3, defaults.cellWidth - 6, defaults.lineHeight - 6, 2, status.color, 1, status.color).attr({
                        'cursor': day === data.day && data.items && data.items.length > 0 ? 'pointer' : 'default',
                    });

                    // var el = timeline.drawRect(x + 3, start + 3, defaults.cellWidth - 6, defaults.lineHeight - 6, 4, status.color, 1, status.color).attr({
                    //     'cursor': day === data.day && data.items && data.items.length > 0 ? 'pointer' : 'default',
                    // });

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

                    if (day === data.day && data.items && data.items.length > 0) {
                        var px1 = rx + 1, py1 = ry + rh + 1, px2 = rx + rw + 1, py2 = ry + rh + 1, px3 =  rx + rw + 1, py3 = ry + 1;
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

                        // set.push(

                            timeline.paper.text((rx + rw/2) + 1, (ry + rh/2) + 1, data.items.length).attr({
                                'font-family': 'Open Sans',
                                // 'font-family': 'RobotoL',
                                // 'font-family': 'Arial',

                                'font-size': '12px',
                                // 'font-weight': 'bold',
                                // 'fill': '#ffffff',
                                // 'fill': status.color,
                                'fill': '#000',
                                // 'fill': '#fff',
                                
                                'cursor': 'pointer'
                            });
                        // );
                    }

                    timeline.setEvents(set);
                }
            }
        }
    };

    timeline.setEvents = function(set) {
        _.each(set.items, function(item){
            item.set = set;
            item.hover(function(){
                showTooltip(this.set.status.text);
            }, hideTooltip);
            item.mousemove(function(){
                showTooltip(this.set.status.text);
            });

            if (set.data.items) {
                item.click(function(){
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
                var c = '#D73027';

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
        var x = defaults.canvas.width - (defaults.days * defaults.cellWidth);

        for (var i = 0; i < defaults.days - 1; i++) {
            x += defaults.cellWidth;
            
            var color = '#FFFFFF';

            if (i % 2 === 0) {
                timeline.drawRect(x, defaults.margin.top, defaults.cellWidth, defaults.canvas.height, 0, color, 1, color);
            }
        }
    };

    timeline.draw = function(scope, canvas) {
	    timeline.destroy();

        timeline.scope = scope;

        var tdefs = timeline.defaults;

        tdefs.canvas = {
            width: canvas.clientWidth,
            height: (timeline.data.items.length * tdefs.lineHeight) + tdefs.margin.top
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

        for (var i = 0; i < timeline.data.items.length; i++) {
            timeline.drawItem(tdefs, timeline.data.items[i], (i * tdefs.lineHeight) + tdefs.margin.top)
        }
    };

    timeline.destroy = function() {
        if (timeline.paper) {
            timeline.paper.clear();
            timeline.paper.remove();
        }
    };

    var draw = function() {
    	timeline.draw(this.scope, this.canvas);
    };

    var redraw = function() {
        hidePopup();
        timeline.draw(this.scope, this.canvas);
    };

    var showTooltip = function(tip) {
        timeline.scope.$emit('TOOLTIP_SHOW', tip);
    };

    var hideTooltip = function() {
        timeline.scope.$emit('TOOLTIP_HIDE');
    };

    var showPopup = function(params) {
        timeline.scope.$emit('POPUP_SHOW', params);
    };

    var hidePopup = function(params) {
        timeline.scope.$emit('POPUP_HIDE', params);
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

    return {
        draw: draw,
        redraw: redraw,
        getDays: getDays,
        showTooltip: showTooltip,
        hideTooltip: hideTooltip,
        showPopup: showPopup,
        hidePopup: hidePopup,
    }

}();