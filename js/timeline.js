var Timeline = function(canvas) {
    this.canvas = document.getElementById(canvas);
}

Timeline.prototype = function() {

    var timeline = {};

    var items = [ 
        // { type: 'date' },
        { type: 'head', text: 'Hardware Products', showDates: true },
        { type: 'item', text: 'Decoder', history: [ 
            { day: -180, status: 1 },
            { day: -5, status: 2 },
        ] },
        { type: 'item', text: 'HD Decoder', history: [ 
            { day: -8, status: 1 },
            { day: -5, status: 3 },
        ] },
        { type: 'item', text: 'Smartcard', history: [ 
            { day: -180, status: 1 },
            { day: -5, status: 7 },
            { day: -4, status: 6 },
            { day: -3, status: 1 },
        ] },
        // { type: 'none', text: '' },
        { type: 'head', text: 'Software Products', showDates: false },
        { type: 'item', text: 'TV Basic', history: [ 
            { day: -180, status: 1 },
        ] },
        { type: 'item', text: 'TV Gold Package', history: [ 
            { day: -180, status: 1 },
            { day: -10, status: 2 },
            { day: -9, status: 5 },
            { day: -3, status: 0 },
        ] },
        { type: 'item', text: 'TV Silver Package', history: [ 
            { day: -10, status: 4 },
            { day: -9, status: 1 },
        ] },
        { type: 'item', text: 'VoIP Basic', history: [ 
            { day: -10, status: 1 },
            { day: -7, status: 2 },
            { day: -6, status: 0 },
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

                    // timeline.drawLineDate(defaults, i * defaults.lineHeight)
    timeline.drawLineDate = function(defaults, start) {

    };

    timeline.drawLineHeader = function(defaults, text, start, days) {
        var background = timeline.drawRect(0, start + 2, defaults.canvas.width, defaults.lineHeight - 4, 0, '#FAFAFA', 1, '#FAFAFA');


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
                        color = _.filter(defaults.status, function(s){
                            return s.id === history.status;
                        })[0].color;
                        
                        timeline.drawRect(x + 3, start + 3, defaults.cellWidth - 6, defaults.lineHeight - 6, 0, color, 1, color).attr({
                            'cursor': 'pointer'
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

    timeline.draw = function(canvas) {
	    timeline.destroy();

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
        // console.log('draw');
    	timeline.draw(this.canvas);
    };

    var redraw = function() {
        // console.log('redraw');
        timeline.draw(this.canvas);
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
    }

}();