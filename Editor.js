document.getElementById('publish-btn').addEventListener('click',()=>{
    const blogHead=document.getElementById('blog-head').value;
    const blogcontent=document.getElementById('blogcontent').value;
    localStorage.setItem('blogHead',blogHead);
    localStorage.setItem('blogcontent',blogcontent);
    window.location.href="Reader.html";
});

