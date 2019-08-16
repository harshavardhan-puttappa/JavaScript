let name='Aarush';
function changecase(word){
    return word.toUpperCase();
}

let template=
`<h1>${changecase('Hello')}, ${name}</h1><p> This is JavaScript templates example</p>`;

document.getElementById('template').innerHTML=template;