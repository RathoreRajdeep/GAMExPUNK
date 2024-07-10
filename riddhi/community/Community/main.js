//Comment
function showComment(){
    var commentArea = document.getElementById("comment-area");
    commentArea.classList.remove("hide");
}

//Reply
function showReply(){
    var replyArea = document.getElementById("reply-area");
    replyArea.classList.remove("hide");
}
//Buttons
const buttons = document.querySelectorAll('.button-container.cyberpunk-btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const page = button.getAttribute('onclick').split("'")[1];
        const pageElement = document.querySelector(`.${page}`);

        pageElement.style.transition = 'all 0.5s ease-in-out';
        pageElement.style.transform = 'translateY(-100%)';
    });
});