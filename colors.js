var links = {
    setColor:function (color){
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while (i < alist.length){
        //     alist[i].style.color = color;
        //     i = i+1;
        // } 
        $('a').css('color', color);
    }
}
var Body = {
    setColor:function (color){
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgrounColor:function(color){
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}
function nightdayhandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night') {
        Body.setBackgrounColor('black');
        Body.setColor('white');
        document.querySelector('li').style.color='white';
        self.value = 'day';

        links.setColor('powderblue');
    } else {
        Body.setBackgrounColor('white');
        Body.setColor('black');
        document.querySelector('li').style.color='black';
        self.value = 'night';

        links.setColor('blue');
    }
}