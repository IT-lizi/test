window.addEventListener('load', function() {
    var nav = this.document.querySelector('.nav');
    var lis = nav.querySelectorAll('li');
    var navlist = this.document.querySelector('.navlist');
    var navlis = navlist.querySelectorAll('li');
    for (let i = 0; i < 3; i++) {
        lis[i].addEventListener('mouseover', function() {
            for (var j = 0; j < 3; j++) {
                lis[j].className = '';
            }
            lis[i].className = 'current'
        })
        lis[i].addEventListener('mouseleave', function() {
            lis[i].className = '';
        })
    };
    for (let m = 0; m < 7; m++) {
        navlis[m].addEventListener('mouseover', function() {
            for (var j = 0; j < 7; j++) {
                navlis[j].className = '';
            }
            navlis[m].className = 'current'
        })
        navlis[m].addEventListener('mouseleave', function() {
            navlis[m].className = '';
        })
    }

})