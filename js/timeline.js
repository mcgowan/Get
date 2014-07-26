var debug = {};

var Timeline = function(scope, canvas) {
    this.scope = scope;
    this.canvas = document.getElementById(canvas);
}

Timeline.prototype = function() {

    var timeline = {};

    timeline.data = {
        items: [ 
            { type: 'header', text: 'Account Balance', drawDates: true },
            { type: 'reserve', lines: 4 }, 
            { type: 'header', text: 'Hardware Products', drawDates: false },
            { type: 'item', text: 'Decoder', items: [ 
                { day: -180, status: 1 },
                { day: -5, status: 2, events: [
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 5228, status: 2, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 5228, status: 3, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
            ] },
            { type: 'item', text: 'HD Decoder', items: [ 
                { day: -8, status: 1 },
                { day: -5, status: 3, events: [
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 02, 15, 0]) },
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 05, 54, 0]) },
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 02, 15, 0]) },
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 05, 54, 0]) },
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 02, 15, 0]) },
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 05, 54, 0]) },
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 02, 15, 0]) },
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 05, 54, 0]) },
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 02, 15, 0]) },
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 05, 54, 0]) },
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 02, 15, 0]) },
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 05, 54, 0]) },

                ]},
            ] },
            { type: 'item', text: 'Smartcard', items: [ 
                { day: -180, status: 1 },
                { day: -22, status: 1, events: [
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
                { day: -12, status: 1, events: [
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
                { day: -5, status: 7, events: [
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
                { day: -4, status: 6, events: [
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
                { day: -3, status: 1, events: [
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
                { day: -2, status: 1, events: [
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
            ] },
            { type: 'header', text: 'Software Products', drawDates: false },
            { type: 'item', text: 'TV Basic', items: [ 
                { day: -180, status: 1 },
            ] },
            { type: 'item', text: 'TV Gold Package', items: [ 
                { day: -180, status: 1 },
                { day: -10, status: 2, events: [
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
                { day: -9, status: 5, events: [
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
                { day: -4, status: 5, events: [
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
                { day: -3, status: 0 },
            ] },
            { type: 'item', text: 'TV Silver Package', items: [ 
                { day: -10, status: 4, events: [
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
                { day: -9, status: 1, events: [
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
            ] },
            { type: 'item', text: 'VoIP Basic', items: [ 
                { day: -10, status: 1, events: [
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
                { day: -7, status: 2, events: [
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
                { day: -6, status: 2, events: [
                    { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
                { day: -5, status: 0},
            ] },
            { type: 'reserve', lines: 1 }, 
            { type: 'summary', text: 'Contacts', border: 'top', itemType: 'contact', items: [
                { day: -10, items: [
                    { id: 873465, method: 1, status: 1, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 873465, method: 1, status: 1, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 873465, method: 1, status: 1, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
                { day: -5, items: [
                    { id: 873465, method: 1, status: 1, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
                { day: -4, items: [
                    { id: 873465, method: 1, status: 1, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 873465, method: 1, status: 1, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
            ]},
            { type: 'summary', text: 'Outages', border: 'top', itemType: 'outage', items: [
                { day: -4, items: [
                    { id: 873465, method: 1, status: 1, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 873465, method: 1, status: 1, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 873465, method: 1, status: 1, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
                { day: -3, items: [
                    { id: 873465, method: 1, status: 1, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
            ]},
            { type: 'header', text: 'Orders', drawDates: false },

            { type: 'item', text: 'Work Orders', border: 'top', itemType: 'workOrder', items: [
                { day: -4, items: [
                    { id: 873465, method: 1, status: 1, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 873465, method: 1, status: 1, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 873465, method: 1, status: 1, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
                { day: -3, items: [
                    { id: 873465, method: 1, status: 1, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
            ]},
            { type: 'item', text: 'Shipping Orders', border: 'both', itemType: 'shippingOrder', items: [
                { day: -4, items: [
                    { id: 873465, method: 1, status: 1, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 873465, method: 1, status: 1, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                    { id: 873465, method: 1, status: 1, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                ]},
                { day: -3, items: [
                    { id: 873465, method: 1, status: 1, category: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
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
        status: [ 
                { id: 1, color: '#A6D96A', text: 'Active' },
                { id: 2, color: '#F46D43', text: 'Cancelled' },
                { id: 3, color: '#D73027', text: 'Non-pay Disconnect' },
                { id: 4, color: '#FFFFBF', text: 'Waiting Activation' },
                { id: 5, color: '#FEE08B', text: 'Pending Removal' },
                { id: 6, color: '#D9EF8B', text: 'Scheduled Activation' },
                { id: 7, color: '#FDAE61', text: 'Suspended' },
        ],
        events: [
            { id: 5228, text: 'Update Product Status' },
            { id: 5228, text: 'Update Product Status' },
        ],
        contactMethods: [
            // Telephone
            // Email
            // Visit
            // SMS
            // Telefax
            // Letter
            // Other
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

    // timeline.drawHeader = function(defaults, text, start, days) {
    //     // var background = timeline.drawRect(0, start + 2, defaults.canvas.width, defaults.lineHeight - 4, 0, '#FAFAFA', 1, '#FAFAFA');
    //     // var background = timeline.drawRect(0, start + 2, defaults.canvas.width, defaults.lineHeight - 4, 0, '#F5F5F5', 1, '#F5F5F5');

    //     var y = start + (defaults.lineHeight/2) + 1;
    //     timeline.drawText(text, defaults.margin.left, y, defaults.itemHeaderFont);

    //     y = start + defaults.lineHeight - 2;

    //     // timeline.drawLine(-1, y, defaults.canvas.width, y, defaults.lineColor, 1);
    //     // timeline.drawLine(0, y - defaults.lineHeight, defaults.canvas.width, y - defaults.lineHeight, defaults.lineColor, 1);
    //     // timeline.drawLine(0, y, defaults.canvas.width, y, defaults.lineColor, 1);

    //     var color = defaults.lineColor;
    //     // var color = '#98CAE7';

    //     timeline.drawRect(0, y - defaults.lineHeight + 2, defaults.canvas.width, 1, 0, color, 1, color);
    //     timeline.drawRect(0, y, defaults.canvas.width, 1, 0, color, 1, color);

        
    //     if (days) {
    //     }
    // };

    timeline.drawItem = function(defaults, item, start) {
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
                    timeline.drawItems(defaults, start, item);

                break;
            }
            case 'summary': {
                timeline.drawText(item.text, defaults.margin.left, y, defaults.fonts.summary);

                y = start + defaults.lineHeight - 2;
                if (item.border === 'top' || item.border === 'both' )
                    timeline.drawRect(0, y - defaults.lineHeight + 2, defaults.canvas.width, 1, 0, defaults.lineColor, 1, defaults.lineColor);

                if (item.border === 'bottom' || item.border === 'both' )
                    timeline.drawRect(0, y, defaults.canvas.width, 1, 0, defaults.lineColor, 1, defaults.lineColor);

                break;
            }
        }

    };

    timeline.getItemData = function(items, day, matchType) {
        return _.chain(items)
            .filter(function(i) {
                return (day >= i.day)
            }).sortBy(function(i) {
                return i.day * -1;
            }).first().value();
    };

    timeline.lookupStatus = function(status) {
        return _.chain(timeline.defaults.status)
            .filter(function(s) {
                return s.id === status;
            }).first().value();
    };

    timeline.drawItems = function(defaults, start, item) {
        var x = defaults.canvas.width - (defaults.days * defaults.cellWidth);

        for (var i = 0; i < defaults.days - 1; i++) {
            x += defaults.cellWidth;
            var day = defaults.days * -1 + i; 
            var data = timeline.getItemData(item.items, day); //TODO: add matchType

            if (data) {
                var status = timeline.lookupStatus(data.status);

                if (status) {
                    var set = timeline.paper.set();
                    var rx = x + 3, ry = start + 3, rw = defaults.cellWidth - 6, rh = defaults.lineHeight - 6;
                    var el = timeline.drawRect(x + 3, start + 3, defaults.cellWidth - 6, defaults.lineHeight - 6, 0, status.color, 1, status.color).attr({
                        'cursor': day === data.day && data.events && data.events.length > 0 ? 'pointer' : 'default',
                    });

                    set.push(el);
                    set.data = data;
                    set.date = moment().add(day + 2, 'day');

                    if (day === data.day && data.events && data.events.length > 0) {
                        var px1 = rx + 1, py1 = ry + rh + 1, px2 = rx + rw + 1, py2 = ry + rh + 1, px3 =  rx + rw + 1, py3 = ry + 1;
                        set.push(timeline.paper.path('M' + px1 + ',' + py2 + ',' + px2 + ',' + py2 + ',' + px3 + ',' + py3 + 'z').attr({
                                'fill': '#fff',
                                'stroke': '#fff',
                                'cursor': 'pointer',
                            }), timeline.paper.text((rx + rw/2) + 5, (ry + rh/2) + 5, data.events.length).attr({
                                'font-family': 'Open Sans',
                                'font-size': '10px',
                                'fill': '#000',
                                'cursor': 'pointer',
                            }));

                        _.each(set.items, function(element){
                            element.set = set;
                            element.click(function(){
                                var cx = timeline.paper.canvas.offsetLeft;
                                var cy = timeline.paper.canvas.offsetTop;
                                var dv = timeline.paper.canvas.parentElement.getBoundingClientRect();
                                var dx = dv.left, dy = dv.top;
                                var bx = this.set[0].getBBox();
                                var ox = 15, oy = -15;
                                var events = this.set.data.events;

                                _.each(events, function(event) {
                                    event.description = _.chain(defaults.events)
                                        .filter(function(e) {
                                            return e.id === event.id;
                                        }).first().value().text;

                                    if (!event.status.id) {
                                        event.status = _.chain(defaults.status)
                                            .filter(function(s) {
                                                return s.id === event.status;
                                            }).first().value();
                                    }
                                });

                                showEventip({ 
                                    coords: { x: dx + bx.x2 + ox, y: dy + bx.y + oy }, 
                                    events: this.set.data.events,
                                    product: item.text,
                                    day: this.set.date,
                                });

                            });
                        });
                    }

                    _.each(set.items, function(item){
                        item.status = status;
                        item.hover(function(){
                            showTooltip(this.status.text);
                        }, hideTooltip);

                        item.mousemove(function(){
                            showTooltip(this.status.text);
                        });
                    });
                }
            }

        }
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
        hideEventip();
        timeline.draw(this.scope, this.canvas);
    };

    var showTooltip = function(tip) {
        timeline.scope.$emit('TOOLTIP_SHOW', tip);
    };

    var hideTooltip = function() {
        timeline.scope.$emit('TOOLTIP_HIDE');
    };

    var showEventip = function(params) {
        timeline.scope.$emit('EVENTIP_SHOW', params);
    };

    var hideEventip = function(params) {
        timeline.scope.$emit('EVENTIP_HIDE', params);
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
        showEventip: showEventip,
        hideEventip: hideEventip,
    }

}();