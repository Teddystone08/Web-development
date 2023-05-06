const header = $('header');
const toggle = $('dv#toggle_header')

toggle.on('click', () => {
    header.toggleClass('red green')
})
/*
$(document).ready(function(){
    $('header').click(function(){
        $(this).toggle('red green')
    })
})