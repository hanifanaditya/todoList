const btn = document.querySelector('.btn');
const list = document.querySelector('.list');
const input = document.getElementById('input');

btn.addEventListener('click', () =>{
    let tod = `<div class="todo">
        <div>
            <input type="checkbox" id="centang">
            <label for="centang">${input.value}</label>
        </div>
        <span class="delete">x</span>
    </div>`;

    list.innerHTML += tod;
    input.value = '';
    input.focus();
});

list.addEventListener('click', (e) => {
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
});