const head=localStorage.getItem('blogHead');
        if(head){
            document.getElementById('head').textContent=head;
        }
        else{
            document.getElementById('head').textContent="Not Found";
        }
const article=localStorage.getItem('blogcontent');
        if(head){
            document.getElementById('blogcontent').textContent=article;
        }
        else{
            document.getElementById('blogcontent').textContent="Not Found";
        }