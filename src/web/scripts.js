/**
 * Created by cout970 on 3/11/17.
 */

const kotlinInterface = window.AwesomeAutoComplete.main;

function findPos(obj) {

    let curleft = curtop = 0;

    if (obj.offsetParent)
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;

        } while (obj = obj.offsetParent);

    return [curleft, curtop];
}

jQuery(function ($, undefined) {
    $('#term_demo').terminal(function (command) {
            if (command !== '') {
                try {
                    const result = window.eval(command);
                    if (result !== undefined) {
                        this.echo(String(result));
                    }
                } catch (e) {
                    this.error(String(e));
                }
            } else {
                this.echo('');
            }
        }, {
            greetings: 'Awesome autocomplete',
            name: 'js_demo',
            height: 200,
            prompt: 'kt> ',
            keydown: function (event, term) {

                if (event.keyCode == 9) {

                    clearAutocomplete();
                    createAutocomplete(term);

                    return false;
                } else if (event.keyCode == 13) {
                    let res = getAutoCompleteSelectedOption(term);
                    if (res != undefined) {
                        clearAutocomplete();
                        let pos = term.cmd().position()
                        let lastWord = kotlinInterface.getLastWord(term.get_command(), pos)
                        let autoComplete = kotlinInterface.replaceStart(lastWord, res.textContent)
                        term.set_command(term.get_command() + autoComplete + " ");
                        return false;
                    }
                } else if (event.keyCode == 40) {// down
                    if (isAutoCompleteVisible()) {
                        setAutoCompleteSelection(getAutoCompleteSelectionIndex() + 1);
                        return false;
                    }
                } else if (event.keyCode == 38) {// up
                    if (isAutoCompleteVisible()) {
                        setAutoCompleteSelection(getAutoCompleteSelectionIndex() - 1);
                        return false;
                    }
                } else {
                    clearAutocomplete();
                }
            }
        }
    );
});

function clearAutocomplete() {
    let old = document.getElementById("autocomplete");
    if (old != undefined) {
        old.parentNode.removeChild(old);
    }
}

function createAutocomplete(term) {
    // box
    let elem = document.createElement("div");
    elem.id = "autocomplete";

    let line = term.get_command();
    let auto = kotlinInterface.getAutoCompleteOptions(line, term.cmd().position());

    // options
    for (let i = 0; i < auto.length; i++) {
        let option = document.createElement("div");
        if (i === 0) {
            option.setAttribute("class", "autocomplete-option select");
        } else {
            option.setAttribute("class", "autocomplete-option");
        }
        option.textContent = auto[i];
        elem.appendChild(option);
    }

    // cursor pos
    let cursor = document.getElementsByClassName("cursor")[0];
    let pos = findPos(cursor);

    // apply pos
    elem.style.position = "absolute";
    elem.style.left = (pos[0] - 4) + 'px';
    elem.style.top = (pos[1] + 16) + 'px';

    // debug
    let debug = document.getElementById("debug");
    debug.appendChild(elem);
}

function log(any) {
    console.log(JSON.stringify(any));
}

function isAutoCompleteVisible() {
    let elem = document.getElementById("autocomplete");
    return elem != undefined;
}

function getAutoCompleteSelectedOption() {
    let elem = document.getElementById("autocomplete");
    if (elem == undefined) return undefined;
    return elem.childNodes[getAutoCompleteSelectionIndex()];
}

function setAutoCompleteSelection(index) {
    let elem = document.getElementById("autocomplete");
    if (elem == undefined) return undefined;

    if (index < 0) index = 0;
    if (index >= elem.childNodes.length) index = elem.childNodes.length - 1;

    for (let i = 0; i < elem.childNodes.length; i++) {
        if (i === index) {
            elem.childNodes[i].setAttribute("class", "autocomplete-option select");
        } else {
            elem.childNodes[i].setAttribute("class", "autocomplete-option");
        }
    }
}

function getAutoCompleteSelectionIndex() {
    let elem = document.getElementById("autocomplete");
    if (elem == undefined) return undefined;

    for (let i = 0; i < elem.childNodes.length; i++) {
        if (elem.childNodes[i].getAttribute("class") == "autocomplete-option select") {
            return i;
        }
    }
    setAutoCompleteSelection(0);
    return 0;
}