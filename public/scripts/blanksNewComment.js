/**
 * Update and Delete methods for Dashboard screen
 */

function deleteMessage(object) {
    if (confirm("Do you really want to delete the message?")) {
        object.form.action = "/message/deleteMessage/" + object.form.elements['message_id'].value;
        object.form.method = "DELETE";
        object.form.submit();
    }
}


function updateMessage(object) {
    object.form.action = "/message/getMessage";
    object.form.method = "POST";
    object.form.setAttribute("Content-type", "text/html; charset=UTF-8");
    object.form.submit();

}