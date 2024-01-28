const arraiItems = document.querySelectorAll('.item');
console.log("Number of categories:", arraiItems.length);
arraiItems.forEach(item => {
    console.log("Category:", item.firstElementChild.textContent);
    console.log("Elements:", item.lastElementChild.children.length);
})