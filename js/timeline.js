var debug = {};

var Timeline = function(scope, canvas) {
    this.scope = scope;
    this.canvas = document.getElementById(canvas);
}

Timeline.prototype = function() {

    var timeline = {};

    var items = [ 
        // { type: 'date' },
        { type: 'head', text: 'Hardware Products', showDates: true },
        { type: 'item', text: 'Decoder', history: [ 
            { day: -180, status: 1 },
            { day: -5, status: 2, events: [
                { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                { id: 5228, status: 2, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                { id: 5228, status: 3, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
            ]},
        ] },
        { type: 'item', text: 'HD Decoder', history: [ 
            { day: -8, status: 1 },
            { day: -5, status: 3, events: [
                { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 02, 15, 0]) },
                { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 13, 05, 54, 0]) },
            ]},
        ] },
        { type: 'item', text: 'Smartcard', history: [ 
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
        // { type: 'none', text: '' },
        { type: 'head', text: 'Software Products', showDates: false },
        { type: 'item', text: 'TV Basic', history: [ 
            { day: -180, status: 1 },
        ] },
        { type: 'item', text: 'TV Gold Package', history: [ 
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
        { type: 'item', text: 'TV Silver Package', history: [ 
            { day: -10, status: 4, events: [
                { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
            ]},
            { day: -9, status: 1, events: [
                { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
                { id: 5228, status: 1, user: 'admin', time: moment([2014, 1, 1, 12, 54, 23, 0]) },
            ]},
        ] },
        { type: 'item', text: 'VoIP Basic', history: [ 
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
        { type: 'none', text: '' },
        { type: 'head', text: 'Contacts', showDates: false },
        { type: 'item', text: 'Phone' },
        { type: 'item', text: 'Email' },
        { type: 'item', text: 'Other' },
    ];

    var months = [
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
    ];

    var defaults = {
        margin: { top: 18, left: 5 },
        days: 14,
        lineHeight: 25,
        lineColor: '#eeeeee',
        // lineColor: '#CCCCCC',
        
        cellWidth: 25,
        maxDetailWidth: 250,
        itemHeaderFont: {
            fontFamily: 'Open Sans',
            fontColor: '#000000',
            fontSize: '14px',
            fontBold: true,
        },
        itemFont: {
            fontFamily: 'Open Sans',
            fontColor: '#428bca',
            fontSize: '14px',
            fontBold: false,
        },
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
        ]
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

    timeline.drawLineHeader = function(defaults, text, start, days) {
        // var background = timeline.drawRect(0, start + 2, defaults.canvas.width, defaults.lineHeight - 4, 0, '#FAFAFA', 1, '#FAFAFA');
        var background = timeline.drawRect(0, start + 2, defaults.canvas.width, defaults.lineHeight - 4, 0, '#F5F5F5', 1, '#F5F5F5');


        var y = start + (defaults.lineHeight/2) + 1;
        timeline.drawText(text, defaults.margin.left, y, defaults.itemHeaderFont);

        y = start + defaults.lineHeight - 2;

        // timeline.drawLine(-1, y, defaults.canvas.width, y, defaults.lineColor, 1);

        // timeline.drawLine(0, y - defaults.lineHeight, defaults.canvas.width, y - defaults.lineHeight, defaults.lineColor, 1);
        // timeline.drawLine(0, y, defaults.canvas.width, y, defaults.lineColor, 1);

        var color = defaults.lineColor;
        // var color = '#98CAE7';

        timeline.drawRect(0, y - defaults.lineHeight + 2, defaults.canvas.width, 1, 0, color, 1, color);
        timeline.drawRect(0, y, defaults.canvas.width, 1, 0, color, 1, color);

        
        if (days) {
            var today = new Date();

            var x = defaults.canvas.width;

            for (var i = defaults.days - 1; i > 0; i--) {
                var d = today.getDate();
                var m = today.getMonth();

                x -= defaults.cellWidth;

                if ((d === 1) || (i === 1)) {

                    var dx = x, dy = y - defaults.lineHeight - 12, dw = defaults.cellWidth, dh = 13;

                    timeline.drawRect(dx, dy, dw, dh, 0, months[m].color, 1, months[m].color);

                    timeline.paper.text(dx + (dw/2), (dy + dh)/2 + 2, months[m].text).attr({
                        'font-family': 'RobotoL',
                        'font-size': '10.5px',
                        'fill': '#ffffff'
                    });

                    var pw = 8, ph = 5;

                    var px1 = (dx + (dw/2)) - (pw/2), py1 = dy + dh;
                    var px2 = px1 + pw, py2 = py1;
                    var px3 = px2 - (pw/2), py3 = py1 + ph;

                    timeline.paper.path('M' + px1 + ',' + py2 + ',' + px2 + ',' + py2 + ',' + px3 + ',' + py3 + 'z').attr({
                        'fill': months[m].color, 'stroke': months[m].color
                    });
                }

                if (i === defaults.days - 1) {
                    var c = '#D73027';

                    timeline.drawRect(x + 3, y - defaults.lineHeight + 5, defaults.cellWidth - 6, defaults.lineHeight - 7, 0, c, 1, c);

                    timeline.paper.text(x + (defaults.cellWidth/2), y - defaults.lineHeight/2 + 2, d).attr({
                        'font-family': 'Open Sans',
                        'font-size': '11px',
                        'fill': '#ffffff'
                    });
                }
                else {
                    timeline.paper.text(x + (defaults.cellWidth/2), y - defaults.lineHeight/2 + 2, d).attr({
                        'font-family': 'Open Sans',
                        'font-size': '11px',
                        'fill': '#000000'
                    });
                }

                today.setDate(today.getDate() - 1);
            };
        }
    };

    timeline.drawLineItem = function(defaults, item, start) {
        var y = start + (defaults.lineHeight/2);
        
        timeline.drawText(item.text, defaults.margin.left, y, defaults.itemFont).attr({
            'cursor': 'pointer'
        });

        y = start + defaults.lineHeight;
        timeline.drawLine(0, y, defaults.canvas.width, y, defaults.lineColor);
        // timeline.drawLine(0, start, 0, y, defaults.lineColor);
        // timeline.drawLine(defaults.canvas.width, start, defaults.canvas.width, y, defaults.lineColor);

        var x = defaults.canvas.width - (defaults.days * defaults.cellWidth);

        for (var i = 0; i < defaults.days - 1; i++) {
            x += defaults.cellWidth;
            if (item.history) {
                
                var color = '#ffffff';
                var d = defaults.days * -1 + i; 
                
                var history = _.chain(item.history)
                    .filter(function(h) {
                        return (d >= h.day)
                    }).sortBy(function(h) {
                        return h.day * -1;
                    }).first().value();
                
                if (history) {
                    var status = _.filter(defaults.status, function(s){
                        return s.id === history.status;
                    });

                    if (status.length > 0) {
                        
                        status = _.filter(defaults.status, function(s){
                            return s.id === history.status;
                        })[0];

                        var set = timeline.paper.set();
                        
                        var rx = x + 3, ry = start + 3, rw = defaults.cellWidth - 6, rh = defaults.lineHeight - 6;

                        var el = timeline.drawRect(x + 3, start + 3, defaults.cellWidth - 6, defaults.lineHeight - 6, 0, status.color, 1, status.color).attr({
                            'cursor': d === history.day && history.events && history.events.length > 0 ? 'pointer' : 'default',
                        });

                        set.push(el);

                        set.history = history;
                        set.date = moment().add(d + 2, 'day');

                        // draw digit in mid of rect

                        // if (d === history.day && history.events && history.events.length > 0) {
                            
                        //     // timeline.paper.circle((rx + rw/2) + .5, (ry + rh/2) + .5, 7.5).attr({
                        //     timeline.paper.circle((rx + rw/2) + .5, (ry + rh/2) + .5, 6.5).attr({
                        //     // timeline.paper.circle((rx + rw/2) + .5, (ry + rh/2) + .5, 7).attr({                                
                        //         // 'fill': '#FFC300',
                        //         'fill': status.color,
                        //         // 'fill': '#ffff00',
                        //         // 'stroke': status.color,
                        //         'stroke': '#fff',
                        //         'stroke-width': 2
                        //     });

                        //     // timeline.paper.circle((rx + rw/2) + .5, (ry + rh/2) + .5, 6.5).attr({
                        //     // // timeline.paper.circle((rx + rw/2) + .5, (ry + rh/2) + .5, 7).attr({                                
                        //     //     // 'fill': '#FFC300',
                        //     //     'fill': status.color,
                        //     //     // 'fill': '#ffff00',
                        //     //     // 'stroke': status.color,
                        //     //     'stroke': '#fff',
                        //     // });

                        //     timeline.paper.text((rx + rw/2) + .45, ry + rh/2, history.events.length).attr({
                        //     // timeline.paper.text(rx + rw/2, ry + rh/2, history.events.length).attr({
                        //         'font-family': 'Open Sans',
                        //         // 'font-family': 'RobotoL',
                        //         // 'font-family': 'Arial',

                        //         'font-size': '11px',
                        //         // 'font-weight': 'bold',
                        //         // 'fill': '#ffffff',
                        //         // 'fill': status.color,
                        //         // 'fill': '#000',
                        //         'fill': '#fff',
                                
                        //         'cursor': 'pointer'
                        //     });
                        // }


                        if (d === history.day && history.events && history.events.length > 0) {
                            var px1 = rx + 1, py1 = ry + rh + 1, px2 = rx + rw + 1, py2 = ry + rh + 1, px3 =  rx + rw + 1, py3 = ry + 1;
                            set.push(timeline.paper.path('M' + px1 + ',' + py2 + ',' + px2 + ',' + py2 + ',' + px3 + ',' + py3 + 'z').attr({
                                    'fill': '#fff',
                                    'stroke': '#fff',
                                    // 'fill': '#fffacd',
                                    // 'stroke': '#FFFFE0',

                                    'cursor': 'pointer',
                                }), timeline.paper.text((rx + rw/2) + 5, (ry + rh/2) + 5, history.events.length).attr({
                                // }), timeline.paper.text((rx + rw/2) + 5, (ry + rh/2) + 3, history.events.length).attr({
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

                                    // bottom: 658
                                    // height: 377
                                    // left: 67
                                    // right: 1093.65625
                                    // top: 281
                                    // width: 1026.65625
                                    // __proto__: ClientRect                                    

                                    // var blah = set[0].getBBox();
                                    var dv = timeline.paper.canvas.parentElement.getBoundingClientRect();

                                    var dx = dv.left, dy = dv.top;

                                    // cx: 1010
                                    // cy: 106
                                    // height: 19
                                    // toString: function x_y_w_h() {
                                    // width: 19
                                    // x: 1000.5
                                    // x2: 1019.5
                                    // y: 96.5
                                    // y2: 115.5
                                    // __proto__: Object

                                    var bx = this.set[0].getBBox();

                                    // showEventip({ coords: { x: dx + cx, y: dy + cy }, events: this.status.events });

                                    var ox = 15, oy = -15;

                                    var events = this.set.history.events;

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
                                        events: this.set.history.events,
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
        }
    };

    timeline.drawVerticalBars = function(defaults) {
        var x = defaults.canvas.width - (defaults.days * defaults.cellWidth);

        for (var i = 0; i < defaults.days - 1; i++) {
            x += defaults.cellWidth;
            
            var color = '#FFFFFF';

            if (i % 2 === 0) {
                timeline.drawRect(x, defaults.margin.top, defaults.cellWidth, defaults.canvas.height, defaults.margin.top, color, 1, color);
            }
        }
    };

    timeline.draw = function(scope, canvas) {
	    timeline.destroy();

        timeline.scope = scope;

        // 1   Active
        // 2   Cancelled
        // 3   Non-pay Disc
        // 4   Waiting Activation
        // 5   Pending Removal
        // 6   Scheduled Activation
        // 7   Suspended


        defaults.canvas = {
            width: canvas.clientWidth,
            height: (items.length * defaults.lineHeight) + defaults.margin.top
        }

        var l = defaults.canvas.width/3; // left
        var r = l * 2; // right

        if (l > defaults.maxDetailWidth) {
            r = defaults.canvas.width - defaults.maxDetailWidth; // take rest of space
        }

        defaults.days = Math.floor(r/defaults.cellWidth);

        timeline.paper = Raphael(canvas, defaults.canvas.width, defaults.canvas.height + 5);

        defaults.canvas.width = defaults.canvas.width - 5;

        timeline.drawVerticalBars(defaults);


        // debug.timeline = timeline;
        for (var i = 0; i < items.length; i++) {
            
            if (items[i].type === 'head') {
                timeline.drawLineHeader(defaults, items[i].text, (i * defaults.lineHeight) + defaults.margin.top, items[i].showDates)
            } else if (items[i].type === 'item') {
                timeline.drawLineItem(defaults, items[i], (i * defaults.lineHeight) + defaults.margin.top)
            } else {
                // timeline.drawLineHeader(defaults, '', i * defaults.lineHeight, i === 0)                    
            }
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
        return defaults.days - 2;
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