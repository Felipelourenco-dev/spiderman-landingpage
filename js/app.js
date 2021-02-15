document.addEventListener('DOMContentLoaded', () => {
    
    let tl1 = new TimelineMax();

    tl1
        .fromTo('.bg-loading', 1, {width: '100%'},{
            width: '0%', delay: 5, ease: Expo.easeInOut
        })


        .fromTo('.bg-video', 2, 
        {width: '0%', opacity: 0},
        {width: '100%', opacity: 1, ease: Power3.easeInOut
        }, '-=1')


        .fromTo('.logo', 0.7, 
        { y: 50, opacity: 0,},
        { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
        }, '-=0.5')

        .fromTo('.menu__ul', 0.7, 
        { y: 50, opacity: 0,},
        { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
        }, '-=0.5')

        .fromTo('.redes-sociais', 0.7, 
        { y: 50, opacity: 0,},
        { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
        }, '-=0.5')

        .fromTo('.informacoes__img', 0.7, 
        { y: 50, opacity: 0,},
        { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
        }, '-=0.5')


        .fromTo('.informacoes__p', 0.7, 
        { y: 50, opacity: 0,},
        { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
        }, '-=0.5')

        .fromTo('.informacoes__botao1', 0.7, 
        { y: 50, opacity: 0,},
        { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
        }, '-=0.5')

        .fromTo('.botao2', 0.7, 
        { y: 50, opacity: 0,},
        { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
        }, '-=0.5')

        .fromTo('.informacoes__icones-play', 0.7, 
        { y: 50, opacity: 0,},
        { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
        }, '-=0.5')

        .fromTo('.informacoes__icones-marvel', 0.7, 
        { y: 50, opacity: 0,},
        { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
        }, '-=0.5')

        .fromTo('.homem-aranha', 7, 
        {width: '0%', opacity: 0},
        {width: '125%', opacity: 1, ease: Power3.easeInOut
        }, '-=5');

})