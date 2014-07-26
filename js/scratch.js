                        // draw digit in mid of rect

                        // if (d === history.day && history.events && history.events.length > 0) {
                            
                        //     // timeline.paper.circle((rx + rw/2) + .5, (ry + rh/2) + .5, 7.5).attr({
                        //     // // timeline.paper.circle((rx + rw/2) + .5, (ry + rh/2) + .5, 6.5).attr({
                        //     // // timeline.paper.circle((rx + rw/2) + .5, (ry + rh/2) + .5, 7).attr({                                
                        //     //     // 'fill': '#FFC300',
                        //     //     // 'fill': status.color,
                        //     //     'fill': '#fff',
                        //     //     'stroke': status.color,
                        //     //     'stroke': '#fff',
                        //     //     'stroke-width': 2
                        //     // });

                        //     // timeline.paper.circle((rx + rw/2) + .5, (ry + rh/2) + .5, 6.5).attr({
                        //     // // timeline.paper.circle((rx + rw/2) + .5, (ry + rh/2) + .5, 7).attr({                                
                        //     //     // 'fill': '#FFC300',
                        //     //     'fill': status.color,
                        //     //     // 'fill': '#ffff00',
                        //     //     // 'stroke': status.color,
                        //     //     'stroke': '#fff',
                        //     // });

                        //     // timeline.paper.text((rx + rw/2) + .45, ry + rh/2, history.events.length).attr({
                        //     timeline.paper.text(rx + rw/2, ry + rh/2, history.events.length).attr({
                        //         'font-family': 'Open Sans',
                        //         // 'font-family': 'RobotoL',
                        //         // 'font-family': 'Arial',

                        //         'font-size': '11px',
                        //         // 'font-weight': 'bold',
                        //         // 'fill': '#ffffff',
                        //         // 'fill': status.color,
                        //         'fill': '#000',
                        //         // 'fill': '#fff',
                                
                        //         'cursor': 'pointer'
                        //     });
                        // }



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
