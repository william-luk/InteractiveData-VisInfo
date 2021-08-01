//run animations only when assets are loaded at the beginning
window.onload = setTimeout(
    function () {
        document.body.style.display = 'initial';
        //animate main court
        anime({
            targets: '#mainSVG #Layer_1 .cls-1a',
            duration: 3000,
            easing: "easeInOutExpo",
            strokeDashoffset: [anime.setDashoffset, 0]
        });

        //animate main court, different parts at speed
        anime({
            targets: '#Layer_1 .cls-2',
            duration: 1000,
            easing: "easeInOutExpo",
            opacity: 1,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(1000, {
                start: 1800
            })
        });

        //animate all shots at beginning
        var revealAllShots = anime.timeline({
            easing: 'easeInOutQuad',
            duration: 100
        })
        revealAllShots
            .add({
                targets: '#Layer_1 #nov-shots .cls-4',
                opacity: 1,
                strokeDashoffset: [anime.setDashoffset, 0],
                delay: anime.stagger(70)
            })
            .add({
                targets: '#Layer_1 #dec-shots .cls-4',
                opacity: 1,
                strokeDashoffset: [anime.setDashoffset, 0],
                delay: anime.stagger(70)
            })
            .add({
                targets: '#Layer_1 #jan-shots .cls-4',
                opacity: 1,
                strokeDashoffset: [anime.setDashoffset, 0],
                delay: anime.stagger(70)
            })
            .add({
                targets: '#Layer_1 #feb-shots .cls-4',
                opacity: 1,
                strokeDashoffset: [anime.setDashoffset, 0],
                delay: anime.stagger(70)
            })
            .add({
                targets: '#Layer_1 #nov-shots .cls-5',
                opacity: 1,
                strokeDashoffset: [anime.setDashoffset, 0],
                delay: anime.stagger(30)
            })
            .add({
                targets: '#Layer_1 #dec-shots .cls-5',
                opacity: 1,
                strokeDashoffset: [anime.setDashoffset, 0],
                delay: anime.stagger(30)
            })
            .add({
                targets: '#Layer_1 #jan-shots .cls-5',
                opacity: 1,
                strokeDashoffset: [anime.setDashoffset, 0],
                delay: anime.stagger(30)
            })
            .add({
                targets: '#Layer_1 #feb-shots .cls-5',
                opacity: 1,
                strokeDashoffset: [anime.setDashoffset, 0],
                delay: anime.stagger(30)
            })

        //animate basket
        anime({
            targets: '#Layer_1 #basket',
            duration: 2000,
            easing: "easeInOutExpo",
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(1000, {
                start: 2000
            })
        });

        //animate backboard
        anime({
            targets: '#Layer_1 #backboard',
            duration: 1500,
            easing: "easeInOutExpo",
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(1000, {
                start: 2100
            })
        });

        //animate chargeline
        anime({
            targets: '#Layer_1 #charge-line',
            duration: 1500,
            easing: "easeInOutExpo",
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(1000, {
                start: 2200
            })
        });

        //move the entire svg container to the left
        anime({
            targets: '#mainSVG',
            'margin-left': 25,
            duration: 1500,
            easing: "easeInOutExpo",
            delay: anime.stagger(1000, {
                start: 2300
            })
        });

        //fill in content cells
        anime({
            targets: '.cell',
            width: "100%",
            duration: 250,
            easing: "easeOutExpo",
            delay: anime.stagger(100, {
                start: 2000,
            })
        });

        //fade in content cells after time
        var contentReveal = anime.timeline({
            easing: "easeOutExpo",
            duration: 1000
        });

        contentReveal
            .add({
                targets: '.cell',
                opacity: 1,
                delay: 3000
            })
            .add({
                targets: '.cell',
                delay: anime.stagger(200, {
                    start: 3000,
                })
            })

        //animate navigation
        var navReveal = anime.timeline({
            easing: 'easeOutQuint',
            duration: 500
        })
        navReveal
            .add({
                targets: 'nav',
                opacity: 1,
                delay: 2000
            })
            .add({
                targets: 'nav',
                height: '70px',
            })
            .add({
                targets: '#shotSelect li',
                opacity: 1,
            })
            .add({
                targets: '#shotSelect li',
                padding: '0px 20px',
                easing: 'easeOutQuad'
            })

        //animate legend
        var navlegend = anime.timeline({
            easing: 'easeOutQuint',
            duration: 500
        })
        navlegend
            .add({
                targets: '#legend',
                opacity: 1,
                delay: 3000
            })
            .add({
                targets: '#legend',
                width: ['0px', '327px'],
            })
            .add({
                targets: '#legend .legendItem',
                opacity: 1,
            })


        //        if (document.getElementById('kembawal-nov2-c').style.backgroundColor = 'aqua') {
        //            document.getElementById('kembawal-nov2').lastElementChild.childNodes[1].style.stroke = '#00db00'; //.style.stroke = '#00db00';
        //            //            document.getElementById('kembawal-nov1').nextSibling.childNodes//.style.strokeWidth = '20px';
        //        } else if (document.getElementById('kembawal-nov2-c').style.backgroundColor != 'aqua') {
        //            document.getElementById('kembawal-nov2').lastElementChild.childNodes[1].style.stroke = '#231f20';
        //        }

    },
    100);

//function getParentID() {
//    var x = this.document.querySelector('.cls-5').parentNode.getAttribute('href');
//    console.log(x);
//}

function showNovShots() {
    var hidelAllShots = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 50
    })
    hidelAllShots
        .add({
            targets: '#Layer_1 #dec-shots .cls-4',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10)
        })
        .add({
            targets: '#Layer_1 #jan-shots .cls-4',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10)
        })
        .add({
            targets: '#Layer_1 #feb-shots .cls-4',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10)
        })
        .add({
            targets: '#Layer_1 #dec-shots .cls-5',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10),
            complete: function () {
                document.getElementById('dec-shots').style.display = 'none';
            }
        })
        .add({
            targets: '#Layer_1 #jan-shots .cls-5',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10),
            complete: function () {
                document.getElementById('jan-shots').style.display = 'none';
            }
        })
        .add({
            targets: '#Layer_1 #feb-shots .cls-5',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10),
            complete: function () {
                document.getElementById('feb-shots').style.display = 'none';
            }
        })

    //animate the november shots
    var revealNovShots = anime.timeline({
        easing: "easeInOutQuad",
        duration: 100,
    });
    revealNovShots
        .add({
            targets: '#Layer_1 #nov-shots .cls-4',
            opacity: 1,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(100)
        })
        .add({
            targets: '#Layer_1 #nov-shots .cls-5',
            opacity: 1,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(100),
            complete: function () {
                document.getElementById('nov-shots').style.display = 'initial';
            }

        })
        .add({
            targets: '#Layer_1 #nov-shots .cls-1',
            opacity: 1,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(50)
        })
        .add({
            targets: '#Layer_1 #nov-shots .cls-1',
            opacity: 0,
            duration: 800
        })

    var hideNotNovContent = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 250
    })
    hideNotNovContent
        .add({
            targets: '.decContent',
            opacity: [1, 0]
        })
        .add({
            targets: '.janContent',
            opacity: [1, 0]
        })
        .add({
            targets: '.febContent',
            opacity: [1, 0]
        })
        .add({
            targets: '.novContent',
            opacity: [0, 1]
        })
        .add({
            complete: function () {
                var getNov = document.getElementsByClassName('novContent');
                var getDec = document.getElementsByClassName('decContent');
                var getJan = document.getElementsByClassName('janContent');
                var getFeb = document.getElementsByClassName('febContent');

                for (i = 0; i < getNov.length; i++) {
                    getNov[i].style.display = 'grid';
                }

                for (i = 0; i < getDec.length; i++) {
                    getDec[i].style.display = 'none';
                }

                for (i = 0; i < getJan.length; i++) {
                    getJan[i].style.display = 'none';
                }

                for (i = 0; i < getFeb.length; i++) {
                    getFeb[i].style.display = 'none';
                }
            }
        })

    var navRipple = anime.timeline({
        easing: 'easeInOutBounce',
        duration: 100
    })
    navRipple
        .add({
            targets: getNavNov,
            translateY: 20,
        })
        .add({
            targets: '.navLink',
            translateY: '-20px',
            color: '#c1c1c1',
            'font-weight': 200,
            scale: 0.8,
            delay: anime.stagger(50, {
                from: 'center'
            })
        })
        .add({
            targets: '#navNov',
            color: '#ffffff',
            'font-weight': 700,
            scale: 1.2
        })
        .add({
            targets: getNavNov,
            translateY: 0
        })
        .add({
            targets: '.navLink',
            translateY: 0,
            easing: 'easeInOutBounce',
            delay: anime.stagger(50, {
                from: 'center'
            })
        })

    var getNavNov = document.getElementById('navNov')
    var getNavDec = document.getElementById('navDec')
    var getNavJan = document.getElementById('navJan')
    var getNavFeb = document.getElementById('navFeb')
    var getNavAll = document.getElementById('navAll')
    var getNav2pt = document.getElementById('nav2pt')
    var getNav3pt = document.getElementById('nav3pt')

}

function showDecShots() {
    var hidelAllShots = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 50
    })
    hidelAllShots
        .add({
            targets: '#Layer_1 #nov-shots .cls-4',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10)
        })
        .add({
            targets: '#Layer_1 #jan-shots .cls-4',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10)
        })
        .add({
            targets: '#Layer_1 #feb-shots .cls-4',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10)
        })
        .add({
            targets: '#Layer_1 #nov-shots .cls-5',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10),
            complete: function () {
                document.getElementById('nov-shots').style.display = 'none';
            }
        })
        .add({
            targets: '#Layer_1 #jan-shots .cls-5',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10),
            complete: function () {
                document.getElementById('jan-shots').style.display = 'none';
            }
        })
        .add({
            targets: '#Layer_1 #feb-shots .cls-5',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10),
            complete: function () {
                document.getElementById('feb-shots').style.display = 'none';
            }
        })

    //animate the december shots
    var revealDecShots = anime.timeline({
        easing: "easeInOutQuad",
        duration: 100,
    });
    revealDecShots
        .add({
            targets: '#Layer_1 #dec-shots',
            complete: function () {
                document.getElementById('dec-shots').style.display = 'initial';
            }
        })
        .add({
            targets: '#Layer_1 #dec-shots .cls-4',
            opacity: 1,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(100)
        })
        .add({
            targets: '#Layer_1 #dec-shots .cls-5',
            opacity: 1,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(100)
        })
        .add({
            targets: '#Layer_1 #dec-shots .cls-1',
            opacity: 1,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(50)
        })
        .add({
            targets: '#Layer_1 #dec-shots .cls-1',
            opacity: 0,
            duration: 800
        })

    var hideNotDecContent = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 250
    })
    hideNotDecContent
        .add({
            targets: '.novContent',
            opacity: [1, 0]
        })
        .add({
            targets: '.janContent',
            opacity: [1, 0]
        })
        .add({
            targets: '.febContent',
            opacity: [1, 0]
        })
        .add({
            targets: '.decContent',
            opacity: [0, 1]
        })
        .add({
            complete: function () {
                var getNov = document.getElementsByClassName('novContent');
                var getDec = document.getElementsByClassName('decContent');
                var getJan = document.getElementsByClassName('janContent');
                var getFeb = document.getElementsByClassName('febContent');

                for (i = 0; i < getNov.length; i++) {
                    getNov[i].style.display = 'none';
                }

                for (i = 0; i < getDec.length; i++) {
                    getDec[i].style.display = 'grid';
                }

                for (i = 0; i < getJan.length; i++) {
                    getJan[i].style.display = 'none';
                }

                for (i = 0; i < getFeb.length; i++) {
                    getFeb[i].style.display = 'none';
                }
            }
        })

    var navRipple = anime.timeline({
        easing: 'easeInOutBounce',
        duration: 100
    })
    navRipple
        .add({
            targets: getNavDec,
            translateY: 20,
        })
        .add({
            targets: '.navLink',
            translateY: '-20px',
            color: '#c1c1c1',
            'font-weight': 200,
            scale: 0.8,
            delay: anime.stagger(50, {
                from: 'center'
            })
        })
        .add({
            targets: '#navDec',
            color: '#ffffff',
            'font-weight': 700,
            scale: 1.2
        })
        .add({
            targets: getNavDec,
            translateY: 0
        })
        .add({
            targets: '.navLink',
            translateY: 0,
            easing: 'easeInOutBounce',
            delay: anime.stagger(50, {
                from: 'center'
            })
        })

    var getNavDec = document.getElementById('navDec')
}

function showJanShots() {
    var hidelAllShots = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 50
    })
    hidelAllShots
        .add({
            targets: '#Layer_1 #nov-shots .cls-4',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10)
        })
        .add({
            targets: '#Layer_1 #dec-shots .cls-4',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10)
        })
        .add({
            targets: '#Layer_1 #feb-shots .cls-4',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10)
        })
        .add({
            targets: '#Layer_1 #nov-shots .cls-5',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10),
            complete: function () {
                document.getElementById('nov-shots').style.display = 'none';
            }
        })
        .add({
            targets: '#Layer_1 #dec-shots .cls-5',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10),
            complete: function () {
                document.getElementById('dec-shots').style.display = 'none';
            }
        })
        .add({
            targets: '#Layer_1 #feb-shots .cls-5',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10),
            complete: function () {
                document.getElementById('feb-shots').style.display = 'none';
            }
        })

    //animate the january shots
    var revealJanShots = anime.timeline({
        easing: "easeInOutQuad",
        duration: 100
    });
    revealJanShots
        .add({
            targets: '#Layer_1 #jan-shots',
            complete: function () {
                document.getElementById('jan-shots').style.display = 'initial';
            }
        })
        .add({
            targets: '#Layer_1 #jan-shots .cls-4',
            opacity: 1,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(100)
        })
        .add({
            targets: '#Layer_1 #jan-shots .cls-5',
            opacity: 1,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(100)
        })
        .add({
            targets: '#Layer_1 #jan-shots .cls-1',
            opacity: 1,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(50)
        })
        .add({
            targets: '#Layer_1 #jan-shots .cls-1',
            opacity: 0,
            duration: 800
        })

    var hideNotJanContent = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 250
    })
    hideNotJanContent
        .add({
            targets: '.novContent',
            opacity: [1, 0]
        })
        .add({
            targets: '.decContent',
            opacity: [1, 0]
        })
        .add({
            targets: '.febContent',
            opacity: [1, 0]
        })
        .add({
            targets: '.janContent',
            opacity: [0, 1]
        })
        .add({
            complete: function () {
                var getNov = document.getElementsByClassName('novContent');
                var getDec = document.getElementsByClassName('decContent');
                var getJan = document.getElementsByClassName('janContent');
                var getFeb = document.getElementsByClassName('febContent');

                for (i = 0; i < getNov.length; i++) {
                    getNov[i].style.display = 'none';
                }

                for (i = 0; i < getDec.length; i++) {
                    getDec[i].style.display = 'none';
                }

                for (i = 0; i < getJan.length; i++) {
                    getJan[i].style.display = 'grid';
                }

                for (i = 0; i < getFeb.length; i++) {
                    getFeb[i].style.display = 'none';
                }
            }
        })

    var navRipple = anime.timeline({
        easing: 'easeInOutBounce',
        duration: 100
    })
    navRipple
        .add({
            targets: getNavJan,
            translateY: 20,
        })
        .add({
            targets: '.navLink',
            translateY: '-20px',
            color: '#c1c1c1',
            'font-weight': 200,
            scale: 0.8,
            delay: anime.stagger(50, {
                from: 'center'
            })
        })
        .add({
            targets: '#navJan',
            color: '#ffffff',
            'font-weight': 700,
            scale: 1.2
        })
        .add({
            targets: getNavJan,
            translateY: 0
        })
        .add({
            targets: '.navLink',
            translateY: 0,
            easing: 'easeInOutBounce',
            delay: anime.stagger(50, {
                from: 'center'
            })
        })

    var getNavJan = document.getElementById('navJan')
}

function showFebShots() {
    var hidelAllShots = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 50
    })
    hidelAllShots
        .add({
            targets: '#Layer_1 #nov-shots .cls-4',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10)
        })
        .add({
            targets: '#Layer_1 #dec-shots .cls-4',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10)
        })
        .add({
            targets: '#Layer_1 #jan-shots .cls-4',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10)
        })
        .add({
            targets: '#Layer_1 #nov-shots .cls-5',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10),
            complete: function () {
                document.getElementById('nov-shots').style.display = 'none';
            }
        })
        .add({
            targets: '#Layer_1 #dec-shots .cls-5',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10),
            complete: function () {
                document.getElementById('dec-shots').style.display = 'none';
            }
        })
        .add({
            targets: '#Layer_1 #jan-shots .cls-5',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10),
            complete: function () {
                document.getElementById('jan-shots').style.display = 'none';
            }
        })

    //animate the february shots
    var revealFebShots = anime.timeline({
        easing: "easeInOutQuad",
        duration: 100
    });
    revealFebShots
        .add({
            targets: '#Layer_1 #feb-shots',
            complete: function () {
                document.getElementById('feb-shots').style.display = 'initial';
            }
        })
        .add({
            targets: '#Layer_1 #feb-shots .cls-4',
            opacity: 1,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(100)
        })
        .add({
            targets: '#Layer_1 #feb-shots .cls-5',
            opacity: 1,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(100)
        })
        .add({
            targets: '#Layer_1 #feb-shots .cls-1',
            opacity: 1,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(50)
        })
        .add({
            targets: '#Layer_1 #feb-shots .cls-1',
            opacity: 0,
            duration: 800
        })

    var hideNotFebContent = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 100
    })
    hideNotFebContent
        .add({
            targets: '.novContent',
            opacity: [1, 0]
        })
        .add({
            targets: '.janContent',
            opacity: [1, 0]
        })
        .add({
            targets: '.decContent',
            opacity: [1, 0]
        })
        .add({
            targets: '.febContent',
            opacity: [0, 1]
        })
        .add({
            complete: function () {
                var getNov = document.getElementsByClassName('novContent');
                var getDec = document.getElementsByClassName('decContent');
                var getJan = document.getElementsByClassName('janContent');
                var getFeb = document.getElementsByClassName('febContent');

                for (i = 0; i < getNov.length; i++) {
                    getNov[i].style.display = 'none';
                }

                for (i = 0; i < getDec.length; i++) {
                    getDec[i].style.display = 'none';
                }

                for (i = 0; i < getJan.length; i++) {
                    getJan[i].style.display = 'none';
                }

                for (i = 0; i < getFeb.length; i++) {
                    getFeb[i].style.display = 'grid';
                }
            }
        })

    var navRipple = anime.timeline({
        easing: 'easeInOutBounce',
        duration: 100
    })
    navRipple
        .add({
            targets: getNavFeb,
            translateY: 20,
        })
        .add({
            targets: '.navLink',
            translateY: '-20px',
            color: '#c1c1c1',
            'font-weight': 200,
            scale: 0.8,
            delay: anime.stagger(50, {
                from: 'center'
            })
        })
        .add({
            targets: '#navFeb',
            color: '#ffffff',
            'font-weight': 700,
            scale: 1.2
        })
        .add({
            targets: getNavFeb,
            translateY: 0
        })
        .add({
            targets: '.navLink',
            translateY: 0,
            easing: 'easeInOutBounce',
            delay: anime.stagger(50, {
                from: 'center'
            })
        })

    var getNavFeb = document.getElementById('navFeb')
}

function showAllShots() {
    var hidelAllShots = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 50
    })
    hidelAllShots
        .add({
            targets: '#Layer_1 #nov-shots .cls-4',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10)
        })
        .add({
            targets: '#Layer_1 #dec-shots .cls-4',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10)
        })
        .add({
            targets: '#Layer_1 #jan-shots .cls-4',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10)
        })
        .add({
            targets: '#Layer_1 #feb-shots .cls-4',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10)
        })
        .add({
            targets: '#Layer_1 #nov-shots .cls-5',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10),
            complete: function () {
                document.getElementById('nov-shots').style.display = 'initial';
            }
        })
        .add({
            targets: '#Layer_1 #dec-shots .cls-5',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10),
            complete: function () {
                document.getElementById('dec-shots').style.display = 'initial';
            }
        })
        .add({
            targets: '#Layer_1 #jan-shots .cls-5',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10),
            complete: function () {
                document.getElementById('jan-shots').style.display = 'initial';
            }
        })
        .add({
            targets: '#Layer_1 #feb-shots .cls-5',
            opacity: 0,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(10),
            complete: function () {
                document.getElementById('feb-shots').style.display = 'initial';
            }
        })

    //animate all shots at beginning
    var revealAllShots = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 100
    })
    revealAllShots
        .add({
            targets: '#Layer_1 #nov-shots',
            complete: function () {
                document.getElementById('nov-shots').style.display = 'initial';
            }
        })
        .add({
            targets: '#Layer_1 #dec-shots',
            complete: function () {
                document.getElementById('dec-shots').style.display = 'initial';
            }
        })
        .add({
            targets: '#Layer_1 #jan-shots',
            complete: function () {
                document.getElementById('jan-shots').style.display = 'initial';
            }
        })
        .add({
            targets: '#Layer_1 #feb-shots',
            complete: function () {
                document.getElementById('feb-shots').style.display = 'initial';
            }
        })
        .add({
            targets: '#Layer_1 #nov-shots .cls-4',
            opacity: 1,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(70)
        })
        .add({
            targets: '#Layer_1 #dec-shots .cls-4',
            opacity: 1,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(70)
        })
        .add({
            targets: '#Layer_1 #jan-shots .cls-4',
            opacity: 1,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(70)
        })
        .add({
            targets: '#Layer_1 #feb-shots .cls-4',
            opacity: 1,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(70)
        })
        .add({
            targets: '#Layer_1 #nov-shots .cls-5',
            opacity: 1,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(30)
        })
        .add({
            targets: '#Layer_1 #dec-shots .cls-5',
            opacity: 1,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(30)
        })
        .add({
            targets: '#Layer_1 #jan-shots .cls-5',
            opacity: 1,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(30)
        })
        .add({
            targets: '#Layer_1 #feb-shots .cls-5',
            opacity: 1,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(30)
        })

    var showContent = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 100
    })
    showContent
        .add({
            targets: '.novContent',
            width: ['0%', '100%']
        })
        .add({
            targets: '.novContent',
            opacity: [0, 1]
        })
        .add({
            targets: '.janContent',
            width: ['0%', '100%']
        })
        .add({
            targets: '.janContent',
            opacity: [0, 1]
        })
        .add({
            targets: '.decContent',
            width: ['0%', '100%']
        })
        .add({
            targets: '.decContent',
            opacity: [0, 1]
        })
        .add({
            targets: '.febContent',
            opacity: [0, 1]
        })
        .add({
            targets: '.febContent',
            width: ['0%', '100%']
        })
        .add({
            complete: function () {
                var getNov = document.getElementsByClassName('novContent');
                var getDec = document.getElementsByClassName('decContent');
                var getJan = document.getElementsByClassName('janContent');
                var getFeb = document.getElementsByClassName('febContent');

                for (i = 0; i < getNov.length; i++) {
                    getNov[i].style.display = 'grid';
                }

                for (i = 0; i < getDec.length; i++) {
                    getDec[i].style.display = 'grid';
                }

                for (i = 0; i < getJan.length; i++) {
                    getJan[i].style.display = 'grid';
                }

                for (i = 0; i < getFeb.length; i++) {
                    getFeb[i].style.display = 'grid';
                }
            }
        })

    var navRipple = anime.timeline({
        easing: 'easeInOutBounce',
        duration: 100
    })
    navRipple
        .add({
            targets: getNavAll,
            translateY: 20,
        })
        .add({
            targets: '.navLink',
            translateY: '-20px',
            color: '#c1c1c1',
            'font-weight': 200,
            scale: 0.8,
            delay: anime.stagger(50, {
                from: 'center'
            })
        })
        .add({
            targets: '#navAll',
            color: '#ffffff',
            'font-weight': 700,
            scale: 1.2
        })
        .add({
            targets: getNavAll,
            translateY: 0
        })
        .add({
            targets: '.navLink',
            translateY: 0,
            easing: 'easeInOutBounce',
            delay: anime.stagger(50, {
                from: 'center'
            })
        })

    var getNavAll = document.getElementById('navAll')
}

function show2pts() {
    //    //outside the arc

    var hide3pts = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 100
    })
    hide3pts
        .add({
            targets: '#kawahileo-nov8 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('kawahileo-nov8-c').style.display = 'none'
            }
        })
        .add({
            targets: '#reggiejac-nov21 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('reggiejac-nov21-c').style.display = 'none'
            }
        })
        .add({
            targets: '#montaeli-nov22 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('montaeli-nov22-c').style.display = 'none'
            }
        })
        .add({
            targets: '#gordonhay-nov24 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('gordonhay-nov24-c').style.display = 'none'
            }
        })
        .add({
            targets: '#courtneylee-nov8 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('courtneylee-nov8-c').style.display = 'none'
            }
        })
        .add({
            targets: '#manugin-nov15 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('manugin-nov15-c').style.display = 'none'
            }
        })
        .add({
            targets: '#kobebry-nov28 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('kobebry-nov28-c').style.display = 'none'
            }
        })
        .add({
            targets: '#sergeiba-nov7 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('sergeiba-nov7-c').style.display = 'none'
            }
        })
        .add({
            targets: '#paulpie-nov5 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('paulpie-nov5-c').style.display = 'none'
            }
        })
        .add({
            targets: '#tyrekeeva-nov29 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('tyrekeeva-nov29-c').style.display = 'none'
            }
        })
        .add({
            targets: '#isaiahtho-nov7 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('isaiahtho-nov7-c').style.display = 'none'
            }
        })
        .add({
            targets: '#jeffgre-nov5 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('jeffgre-nov5-c').style.display = 'none'
            }
        })
        .add({
            targets: '#treybur-nov12 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('treybur-nov12-c').style.display = 'none'
            }
        })
        .add({
            targets: '#peroant-nov5 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('peroant-nov5-c').style.display = 'none'
            }
        })
        .add({
            targets: '#cjwatson-dec29 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('cjwatson-dec29-c').style.display = 'none'
            }
        })
        .add({
            targets: '#daninlogal-dec2 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('daninlogal-dec2-c').style.display = 'none'
            }
        })
        .add({
            targets: '#khrismid-dec15 .cls-4',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('khrismid-dec15-c').style.display = 'none'
            }
        })
        .add({
            targets: '#anthonymo-dec31 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('anthonymo-dec31-c').style.display = 'none'
            }
        })
        .add({
            targets: '#russellwes-dec21 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('russellwes-dec21-c').style.display = 'none'
            }
        })
        .add({
            targets: '#gordonhay-dec1 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('gordonhay-dec1-c').style.display = 'none'
            }
        })
        .add({
            targets: '#marcgas-dec17 .cls-4',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('marcgas-dec17-c').style.display = 'none'
            }
        })
        .add({
            targets: '#cjmiles-dec20 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('cjmiles-dec20-c').style.display = 'none'
            }
        })
        .add({
            targets: '#nikstau-dec9 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('nikstau-dec9-c').style.display = 'none'
            }
        })
        .add({
            targets: '#stephcur-dec2 .cls-4',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('stephcur-dec2-c').style.display = 'none'
            }
        })
        .add({
            targets: '#cjmile-dec17 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('cjmile-dec17-c').style.display = 'none'
            }
        })
        .add({
            targets: '#blakegrif-dec23 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('blakegrif-dec23-c').style.display = 'none'
            }
        })
        .add({
            targets: '#jjredd-dec19 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('jjredd-dec19-c').style.display = 'none'
            }
        })
        .add({
            targets: '#mariocha-jan21 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('mariocha-jan21-c').style.display = 'none'
            }
        })
        .add({
            targets: '#derrickros-jan27 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('derrickros-jan27-c').style.display = 'none'
            }
        })
        .add({
            targets: '#kobebry-jan13 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('kobebry-jan13-c').style.display = 'none'
            }
        })
        .add({
            targets: '#kobebry-jan2 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('kobebry-jan2-c').style.display = 'none'
            }
        })
        .add({
            targets: '#montaeli-jan25 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('montaeli-jan25-c').style.display = 'none'
            }
        })
        .add({
            targets: '#brooklop-jan9 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('brooklop-jan9-c').style.display = 'none'
            }
        })
        .add({
            targets: '#kevindur-jan21 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('kevindur-jan21-c').style.display = 'none'
            }
        })
        .add({
            targets: '#kcp-jan9 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('kcp-jan9-c').style.display = 'none'
            }
        })
        .add({
            targets: '#andrewwig-jan7 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('andrewwig-jan7-c').style.display = 'none'
            }
        })
        .add({
            targets: '#evanfou-jan7 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('evanfou-jan7-c').style.display = 'none'
            }
        })
        .add({
            targets: '#evantur-jan22 .cls-4',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('evantur-jan22-c').style.display = 'none'
            }
        })
        .add({
            targets: '#kylelow-feb23 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('kylelow-feb23-c').style.display = 'none'
            }
        })
        .add({
            targets: '#brianrob-feb8 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('brianrob-feb8-c').style.display = 'none'
            }
        })
        .add({
            targets: '#johnwal-feb11 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('johnwal-feb11-c').style.display = 'none'
            }
        })
        .add({
            targets: '#anthonyda-feb6 .cls-4',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('anthonyda-feb6-c').style.display = 'none'
            }
        })
        .add({
            targets: '#norrisco-feb4 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('norrisco-feb4-c').style.display = 'none'
            }
        })
        .add({
            targets: '#dwaynew-feb27 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('dwaynew-feb27-c').style.display = 'none'
            }
        })
        .add({
            targets: '#derrickro-dec2 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('derrickro-dec2-c').style.display = 'none'
            }
        })

    var reveal2pts = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 100,
        complete: function () {
            document.getElementById('nov-shots').style.display = 'initial';
            document.getElementById('dec-shots').style.display = 'initial';
            document.getElementById('jan-shots').style.display = 'initial';
            document.getElementById('feb-shots').style.display = 'initial';
        }
    })
    reveal2pts
        .add({
            targets: '#treybur-nov14 .cls-4',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('treybur-nov14-c').style.display = 'grid'
                document.getElementById('treybur-nov14-c').style.opacity = 1
            }
        })
        .add({
            targets: '#kawahileo-nov8-2 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('kawahileo-nov8-2-c').style.display = 'grid'
                document.getElementById('kawahileo-nov8-2-c').style.opacity = 1
            }
        })
        .add({
            targets: '#kembawal-nov2 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('kembawal-nov2-c').style.display = 'grid'
                document.getElementById('kembawal-nov2-c').style.opacity = 1
            }
        })
        .add({
            targets: '#brandonjen-nov9 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('brandonjen-nov9-c').style.display = 'grid'
                document.getElementById('brandonjen-nov9-c').style.opacity = 1
            }
        })
        .add({
            targets: '#solomonhil-nov19',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('solomonhil-nov19-c').style.display = 'grid'
                document.getElementById('solomonhil-nov19-c').style.opacity = 1
            }
        })
        .add({
            targets: '#aljef-nov23',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('aljef-nov23-c').style.display = 'grid'
                document.getElementById('aljef-nov23-c').style.opacity = 1
            }
        })
        .add({
            targets: '#zachran-nov13 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('zachran-nov13-c').style.display = 'grid'
                document.getElementById('zachran-nov13-c').style.opacity = 1
            }
        })
        .add({
            targets: '#kembawal-nov2 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('kembawal-nov2-c').style.display = 'grid'
                document.getElementById('kembawal-nov2-c').style.opacity = 1
            }
        })
        .add({
            targets: '#paulmil-nov7 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('paulmil-nov7-c').style.display = 'grid'
                document.getElementById('paulmil-nov7-c').style.opacity = 1
            }
        })
        .add({
            targets: '#mcw-nov14 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('mcw-nov14-c').style.display = 'grid'
                document.getElementById('mcw-nov14-c').style.opacity = 1
            }
        })
        .add({
            targets: '#gordonhay-nov5 .cls-4',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('gordonhay-nov5-c').style.display = 'grid'
                document.getElementById('gordonhay-nov5-c').style.opacity = 1
            }
        })
        .add({
            targets: '#tobiashar-nov5 .cls-4',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('tobiashar-nov5-c').style.display = 'grid'
                document.getElementById('tobiashar-nov5-c').style.opacity = 1
            }
        })
        .add({
            targets: '#kembawal-nov1 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('kembawal-nov1-c').style.display = 'grid'
                document.getElementById('kembawal-nov1-c').style.opacity = 1
            }
        })
        .add({
            targets: '#rodneystu-nov19 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('rodneystu-nov19-c').style.display = 'grid'
                document.getElementById('rodneystu-nov19-c').style.opacity = 1
            }
        })
        .add({
            targets: '#kobebryant-dec12 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('kobebryant-dec12-c').style.display = 'grid'
                document.getElementById('kobebryant-dec12-c').style.opacity = 1
            }
        })
        .add({
            targets: '#jaredsull-dec26 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('jaredsull-dec26-c').style.display = 'grid'
                document.getElementById('jaredsull-dec26-c').style.opacity = 1
            }
        })
        .add({
            targets: '#ericbledsoe-dec31 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('ericbledsoe-dec31-c').style.display = 'grid'
                document.getElementById('ericbledsoe-dec31-c').style.opacity = 1
            }
        })
        .add({
            targets: '#tobiashar-dec13 .cls-4',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('tobiashar-dec13-c').style.display = 'grid'
                document.getElementById('tobiashar-dec13-c').style.opacity = 1
            }
        })
        .add({
            targets: '#dwanyew-dec29 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('dwanyew-dec29-c').style.display = 'grid'
                document.getElementById('dwanyew-dec29-c').style.opacity = 1
            }
        })
        .add({
            targets: '#kobebryant-dec19 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('kobebryant-dec19-c').style.display = 'grid'
                document.getElementById('kobebryant-dec19-c').style.opacity = 1
            }
        })
        .add({
            targets: '#joejohn-dec3 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('joejohn-dec3-c').style.display = 'grid'
                document.getElementById('joejohn-dec3-c').style.opacity = 1
            }
        })
        .add({
            targets: '#kembaw-dec5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('kembaw-dec5-c').style.display = 'grid'
                document.getElementById('kembaw-dec5-c').style.opacity = 1
            }
        })
        .add({
            targets: '#timdun-dec31',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('timdun-dec31-c').style.display = 'grid'
                document.getElementById('timdun-dec31-c').style.opacity = 1
            }
        })
        .add({
            targets: '#sergeib-dec21',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('sergeib-dec21-c').style.display = 'grid'
                document.getElementById('sergeib-dec21-c').style.opacity = 1
            }
        })
        .add({
            targets: '#bradleyb-dec10',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('bradleyb-dec10-c').style.display = 'grid'
                document.getElementById('bradleyb-dec10-c').style.opacity = 1
            }
        })
        .add({
            targets: '#montael-dec3 .cls-4',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('montael-dec3-c').style.display = 'grid'
                document.getElementById('montael-dec3-c').style.opacity = 1
            }
        })
        .add({
            targets: '#tyrekeev-dec31 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('tyrekeev-dec31-c').style.display = 'grid'
                document.getElementById('tyrekeev-dec31-c').style.opacity = 1
            }
        })
        .add({
            targets: '#timdun-dec12 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('timdun-dec12-c').style.display = 'grid'
                document.getElementById('timdun-dec12-c').style.opacity = 1
            }
        })
        .add({
            targets: '#demarcusc-dec17 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('demarcusc-dec17-c').style.display = 'grid'
                document.getElementById('demarcusc-dec17-c').style.opacity = 1
            }
        })
        .add({
            targets: '#chasebud-dec5 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('chasebud-dec5-c').style.display = 'grid'
                document.getElementById('chasebud-dec5-c').style.opacity = 1
            }
        })
        .add({
            targets: '#victorola-dec10 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('victorola-dec10-c').style.display = 'grid'
                document.getElementById('victorola-dec10-c').style.opacity = 1
            }
        })
        .add({
            targets: '#paulpie-jan25 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('paulpie-jan25-c').style.display = 'grid'
                document.getElementById('paulpie-jan25-c').style.opacity = 1
            }
        })
        .add({
            targets: '#brandonjen-jan6 .cls-4',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('brandonjen-jan6-c').style.display = 'grid'
                document.getElementById('brandonjen-jan6-c').style.opacity = 1
            }
        })
        .add({
            targets: '#brandonjen-jan16 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('brandonjen-jan16-c').style.display = 'grid'
                document.getElementById('brandonjen-jan16-c').style.opacity = 1
            }
        })
        .add({
            targets: '#jameshar-jan23 .cls-4',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('jameshar-jan23-c').style.display = 'grid'
                document.getElementById('jameshar-jan23-c').style.opacity = 1
            }
        })
        .add({
            targets: '#kevinlov-jan5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('kevinlov-jan5-c').style.display = 'grid'
                document.getElementById('kevinlov-jan5-c').style.opacity = 1
            }
        })
        .add({
            targets: '#matthewde-jan5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('matthewde-jan5-c').style.display = 'grid'
                document.getElementById('matthewde-jan5-c').style.opacity = 1
            }
        })
        .add({
            targets: '#andredru-jan16',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('andredru-jan16-c').style.display = 'grid'
                document.getElementById('andredru-jan16-c').style.opacity = 1
            }
        })
        .add({
            targets: '#zazapa-jan22',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('zazapa-jan22-c').style.display = 'grid'
                document.getElementById('zazapa-jan22-c').style.opacity = 1
            }
        })
        .add({
            targets: '#gregmon-jan9',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('gregmon-jan9-c').style.display = 'grid'
                document.getElementById('gregmon-jan9-c').style.opacity = 1
            }
        })
        .add({
            targets: '#tyrekeeva-jan18',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('tyrekeeva-jan18-c').style.display = 'grid'
                document.getElementById('tyrekeeva-jan18-c').style.opacity = 1
            }
        })
        .add({
            targets: '#royhib-jan4 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('royhib-jan4-c').style.display = 'grid'
                document.getElementById('royhib-jan4-c').style.opacity = 1
            }
        })
        .add({
            targets: '#brandonkni-jan22 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('brandonkni-jan22-c').style.display = 'grid'
                document.getElementById('brandonkni-jan22-c').style.opacity = 1
            }
        })
        .add({
            targets: '#davidwe-jan10 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('davidwe-jan10-c').style.display = 'grid'
                document.getElementById('davidwe-jan10-c').style.opacity = 1
            }
        })
        .add({
            targets: '#johnwal-jan21 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('johnwal-jan21-c').style.display = 'grid'
                document.getElementById('johnwal-jan21-c').style.opacity = 1
            }
        })
        .add({
            targets: '#cjwats-jan23 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('cjwats-jan23-c').style.display = 'grid'
                document.getElementById('cjwats-jan23-c').style.opacity = 1
            }
        })
        .add({
            targets: '#marcobel-feb9 .cls-4',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('marcobel-feb9-c').style.display = 'grid'
                document.getElementById('marcobel-feb9-c').style.opacity = 1
            }
        })
        .add({
            targets: '#markieffm-feb2 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('markieffm-feb2-c').style.display = 'grid'
                document.getElementById('markieffm-feb2-c').style.opacity = 1
            }
        })
        .add({
            targets: '#tobiasha-feb8',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('tobiasha-feb8-c').style.display = 'grid'
                document.getElementById('tobiasha-feb8-c').style.opacity = 1
            }
        })
        .add({
            targets: '#evantur-feb11 .cls-4',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('evantur-feb11-c').style.display = 'grid'
                document.getElementById('evantur-feb11-c').style.opacity = 1
            }
        })
        .add({
            targets: '#nikolavu-feb8 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('nikolavu-feb8-c').style.display = 'grid'
                document.getElementById('nikolavu-feb8-c').style.opacity = 1
            }
        })
        .add({
            targets: '#demarcusc-feb8 .cls-4',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('demarcusc-feb8-c').style.display = 'grid'
                document.getElementById('demarcusc-feb8-c').style.opacity = 1
            }
        })
        .add({
            targets: '#jarretja-feb2 .cls-4',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('jarretja-feb2-c').style.display = 'grid'
                document.getElementById('jarretja-feb2-c').style.opacity = 1
            }
        })
        .add({
            targets: '#courtneylee-nov13',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('courtneylee-nov13-c').style.display = 'grid'
                document.getElementById('courtneylee-nov13-c').style.opacity = 1
            }
        })
        .add({
            targets: '#kembawal-nov23 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('kembawal-nov23-c').style.display = 'grid'
                document.getElementById('kembawal-nov23-c').style.opacity = 1
            }
        })
        .add({
            targets: '#davidwe-dec5 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('davidwe-dec5-c').style.display = 'grid'
                document.getElementById('davidwe-dec5-c').style.opacity = 1
            }
        })

    var navRipple = anime.timeline({
        easing: 'easeInOutBounce',
        duration: 100
    })
    navRipple
        .add({
            targets: getNav2pt,
            translateY: 20,
        })
        .add({
            targets: '.navLink',
            translateY: '-20px',
            color: '#c1c1c1',
            'font-weight': 200,
            scale: 0.8,
            delay: anime.stagger(50, {
                from: 'center'
            })
        })
        .add({
            targets: '#nav2pt',
            color: '#ffffff',
            'font-weight': 700,
            scale: 1.2
        })
        .add({
            targets: getNav2pt,
            translateY: 0
        })
        .add({
            targets: '.navLink',
            translateY: 0,
            easing: 'easeInOutBounce',
            delay: anime.stagger(50, {
                from: 'center'
            })
        })

    var getNav2pt = document.getElementById('nav2pt')
}

function show3pts() {

    var reveal3pts = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 100,
        complete: function () {
            document.getElementById('nov-shots').style.display = 'initial';
            document.getElementById('dec-shots').style.display = 'initial';
            document.getElementById('jan-shots').style.display = 'initial';
            document.getElementById('feb-shots').style.display = 'initial';
        }
    })
    reveal3pts
        .add({
            targets: '#kawahileo-nov8 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('kawahileo-nov8-c').style.display = 'grid'
                document.getElementById('kawahileo-nov8-c').style.opacity = 1
            }
        })
        .add({
            targets: '#reggiejac-nov21 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('reggiejac-nov21-c').style.display = 'grid'
                document.getElementById('reggiejac-nov21-c').style.opacity = 1
            }
        })
        .add({
            targets: '#montaeli-nov22 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('montaeli-nov22-c').style.display = 'grid'
                document.getElementById('montaeli-nov22-c').style.opacity = 1
            }
        })
        .add({
            targets: '#gordonhay-nov24 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('gordonhay-nov24-c').style.display = 'grid'
                document.getElementById('gordonhay-nov24-c').style.opacity = 1
            }
        })
        .add({
            targets: '#courtneylee-nov8 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('courtneylee-nov8-c').style.display = 'grid'
                document.getElementById('courtneylee-nov8-c').style.opacity = 1
            }
        })
        .add({
            targets: '#manugin-nov15 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('manugin-nov15-c').style.display = 'grid'
                document.getElementById('manugin-nov15-c').style.opacity = 1
            }
        })
        .add({
            targets: '#kobebry-nov28 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('kobebry-nov28-c').style.display = 'grid'
                document.getElementById('kobebry-nov28-c').style.opacity = 1
            }
        })
        .add({
            targets: '#sergeiba-nov7 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('sergeiba-nov7-c').style.display = 'grid'
                document.getElementById('sergeiba-nov7-c').style.opacity = 1
            }
        })
        .add({
            targets: '#paulpie-nov5 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('paulpie-nov5-c').style.display = 'grid'
                document.getElementById('paulpie-nov5-c').style.opacity = 1
            }
        })
        .add({
            targets: '#tyrekeeva-nov29 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('tyrekeeva-nov29-c').style.display = 'grid'
                document.getElementById('tyrekeeva-nov29-c').style.opacity = 1
            }
        })
        .add({
            targets: '#isaiahtho-nov7 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('isaiahtho-nov7-c').style.display = 'grid'
                document.getElementById('isaiahtho-nov7-c').style.opacity = 1
            }
        })
        .add({
            targets: '#jeffgre-nov5 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('jeffgre-nov5-c').style.display = 'grid'
                document.getElementById('jeffgre-nov5-c').style.opacity = 1
            }
        })
        .add({
            targets: '#treybur-nov12 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('treybur-nov12-c').style.display = 'grid'
                document.getElementById('treybur-nov12-c').style.opacity = 1
            }
        })
        .add({
            targets: '#peroant-nov5 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('peroant-nov5-c').style.display = 'grid'
                document.getElementById('peroant-nov5-c').style.opacity = 1
            }
        })
        .add({
            targets: '#cjwatson-dec29 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('cjwatson-dec29-c').style.display = 'grid'
                document.getElementById('cjwatson-dec29-c').style.opacity = 1
            }
        })
        .add({
            targets: '#daninlogal-dec2 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('daninlogal-dec2-c').style.display = 'grid'
                document.getElementById('daninlogal-dec2-c').style.opacity = 1
            }
        })
        .add({
            targets: '#khrismid-dec15 .cls-4',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('khrismid-dec15-c').style.display = 'grid'
                document.getElementById('khrismid-dec15-c').style.opacity = 1
            }
        })
        .add({
            targets: '#anthonymo-dec31 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('anthonymo-dec31-c').style.display = 'grid'
                document.getElementById('anthonymo-dec31-c').style.opacity = 1
            }
        })
        .add({
            targets: '#russellwes-dec21 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('russellwes-dec21-c').style.display = 'grid'
                document.getElementById('russellwes-dec21-c').style.opacity = 1
            }
        })
        .add({
            targets: '#gordonhay-dec1 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('gordonhay-dec1-c').style.display = 'grid'
                document.getElementById('gordonhay-dec1-c').style.opacity = 1
            }
        })
        .add({
            targets: '#marcgas-dec17 .cls-4',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('marcgas-dec17-c').style.display = 'grid'
                document.getElementById('marcgas-dec17-c').style.opacity = 1
            }
        })
        .add({
            targets: '#cjmiles-dec20 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('cjmiles-dec20-c').style.display = 'grid'
                document.getElementById('cjmiles-dec20-c').style.opacity = 1
            }
        })
        .add({
            targets: '#nikstau-dec9 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('nikstau-dec9-c').style.display = 'grid'
                document.getElementById('nikstau-dec9-c').style.opacity = 1
            }
        })
        .add({
            targets: '#stephcur-dec2 .cls-4',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('stephcur-dec2-c').style.display = 'grid'
                document.getElementById('stephcur-dec2-c').style.opacity = 1
            }
        })
        .add({
            targets: '#cjmile-dec17 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('cjmile-dec17-c').style.display = 'grid'
                document.getElementById('cjmile-dec17-c').style.opacity = 1
            }
        })
        .add({
            targets: '#blakegrif-dec23 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('blakegrif-dec23-c').style.display = 'grid'
                document.getElementById('blakegrif-dec23-c').style.opacity = 1
            }
        })
        .add({
            targets: '#jjredd-dec19 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('jjredd-dec19-c').style.display = 'grid'
                document.getElementById('jjredd-dec19-c').style.opacity = 1
            }
        })
        .add({
            targets: '#mariocha-jan21 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('mariocha-jan21-c').style.display = 'grid'
                document.getElementById('mariocha-jan21-c').style.opacity = 1
            }
        })
        .add({
            targets: '#derrickros-jan27 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('derrickros-jan27-c').style.display = 'grid'
                document.getElementById('derrickros-jan27-c').style.opacity = 1
            }
        })
        .add({
            targets: '#kobebry-jan13 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('kobebry-jan13-c').style.display = 'grid'
                document.getElementById('kobebry-jan13-c').style.opacity = 1
            }
        })
        .add({
            targets: '#kobebry-jan2 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('kobebry-jan2-c').style.display = 'grid'
                document.getElementById('kobebry-jan2-c').style.opacity = 1
            }
        })
        .add({
            targets: '#montaeli-jan25 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('montaeli-jan25-c').style.display = 'grid'
                document.getElementById('montaeli-jan25-c').style.opacity = 1
            }
        })
        .add({
            targets: '#brooklop-jan9 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('brooklop-jan9-c').style.display = 'grid'
                document.getElementById('brooklop-jan9-c').style.opacity = 1
            }
        })
        .add({
            targets: '#kevindur-jan21 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('kevindur-jan21-c').style.display = 'grid'
                document.getElementById('kevindur-jan21-c').style.opacity = 1
            }
        })
        .add({
            targets: '#kcp-jan9 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('kcp-jan9-c').style.display = 'grid'
                document.getElementById('kcp-jan9-c').style.opacity = 1
            }
        })
        .add({
            targets: '#andrewwig-jan7 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('andrewwig-jan7-c').style.display = 'grid'
                document.getElementById('andrewwig-jan7-c').style.opacity = 1
            }
        })
        .add({
            targets: '#evanfou-jan7 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('evanfou-jan7-c').style.display = 'grid'
                document.getElementById('evanfou-jan7-c').style.opacity = 1
            }
        })
        .add({
            targets: '#evantur-jan22 .cls-4',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('evantur-jan22-c').style.display = 'grid'
                document.getElementById('evantur-jan22-c').style.opacity = 1
            }
        })
        .add({
            targets: '#kylelow-feb23 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('kylelow-feb23-c').style.display = 'grid'
                document.getElementById('kylelow-feb23-c').style.opacity = 1
            }
        })
        .add({
            targets: '#brianrob-feb8 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('brianrob-feb8-c').style.display = 'grid'
                document.getElementById('brianrob-feb8-c').style.opacity = 1
            }
        })
        .add({
            targets: '#johnwal-feb11 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('johnwal-feb11-c').style.display = 'grid'
                document.getElementById('johnwal-feb11-c').style.opacity = 1
            }
        })
        .add({
            targets: '#anthonyda-feb6 .cls-4',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('anthonyda-feb6-c').style.display = 'grid'
                document.getElementById('anthonyda-feb6-c').style.opacity = 1
            }
        })
        .add({
            targets: '#norrisco-feb4 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('norrisco-feb4-c').style.display = 'grid'
                document.getElementById('norrisco-feb4-c').style.opacity = 1
            }
        })
        .add({
            targets: '#dwaynew-feb27 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('dwaynew-feb27-c').style.display = 'grid'
                document.getElementById('dwaynew-feb27-c').style.opacity = 1
            }
        })
        .add({
            targets: '#derrickro-dec2 .cls-5',
            opacity: [0, 1],
            complete: function () {
                document.getElementById('derrickro-dec2-c').style.display = 'grid'
                document.getElementById('derrickro-dec2-c').style.opacity = 1
            }
        })

    var hide2pts = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 100
    })
    hide2pts
        .add({
            targets: '#treybur-nov14 .cls-4',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('treybur-nov14-c').style.display = 'none'
            }
        })
        .add({
            targets: '#kawahileo-nov8-2 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('kawahileo-nov8-2-c').style.display = 'none'
            }
        })
        .add({
            targets: '#kembawal-nov2 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('kembawal-nov2-c').style.display = 'none'
            }
        })
        .add({
            targets: '#brandonjen-nov9 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('brandonjen-nov9-c').style.display = 'none'
            }
        })
        .add({
            targets: '#solomonhil-nov19',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('solomonhil-nov19-c').style.display = 'none'
            }
        })
        .add({
            targets: '#aljef-nov23',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('aljef-nov23-c').style.display = 'none'
            }
        })
        .add({
            targets: '#zachran-nov13 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('zachran-nov13-c').style.display = 'none'
            }
        })
        .add({
            targets: '#kembawal-nov2 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('kembawal-nov2-c').style.display = 'none'
            }
        })
        .add({
            targets: '#paulmil-nov7 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('paulmil-nov7-c').style.display = 'none'
            }
        })
        .add({
            targets: '#mcw-nov14 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('mcw-nov14-c').style.display = 'none'
            }
        })
        .add({
            targets: '#gordonhay-nov5 .cls-4',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('gordonhay-nov5-c').style.display = 'none'
            }
        })
        .add({
            targets: '#tobiashar-nov5 .cls-4',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('tobiashar-nov5-c').style.display = 'none'
            }
        })
        .add({
            targets: '#kembawal-nov1 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('kembawal-nov1-c').style.display = 'none'
            }
        })
        .add({
            targets: '#rodneystu-nov19 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('rodneystu-nov19-c').style.display = 'none'
            }
        })
        .add({
            targets: '#kobebryant-dec12 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('kobebryant-dec12-c').style.display = 'none'
            }
        })
        .add({
            targets: '#jaredsull-dec26 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('jaredsull-dec26-c').style.display = 'none'
            }
        })
        .add({
            targets: '#ericbledsoe-dec31 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('ericbledsoe-dec31-c').style.display = 'none'
            }
        })
        .add({
            targets: '#tobiashar-dec13 .cls-4',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('tobiashar-dec13-c').style.display = 'none'
            }
        })
        .add({
            targets: '#dwanyew-dec29 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('dwanyew-dec29-c').style.display = 'none'
            }
        })
        .add({
            targets: '#kobebryant-dec19 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('kobebryant-dec19-c').style.display = 'none'
            }
        })
        .add({
            targets: '#joejohn-dec3 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('joejohn-dec3-c').style.display = 'none'
            }
        })
        .add({
            targets: '#kembaw-dec5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('kembaw-dec5-c').style.display = 'none'
            }
        })
        .add({
            targets: '#timdun-dec31',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('timdun-dec31-c').style.display = 'none'
            }
        })
        .add({
            targets: '#sergeib-dec21',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('sergeib-dec21-c').style.display = 'none'
            }
        })
        .add({
            targets: '#bradleyb-dec10',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('bradleyb-dec10-c').style.display = 'none'
            }
        })
        .add({
            targets: '#montael-dec3 .cls-4',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('montael-dec3-c').style.display = 'none'
            }
        })
        .add({
            targets: '#tyrekeev-dec31 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('tyrekeev-dec31-c').style.display = 'none'
            }
        })
        .add({
            targets: '#timdun-dec12 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('timdun-dec12-c').style.display = 'none'
            }
        })
        .add({
            targets: '#demarcusc-dec17 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('demarcusc-dec17-c').style.display = 'none'
            }
        })
        .add({
            targets: '#chasebud-dec5 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('chasebud-dec5-c').style.display = 'none'
            }
        })
        .add({
            targets: '#victorola-dec10 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('victorola-dec10-c').style.display = 'none'
            }
        })
        .add({
            targets: '#paulpie-jan25 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('paulpie-jan25-c').style.display = 'none'
            }
        })
        .add({
            targets: '#brandonjen-jan6 .cls-4',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('brandonjen-jan6-c').style.display = 'none'
            }
        })
        .add({
            targets: '#brandonjen-jan16 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('brandonjen-jan16-c').style.display = 'none'
            }
        })
        .add({
            targets: '#jameshar-jan23 .cls-4',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('jameshar-jan23-c').style.display = 'none'
            }
        })
        .add({
            targets: '#kevinlov-jan5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('kevinlov-jan5-c').style.display = 'none'
            }
        })
        .add({
            targets: '#matthewde-jan5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('matthewde-jan5-c').style.display = 'none'
            }
        })
        .add({
            targets: '#andredru-jan16',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('andredru-jan16-c').style.display = 'none'
            }
        })
        .add({
            targets: '#zazapa-jan22',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('zazapa-jan22-c').style.display = 'none'
            }
        })
        .add({
            targets: '#gregmon-jan9',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('gregmon-jan9-c').style.display = 'none'
            }
        })
        .add({
            targets: '#tyrekeeva-jan18',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('tyrekeeva-jan18-c').style.display = 'none'
            }
        })
        .add({
            targets: '#royhib-jan4 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('royhib-jan4-c').style.display = 'none'
            }
        })
        .add({
            targets: '#brandonkni-jan22 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('brandonkni-jan22-c').style.display = 'none'
            }
        })
        .add({
            targets: '#davidwe-jan10 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('davidwe-jan10-c').style.display = 'none'
            }
        })
        .add({
            targets: '#johnwal-jan21 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('johnwal-jan21-c').style.display = 'none'
            }
        })
        .add({
            targets: '#cjwats-jan23 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('cjwats-jan23-c').style.display = 'none'
            }
        })
        .add({
            targets: '#marcobel-feb9 .cls-4',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('marcobel-feb9-c').style.display = 'none'
            }
        })
        .add({
            targets: '#markieffm-feb2 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('markieffm-feb2-c').style.display = 'none'
            }
        })
        .add({
            targets: '#tobiasha-feb8',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('tobiasha-feb8-c').style.display = 'none'
            }
        })
        .add({
            targets: '#evantur-feb11 .cls-4',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('evantur-feb11-c').style.display = 'none'
            }
        })
        .add({
            targets: '#nikolavu-feb8 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('nikolavu-feb8-c').style.display = 'none'
            }
        })
        .add({
            targets: '#demarcusc-feb8 .cls-4',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('demarcusc-feb8-c').style.display = 'none'
            }
        })
        .add({
            targets: '#jarretja-feb2 .cls-4',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('jarretja-feb2-c').style.display = 'none'
            }
        })
        .add({
            targets: '#courtneylee-nov13',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('courtneylee-nov13-c').style.display = 'none'
            }
        })
        .add({
            targets: '#kembawal-nov23 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('kembawal-nov23-c').style.display = 'none'
            }
        })
        .add({
            targets: '#davidwe-dec5 .cls-5',
            opacity: [1, 0],
            complete: function () {
                document.getElementById('davidwe-dec5-c').style.display = 'none'
            }
        })

    var navRipple = anime.timeline({
        easing: 'easeInOutBounce',
        duration: 100
    })
    navRipple
        .add({
            targets: getNav3pt,
            translateY: 20,
        })
        .add({
            targets: '.navLink',
            translateY: '-20px',
            color: '#c1c1c1',
            'font-weight': 200,
            scale: 0.8,
            delay: anime.stagger(50, {
                from: 'center'
            })
        })
        .add({
            targets: '#nav3pt',
            color: '#ffffff',
            'font-weight': 700,
            scale: 1.2
        })
        .add({
            targets: getNav3pt,
            translateY: 0
        })
        .add({
            targets: '.navLink',
            translateY: 0,
            easing: 'easeInOutBounce',
            delay: anime.stagger(50, {
                from: 'center'
            })
        })

    var getNav3pt = document.getElementById('nav3pt')
}

function showInfo() {

    var show = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 700
    })
    show
        .add({
            targets: '#showInfoT',
            opacity: 1,
            begin: function () {
                document.getElementById('showInfoT').style.display = 'inline';
            }
        })
        .add({
            targets: '#showInfoT',
            translateY: '-5%',
        })

    document.getElementById('showInfoT').addEventListener('click', function () {

        var hide = anime.timeline({
            easing: 'easeInOutQuad',
            duration: 700
        })
        hide
            .add({
                targets: '#showInfoT',
                translateY: '-100%'
            })
            .add({
                targets: '#showInfoT',
                opacity: 0,
                complete: function () {
                    document.getElementById('showInfoT').style.display = 'none';
                }
            })
    })




}
