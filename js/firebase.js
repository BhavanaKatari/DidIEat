const today = (new Date(Date.now()).toLocaleString().split(',')[0]).replaceAll('/','-');

var commentvar
function uploadComment() {
    commentvar = document.getElementById('commentbox').value;
    var randnum = Math.floor((Math.random() * Number.MAX_SAFE_INTEGER));
    firebase.database().ref('comments/'+today+'/'+randnum).set({
        comment: commentvar
    });

}




