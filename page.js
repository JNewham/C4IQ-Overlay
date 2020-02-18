$( document ).ready(function() {
    setTimeout(function() { 
    if (check == 1){
        $('#players_1').text(docData['players_1']);
        $('#players_2').text(docData['players_2']);
        $('#players_1s').text(docData['players_1s']);
        $('#players_2s').text(docData['players_2s']);
        check = 2;
        $('body')
        .queue(barElemShow('#top-container'))
        .queue(arrowScrollRight('#right-arrow'))
        .queue(arrowScrollLeft('#left-arrow'))
        .queue(botElemHide('#tournament-name_1'))
        .queue(botElemUpdate())
        .queue(botElemShow('#tournament-name_1'))
        .delay(1500)
        .queue(removeArrowSpeed('#left-arrow'))
        .queue(removeArrowSpeed('#right-arrow'));
    }}, 850); 
});

if (check == 2) {
    if ($('#players_1').text() != docData['players_1'] ||
        $('#players_2').text() != docData['players_2'] )
    {
        $('body')
            .queue(elemHide('.scores'))
            .queue(elemHide('.players'))
            .queue(elemHide('#left-arrow'))
            .queue(elemHide('#right-arrow'))
            .queue(elemHide('.countries'))
            .queue(elemHide('#top-bar')).delay(500)
            .queue(elemUpdate()).delay(500)
            .queue(elemShow('.players'))
            .queue(elemShow('.scores'))
            .queue(elemShow('#left-arrow'))
            .queue(elemShow('#right-arrow'))
            .queue(elemShow('.countries'))
            .queue(elemShow('#top-bar'));
    }
    else if ($('#players_1s').text() != docData['players_1s'] ||
        $('#players_2s').text() != docData['players_2s'] )
    {
        $('body')
            .queue(elemHide('#left-arrow'))
            .queue(elemHide('#right-arrow'))
            .queue(elemHide('.scores')).delay(500)
            .queue(elemUpdate()).delay(500)
            .queue(elemShow('.scores'))
            .queue(elemShow('#left-arrow'))
            .queue(elemShow('#right-arrow'));

    }
}

let c1 = docData['country_1'].split('||');
let c2 = docData['country_2'].split('||');

$('#c1 .flag').removeClass().addClass('flag ' +c1[0]);
$('#c2 .flag').removeClass().addClass('flag ' +c2[0]);