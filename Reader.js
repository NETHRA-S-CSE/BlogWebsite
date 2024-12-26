//Displaying the blog heading retrived form local storage
const head=localStorage.getItem('blogHead');
        if(head){
            document.getElementById('head').textContent=head;
        }
        else{
            document.getElementById('head').textContent="Not Found";
        }

//Displaying the blog content retrived form local storage

const article=localStorage.getItem('blogcontent');
        if(article){
            document.getElementById('blogcontent').textContent=article;
        }
        else{
            document.getElementById('blogcontent').textContent="Not Found";
        }


//Like section - Can increment like counts

const likeBtn=document.getElementById('like-btn');
const likeCount=document.getElementById('like-count');
let likes=0;
likeBtn.addEventListener("click",()=>{
    likes++;
    likeCount.textContent= `Likes : ${likes}`;
    likeBtn.textContent="Liked";
    likeBtn.disabled=true;
});

//Comment section

const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input");
    const commentList = document.getElementById("comment-list");

    commentForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page refresh

        const commentText = commentInput.value.trim();

        if (commentText !== "") {
            const commentItem = document.createElement("li");
            const commentContent = document.createElement("p");
            commentContent.textContent = commentText;

            commentItem.appendChild(commentContent);
            commentList.appendChild(commentItem);

            commentInput.value = "";
        } else {
            alert("Please write a comment before posting!");
        }
    });

   



        
