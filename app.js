const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const btn = document.getElementById('submitBtn');
const picker = document.getElementById('colorPicker');
const canvas = document.getElementById('pixelCanvas');
const tex = document.getElementById('textt');



btn.addEventListener('click', function(C){
    canvas.innerHTML = '';
    C.preventDefault();

    makeGrid();

})



function makeGrid(C){
    for ( let h = 0 ; h < height.value ; h++){
        const row = canvas.insertRow(0);
        for( let w = 0 ; w < width.value ; w++){
            row.insertCell(0);
        }
    }
}

canvas.addEventListener('click', function(r){
    if ( r.target.nodeName === 'TD'){
        r.target.style.backgroundColor = picker.value;
        tex.style.color =  picker.value;
    }
})
