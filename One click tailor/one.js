function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

let selectedClothing = null;

function selectClothing(type){
    selectedClothing = type;
    const img = document.getElementById('clothes-image');
    let src = '';
    if(type=='dress') src='images/dress.png';
    if(type=='uniform') src='images/uniform.png';
    if(type=='hoodie') src='images/hoodie.png';
    if(type=='jacket') src='images/jacket.png';
    img.src = src;
    img.style.display = 'block';
}

function generatePattern(){
    const chest = document.querySelector('input[name="chest"]').value;
    const waist = document.querySelector('input[name="waist"]').value;
    const hips = document.querySelector('input[name="hips"]').value;
    const height = document.querySelector('input[name="height"]').value;
    const length = document.querySelector('input[name="length"]').value;

    const img = document.getElementById('clothing-image');

    if(!selectedClothing) {
        alert('Сначала выберите одежду на экране "Выбрать модель одежды"!');
        return;
    }

    
    let src = '';
    if(selectedClothing=='dress') src='images/dress.png';
    if(selectedClothing=='uniform') src='images/uniform.png';
    if(selectedClothing=='hoodie') src='images/hoodie.png';
    if(selectedClothing=='jacket') src='images/jacket.png';

    img.src = src;
    img.style.display = 'block';

    
    img.style.width = Math.min(100 + parseInt(chest)/2, 250)+'px';

    alert('Лекало сгенерировано! (демо)');
}

function toggleLang() {
    const kz = document.getElementById("lang-kz");
    const ru = document.getElementById("lang-ru");

    kz.classList.toggle("active");
    ru.classList.toggle("active");
}
