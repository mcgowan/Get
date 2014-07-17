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

        timeline.paper.text(x + d.w/2, y - d.h/2, text).attr({
            'font-family': f.fontFamily,
            'font-size': f.fontSize,
            'font-weight': f.fontBold === true ? 'bold' : 'normal',
            'fill': f.fontColor
        });
    };

    timeline.draw = function(canvas) {
	    timeline.destroy();

        timeline.paper = Raphael(canvas, canvas.clientWidth, 300);

        var lineColor = '#eeeeee';

        var x, y, lineCount = 2;
        var lineHeight = 25;
        var days = 14;


        var width = canvas.clientWidth - 8;
        var height = lineHeight * lineCount;

        var top = lineHeight;
        // var top = 0;


        var bottom = top + height;
        var left = 0;
        var right = width;

        var cellMaxWidth = 25;

        timeline.drawRect(left, top, width, height, 0, lineColor);

        // draw horiz. lines
        y = top;
        for (var i = 0; i < lineCount - 1; i++) {
            y += lineHeight;
            timeline.drawLine(left, y, right, y, lineColor);
        }

        // draw cells
        var maxWidth = days * cellMaxWidth
        var cellsStart = right / 3;
        var minStart = right - maxWidth;

        x = cellsStart;
        if (cellsStart < minStart) { //use minStart
            x = minStart;
        }


        // draw dates

        var day = (right - x) / days;

        for (var i = 0; i < days; i++) {
            timeline.paper.text(x + (day/2), lineHeight/2, i).attr({
                'font-family': 'RobotoL',
                'font-size': '10px',
                'fill': '#A6A6A6'
            });
            timeline.drawLine(x, top, x, bottom, lineColor);
            x += day;
        }













        // timeline.drawLine(x * 2, 0, x * 2, lineHeight * lines, '#EEEEEE');




        // timeline.drawLine(0, 50, 0, 150);
        // timeline.drawLine(width, 50, width, 150);


        var f = {
            fontFamily: 'Open Sans',
            fontColor: '#000000',
            fontSize: '14px',
            fontBold: true,
        };

        x = left + 5
        y = 22;
        timeline.drawText('Hardware Products', x, y, f);

        f.fontBold = false;
        f.fontColor = '#428bca';

        y += lineHeight;
        timeline.drawText('HD Decoder', x, y, f);

        y += lineHeight;
        timeline.drawText('Smartcard', x, y, f);

        f.fontBold = true;
        f.fontColor = '#000000';

        y += lineHeight + 10;
        timeline.drawText('Software Products', x, y, f);

        f.fontBold = false;
        f.fontColor = '#428bca';

        y += lineHeight;
        timeline.drawText('Basic', x, y, f);

        y += lineHeight;
        timeline.drawText('Gold Package', x, y, f);

        f.fontBold = true;
        f.fontColor = '#000000';

        y += lineHeight + 10;
        timeline.drawText('Contacts', x, y, f);

        f.fontBold = false;
        f.fontColor = '#428bca';

        y += lineHeight;
        timeline.drawText('Phone', x, y, f);

        y += lineHeight;
        timeline.drawText('Email', x, y, f);

        y += lineHeight;
        timeline.drawText('Other', x, y, f);

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