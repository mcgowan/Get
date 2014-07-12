var Timeline = function(canvas) {
    this.canvas = document.getElementById(canvas);
}

Timeline.prototype = function() {

    var timeline = {};

    timeline.drawLine = function(x1, y1, x2, y2, width, color) {
    	timeline.paper.path('M' + x1 + ' ' + y1 + 'L' + x2 + ' ' + y2).attr({
	            'stroke': color ? color : '#000000',
	            'stroke-width': width ? width : 1
	        }).translate(0.5, 0.5);
    };

    timeline.drawCell = function(x1, y1, color, fill) {
        timeline.drawRect(x1, y1, 18, 18, 1, 1, color, fill);
    };

    timeline.drawRect = function(x1, y1, w, h, radius, width, color, fill) {
        timeline.paper.rect(x1, y1, 18, 18, radius ? radius : 0).attr({
                'fill': fill ? fill : '#ffffff',
                'stroke': color ? color : '#000000',
                'stroke-width': width ? width : 1
            }).translate(0.5, 0.5);
    };

    timeline.draw = function(canvas) {
	    timeline.destroy();

        timeline.paper = Raphael(canvas, canvas.clientWidth, 300);

        var width = canvas.clientWidth - 10;

        // timeline.drawLine(0, 100, width, 100);
        // timeline.drawLine(0, 50, 0, 150);
        // timeline.drawLine(width, 50, width, 150);

        var g = 23;
        var x = 0, y = 0;
        for(var i = 0; i < 14; i++) {
            timeline.drawCell(x, y, '#44b6ae', '#7BCBC6');
            x += g;
        }

        x = 0; y = 25;
        for(var i = 0; i < 14; i++) {
            timeline.drawCell(x, y, '#E35B5A', '#EB8B8B');
            x += g;
        }

        x = 0; y = 50;
        for(var i = 0; i < 14; i++) {
            if (i < 7) {
                timeline.drawCell(x, y, '#44b6ae', '#7BCBC6');
            } else if (i === 7) {
                // timeline.drawCell(x, y, '#D64635', '#D64635');
                timeline.drawCell(x, y, '#E35B5A', '#EB8B8B');

                // timeline.paper.text(x + 9, y + 9, 4).attr({
                //     'font-family': 'RobotoL',
                //     'font-size': 18,
                //     'fill': '#ffffff'
                // });


                timeline.paper.text(x + 10, y + 9, '\uf0e7').attr({
                    'font-family': 'FontAwesome',
                    'font-size': 16,
                    'fill': '#ffffff'
                });

                // timeline.paper.text(x + 9, y + 9, '\uf071').attr({
                //     'font-family': 'FontAwesome',
                //     'font-size': 14,
                //     'fill': '#FFFF00'
                // });

                // timeline.paper.text(x + 9, y + 9, '\uf06a').attr({
                //     'font-family': 'FontAwesome',
                //     'font-size': 14,
                //     'fill': '#FFFF00'
                // });


            } else {
                timeline.drawCell(x, y, '#E35B5A', '#EB8B8B');
            }
            x += g;
        }


// #FFC20E
        

        // timeline.drawCell(0, 0, '#eeeeee');
        // timeline.drawCell(25, 0, '#44b6ae');


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