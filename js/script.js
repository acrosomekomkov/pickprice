`use strict`

let dropdown_target = document.querySelector('.dropdown_disable');
let catalog_target = document.querySelector('.catalog_main');


catalog_target.addEventListener('mouseover', function(event) {
    dropdown_target.style.display = 'block';
}); //Наводка мыши на блок каталога

catalog_target.addEventListener('mouseout', function(event) {
    dropdown_target.style.display = 'none';
}); //Вывод мыши из блока каталога

dropdown_target.addEventListener('mouseover', function(event) {
    dropdown_target.style.display = 'block';
}); //наводка на блок со списком

dropdown_target.addEventListener('mouseout', function(event) {
    dropdown_target.style.display = 'none';
}); //вывод с блока списка