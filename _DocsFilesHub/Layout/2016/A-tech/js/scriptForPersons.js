$(document).ready(function() {
        var width100 = $('.widthPage').width()-20;//ширина сторінки
        function myRandom (from, to)  {
                return Math.floor((Math.random() * (to - from + 1)) + from);
        }
        var     from = 1,
                to = 25,
                phNumb = new Array(to),
                cW = 16,
                cH = 6,
                sizeFace = width100/cW;
        ;
        for (var i = 0; i<=cW*cH; i++) {
                var quadro = $('#qImg').clone();
                phNumb[i] = myRandom(from,to);
                var vayImg = 'url(img/peoples/'+phNumb[i]+'.png)';
                quadro.css({
                        'background' : vayImg,
                        'height' : sizeFace,
                        'width' : sizeFace,
                        'background-repeat': 'no-repeat',
                        'background-attachment': 'center'
                        /*outline':'0px solid black',
                        /*'margin':'-4px'*/

                });
                $('#qImg').before(quadro);
        };

        $('#facesBlock').css({
                'width':width100,
                'height':sizeFace*cH,
                'margin':'0 auto',
                'border':'none'
        });

});