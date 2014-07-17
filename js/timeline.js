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

        y = start + defaults.lineHeight;
        timeline.drawLine(0, y, defaults.canvas.width, y, defaults.lineColor, 2);
    };

    timeline.drawLineItem = function(defaults, text, start) {
        var y = start + (defaults.lineHeight/2);
        timeline.drawText(text, defaults.leftMargin, y, defaults.itemFont);

        y = start + defaults.lineHeight;
        timeline.drawLine(0, y, defaults.canvas.width, y, defaults.lineColor);
        timeline.drawLine(0, start, 0, y, defaults.lineColor);

        var w = defaults.days * defaults.cellMaxWidth;
        var x = defaults.canvas.width/3;

        if (x < defaults.canvas.width - w) {
            x = defaults.canvas.width - w;
        }



        // // draw cells
        // var maxWidth = days * cellMaxWidth
        // var cellsStart = right / 3;
        // var minStart = right - maxWidth;

        // x = cellsStart;
        // if (cellsStart < minStart) { //use minStart
        //     x = minStart;
        // }


        // // draw dates

        var day = (defaults.canvas.width - x) / defaults.days;

        for (var i = 0; i <= defaults.days; i++) {
            // timeline.paper.text(x + (day/2), lineHeight/2, i).attr({
            //     'font-family': 'RobotoL',
            //     'font-size': '10px',
            //     'fill': '#A6A6A6'
            // });
            x += day;

            timeline.drawLine(x, start, x, y, defaults.lineColor);

            console.log(i + ' ' + x);
        }

    };

    timeline.draw = function(canvas) {
	    timeline.destroy();

        var items = [ 
            { type: 'head', text: 'Hardware Products' },
            { type: 'item', text: 'HD Decoder' },
            // { type: 'item', text: 'Smartcard' },
            // { type: 'none', text: '' },
            // { type: 'head', text: 'Software Products' },
            // { type: 'item', text: 'TV Basic' },
            // { type: 'item', text: 'TV Gold Package' },
            // { type: 'item', text: 'VoIP Basic' },
            // { type: 'none', text: '' },
            // { type: 'head', text: 'Contacts' },
            // { type: 'item', text: 'Phone' },
            // { type: 'item', text: 'Email' },
            // { type: 'item', text: 'Other' },
        ];

        var defaults = {
            leftMargin: 5, 
            days: 14,
            lineHeight: 25,
            lineColor: '#eeeeee',
            cellMaxWidth: 25,
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
            }
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
                timeline.drawLineItem(defaults, items[i].text, i * defaults.lineHeight, i === 0)                    
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
    	timeline.draw(this.canvas);
    };

    return {
        draw : draw
    }

}();