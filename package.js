var check = 1;

function elemHide(elem) {
    return function (next) {
        $(elem).addClass('fast hidden');
        next();
    }
}

function elemShow(elem) {
    return function (next) {
        $(elem).removeClass('fast hidden');
        next();
    }
}

function elemUpdate() {
    return function (next) {
        for (var prop in docData) {
            $('#'+prop).text(docData[prop]);
        }
        next();
    }
}

function botElemHide(elem) {
    return function (next) {
        $(elem).addClass('fast bot-hidden');
        next();
    }
}

function botElemShow(elem) {
    return function (next) {
        $(elem).removeClass('fast bot-hidden');
        next();
    }
}

function botElemUpdate() {
    return function (next) {
        for (var prop in docData) {
            $('#'+prop).text(docData[prop]);
        }
        next();
    }
}

function barElemShow(elem) {
    return function (next) {
        $(elem).removeClass('clipped');
        next();
    }
}

function arrowScrollLeft(elem) {
    return function (next) {
        $(elem).removeClass('scroll-left');
        next();
    }
}

function arrowScrollRight(elem) {
    return function (next) {
        $(elem).removeClass('scroll-right');
        next();
    }
}

function removeArrowSpeed(elem) {
    return function (next) {
        $(elem).removeClass('arrows');
        $(elem).addClass('slow')
        next();
    }
}