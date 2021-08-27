const titleEl = document.getElementById('title');
const contentEl = document.getElementById('content');
let counter = 0;

function checkBlanks(e) {

    if (titleEl.value === '' || contentEl.value === '' || contentEl.value === 'Write the content') {
        alert('Verify the title and message. None of them can be blank.');
    } else {
        document.forms[0].submit();
    }
}

function checkTextAreaNewMessage() {

    if (counter === 0) {
        contentEl.value = "";
        counter++;
    }
}