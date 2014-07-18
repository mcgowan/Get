var debug = {};

var Timeline = function(canvas) {
    this.canvas = document.getElementById(canvas);
}

Timeline.prototype = function() {

    var timeline = {};

    timeline.drawLine = function(x1, y1, x2, y2, color, width) {
    	timeline.paper.path('M' + x1 + ' ' + y1 + 'L' + x2 + ' ' + y2).attr({
	            'stroke': color ? color : '#000000',
	            'stroke-width': width ? width : 1
	        }).translate(0.5, 0.5);
    };

    timeline.drawCell = function(x1, y1, color, fill) {
        timeline.drawRect(x1, y1, 18, 18, 1, 1, color, fill);
    };

    timeline.drawRect = function(x1, y1, w, h, radius, color, width, fill) {
        timeline.paper.rect(x1, y1, w, h, radius ? radius : 0).attr({
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
        timeline.paper.text(x + d.w/2, y, text).attr({
            'font-family': f.fontFamily,
            'font-size': f.fontSize,
            'font-weight': f.fontBold === true ? 'bold' : 'normal',
            'fill': f.fontColor
        });

    };

    timeline.drawLineHeader = function(defaults, text, start, days) {
        var y = start + (defaults.lineHeight/2);
        timeline.drawText(text, defaults.leftMargin, y, defaults.itemHeaderFont);

        y = start + defaults.lineHeight - 2;
        // timeline.drawLine(-1, y, defaults.canvas.width, y, defaults.lineColor, 1);

        timeline.drawRect(0, y, defaults.canvas.width, 1, 0, defaults.lineColor, 1, defaults.lineColor);



        if (days) {

            l = defaults.canvas.width/3; // left
            r = l * 2; // right

            if (l > defaults.maxDetailWidth) {
                r = defaults.canvas.width - defaults.maxDetailWidth; // take rest of space
            }

            days = Math.floor(r/defaults.cellWidth);

            x = defaults.canvas.width - (days * defaults.cellWidth);

            for (var i = 0; i < days - 1; i++) {

                x += defaults.cellWidth;

                timeline.paper.text(x + (defaults.cellWidth/2), defaults.lineHeight/2, i).attr({
                    'font-family': 'RobotoL',
                    'font-size': '10px',
                    'fill': '#A6A6A6'
                });



            };

        }
    };

    timeline.drawLineItem = function(defaults, item, start) {
        var y = start + (defaults.lineHeight/2);
        timeline.drawText(item.text, defaults.leftMargin, y, defaults.itemFont);

        y = start + defaults.lineHeight;
        timeline.drawLine(0, y, defaults.canvas.width, y, defaults.lineColor);
        timeline.drawLine(0, start, 0, y, defaults.lineColor);

        l = defaults.canvas.width/3; // left
        r = l * 2; // right

        if (l > defaults.maxDetailWidth) {
            r = defaults.canvas.width - defaults.maxDetailWidth; // take rest of space
        }

        days = Math.floor(r/defaults.cellWidth);

        x = defaults.canvas.width - (days * defaults.cellWidth);

        for (var i = 0; i < days - 1; i++) {
            x += defaults.cellWidth;
            if (item.history) {
                var color = '#ffffff';
                var d = days * -1 + i; 
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

                        timeline.drawRect(x + 3, start + 3, defaults.cellWidth - 6, defaults.lineHeight - 6, 0, color, 1, color);
                    }
                }
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

        var items = [ 
            { type: 'head', text: 'Hardware Products' },
            { type: 'item', text: 'HD Decoder', history: [ 
                { day: -8, status: 1 },
                { day: -5, status: 3 },
            ] },
            { type: 'item', text: 'Decoder', history: [ 
                { day: -180, status: 1 },
                { day: -5, status: 2 },
            ] },
            { type: 'item', text: 'Smartcard', history: [ 
                { day: -180, status: 1 },
                { day: -5, status: 7 },
                { day: -4, status: 6 },
                { day: -3, status: 1 },
            ] },
            { type: 'none', text: '' },
            { type: 'head', text: 'Software Products' },
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
            { type: 'head', text: 'Contacts' },
            { type: 'item', text: 'Phone' },
            { type: 'item', text: 'Email' },
            { type: 'item', text: 'Other' },
        ];

        var defaults = {
            leftMargin: 5, 
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

            // 1   Active
            // 2   Cancelled
            // 3   Non-pay Disc
            // 4   Waiting Activation
            // 5   Pending Removal
            // 6   Scheduled Activation
            // 7   Suspended

            status: [ 
                { id: 1, color: '#A6D96A' }, // Active
                { id: 2, color: '#F46D43' }, // Cancelled
                { id: 3, color: '#D73027' }, // Non-pay Disconnect
                { id: 4, color: '#FFFFBF' }, // Waiting Activation
                { id: 5, color: '#FEE08B' }, // Pending Removal
                { id: 6, color: '#D9EF8B' }, // Scheduled Activation
                { id: 7, color: '#FDAE61' }, // Suspended
            ],
        };

        defaults.canvas = {
            width: canvas.clientWidth,
            height: items.length * defaults.lineHeight
        }

        debug.defaults = defaults;

        timeline.paper = Raphael(canvas, defaults.canvas.width, defaults.canvas.height + 5);

        defaults.canvas.width = defaults.canvas.width - 5;


        // debug.timeline = timeline;

        for (var i = 0; i < items.length; i++) {
            if (items[i].type === 'head') {
                timeline.drawLineHeader(defaults, items[i].text, i * defaults.lineHeight, i === 0)                    
            } else if (items[i].type === 'item') {
                timeline.drawLineItem(defaults, items[i], i * defaults.lineHeight, i === 0)                    
            } else {

            }
        }



        // var lineColor = '#eeeeee';

        // var x, y, lineCount = 2;
        // var lineHeight = 25;
        // var days = 14;


        // var width = canvas.clientWidth - 8;
        // var height = lineHeight * lineCount;

        // var top = lineHeight;
        // // var top = 0;


        // var bottom = top + height;
        // var left = 0;
        // var right = width;

        // var cellMaxWidth = 25;

        // timeline.drawRect(left, top, width, height, 0, lineColor);

        // // draw horiz. lines
        // y = top;
        // for (var i = 0; i < lineCount - 1; i++) {
        //     y += lineHeight;
        //     timeline.drawLine(left, y, right, y, lineColor);
        // }

        // // draw cells
        // var maxWidth = days * cellMaxWidth
        // var cellsStart = right / 3;
        // var minStart = right - maxWidth;

        // x = cellsStart;
        // if (cellsStart < minStart) { //use minStart
        //     x = minStart;
        // }


        // // draw dates

        // var day = (right - x) / days;

        // for (var i = 0; i < days; i++) {
        //     timeline.paper.text(x + (day/2), lineHeight/2, i).attr({
        //         'font-family': 'RobotoL',
        //         'font-size': '10px',
        //         'fill': '#A6A6A6'
        //     });
        //     timeline.drawLine(x, top, x, bottom, lineColor);
        //     x += day;
        // }













        // timeline.drawLine(x * 2, 0, x * 2, lineHeight * lines, '#EEEEEE');




        // timeline.drawLine(0, 50, 0, 150);
        // timeline.drawLine(width, 50, width, 150);


        // var f = {
        //     fontFamily: 'Open Sans',
        //     fontColor: '#000000',
        //     fontSize: '14px',
        //     fontBold: true,
        // };

        // x = left + 5
        // y = 22;
        // timeline.drawText('Hardware Products', x, y, f);

        // f.fontBold = false;
        // f.fontColor = '#428bca';

        // y += lineHeight;
        // timeline.drawText('HD Decoder', x, y, f);

        // y += lineHeight;
        // timeline.drawText('Smartcard', x, y, f);

        // f.fontBold = true;
        // f.fontColor = '#000000';

        // y += lineHeight + 10;
        // timeline.drawText('Software Products', x, y, f);

        // f.fontBold = false;
        // f.fontColor = '#428bca';

        // y += lineHeight;
        // timeline.drawText('Basic', x, y, f);

        // y += lineHeight;
        // timeline.drawText('Gold Package', x, y, f);

        // f.fontBold = true;
        // f.fontColor = '#000000';

        // y += lineHeight + 10;
        // timeline.drawText('Contacts', x, y, f);

        // f.fontBold = false;
        // f.fontColor = '#428bca';

        // y += lineHeight;
        // timeline.drawText('Phone', x, y, f);

        // y += lineHeight;
        // timeline.drawText('Email', x, y, f);

        // y += lineHeight;
        // timeline.drawText('Other', x, y, f);

    };

    // #44B6AE

    timeline.destroy = function() {
        if (timeline.paper) {
            timeline.paper.clear();
            timeline.paper.remove();
        }
    };

    var draw = function() {
        console.log('draw');
    	timeline.draw(this.canvas);
    };

    var redraw = function() {
        console.log('redraw');
        timeline.draw(this.canvas);
    };

    return {
        draw: draw,
        redraw: redraw
    }

}();