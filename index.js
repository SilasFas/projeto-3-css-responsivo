$(document).ready(function () {

    $('#store').click(function () {

        const destino = $('#aboutStore')
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

    $('#products').click(function () {

        const destino = $('#buyProducts')
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})