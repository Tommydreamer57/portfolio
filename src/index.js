$('#top-link').click(() => {
    $('html, body').animate({scrollTop: 0}, 800)
})

$('#about-link').click(() => {
    $('html, body').animate({ scrollTop: $('#About').offset().top }, 800)
})

$('#skills-link').click(() => {
    $('html, body').animate({ scrollTop: $('#Skills').offset().top }, 800)
})

$('#portfolio-link').click(() => {
    $('html, body').animate({ scrollTop: $('#Portfolio').offset().top }, 800)
})

$('#contact-link').click(() => {
    $('html, body').animate({ scrollTop: $('#Contact').offset().top }, 800)
})
