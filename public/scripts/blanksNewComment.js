const frmUpdateMsg = document.getElementById('frmUpdateMsg');

function deleteMessage(object) {
    if (confirm("Do you really want to delete the message?")) {

        frmUpdateMsg.action = "/message/deleteMessage/" + document.getElementById('message_id').value;
        frmUpdateMsg.method = "DELETE";
        frmUpdateMsg.submit();
    }
}


function updateMessage(object) {
    frmUpdateMsg.action = "/message/getMessage";
    frmUpdateMsg.method = "POST";
    frmUpdateMsg.setAttribute("Content-type", "text/html; charset=UTF-8");
    frmUpdateMsg.submit();

}