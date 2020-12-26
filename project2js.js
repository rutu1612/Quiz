const add_todo = document.querySelector(".add");
const ul = document.querySelector(".todos");
const item = document.querySelector("li");
const search = document.querySelector(".search input");

const temp = todo =>{
    const html = `
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
          </li>
    `
    ul.innerHTML += html;
};

add_todo.addEventListener('submit',e=>{
    e.preventDefault();
    const todo = add_todo.add.value.trim();
    /*const li = document.createElement('li');
    li.textContent=`${todo}`;
    ul.append(li);*/
    if(todo.length){
        temp(todo);
        add_todo.reset();
    }
});

ul.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

//searching

const filtertodos = (term) =>{
   Array.from(ul.children)
      .filter((todo)=> !todo.textContent.toLowerCase().includes(term))
      .forEach((todo)=> todo.classList.add('filtered'));

   Array.from(ul.children)
      .filter((todo)=> todo.textContent.toLowerCase().includes(term))
      .forEach((todo)=> todo.classList.remove('filtered')); 
}

search.addEventListener('keyup',()=>{
    const term = search.value.trim().toLowerCase();
    filtertodos(term);
});