var obj = {
    title: 'Programming test',
    question1: '1. Question #1',
    set: {
        answer1: 'Variant of answer №1',
        answer2: 'Variant of answer №2',
        answer3: 'Variant of answer №3'},
    question2: '2. Question #2',
    set: {
        answer1: 'Variant of answer №1',
        answer2: 'Variant of answer №2',
        answer3: 'Variant of answer №3'},
    question3: '3. Question #3',
    set: {
        answer1: 'Variant of answer №1',
        answer2: 'Variant of answer №2',
        answer3: 'Variant of answer №3'},
    button:'Check my results'
};

var wrapper = document.querySelector('.jumbotron');
wrapper.style.margin = '1% 30%';

function createH1(text) {
    var h1 = document.createElement('h1');
    h1.classList.add('label');
    h1.style.fontSize = "400%";
    h1.appendChild(document.createTextNode(text));
    return h1;
}

function createDiv (text) {
    var div = document.createElement('div');
    div.classList.add('popover-title');
    div.appendChild(document.createTextNode(text));
    return div;
}

function createForm (text1, text2, text3) {
    var form = document.createElement('form');
    form.classList.add('form-group');

    var label = document.createElement('label');
    var input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'name';
    label.classList.add('checkbox');
    label.appendChild(input);
    label.appendChild(document.createTextNode(text1));

    form.appendChild(label);
    var label = document.createElement('label');
    var input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'name';
    label.classList.add('checkbox');
    label.appendChild(input);
    label.appendChild(document.createTextNode(text2));

    form.appendChild(label);
    var label = document.createElement('label');
    var input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'name';
    label.classList.add('checkbox');
    label.appendChild(input);
    label.appendChild(document.createTextNode(text3));

    form.appendChild(label);
    return form;
}

function createButton (text) {
    var form = document.createElement('form');
    var button = document.createElement('input');
    button.classList.add('btn-block');
    button.type = 'button';
    button.name = 'name2';
    button.value = (text);
    form.appendChild(button);
    return form;
}

var elements = [
    createH1(obj.title),
    createDiv(obj.question1),
    createForm(obj.set.answer1, obj.set.answer2, obj.set.answer3),
    createDiv(obj.question2),
    createForm(obj.set.answer1, obj.set.answer2, obj.set.answer3),
    createDiv(obj.question3),
    createForm(obj.set.answer1, obj.set.answer2, obj.set.answer3),
    createButton(obj.button)
];

function DOM () {
    for (var i = 0; i < elements.length; i++) {
        wrapper.appendChild(elements[i]);
    }
}

DOM ();




