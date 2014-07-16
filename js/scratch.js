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


                // timeline.paper.text(x + 10, y + 9, '\uf0e7').attr({
                //     'font-family': 'FontAwesome',
                //     'font-size': 16,
                //     'fill': '#ffffff'
                // });

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
