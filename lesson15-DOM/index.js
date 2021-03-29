function task1() {
    var taskImage = document.getElementsByTagName('img')[0];
    taskImage.src = "http://placekitten.com/g/200/200"

    var taskHeader = document.getElementById('taskHeader')
    taskHeader.style.color = 'red'

}

function task2() {
    var newParagraph = document.createElement('p');
    var theTextNode = document.createTextNode("There's no danger here, Will");

    newParagraph.appendChild(theTextNode);
    var task2Wrapper = document.getElementById('task2wrapper');
    task2Wrapper.appendChild(newParagraph)
}

function task3() {
    var theSquare = document.getElementById('task3-square');
    theSquare.addEventListener('mouseover', function () {
        alert("Hey, look at my red square")
    });
}


function task4() {

    var theLink = document.getElementById('task4link');
    var myInterceptFunction = function (event) {
        event.preventDefault();
        alert("Why leave my site?")
    }
    theLink.addEventListener('click', myInterceptFunction)
}

function task5() {
    var theInput = document.getElementById("task5input");
    var theButton = document.getElementById("task5submit");
    var theOutput = document.getElementById("task5output");

    var mySubmitFunction = function (event) {
        event.preventDefault();
        userInput = theInput.value;
        theOutput.innerHTML = `${userInput} * 5 = ${userInput * 5}`;
    }
    theButton.addEventListener('click', mySubmitFunction);

}
task3();
task4();
task5();
