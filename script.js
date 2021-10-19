function addLike(){
    var element = document.querySelector('#likes');
    var count= parseInt(element.innerHTML);
    element.innerHTML=count+1;
}