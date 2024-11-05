$(function() {
    //owlCarousel
    $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin: 10,
        autoWidth: true
    });
    });

    //Ініціалізація owlCarousel при відкритті випадаючого списку
    $('.dropdown').on('shown.bs.dropdown', function () {
    $('.owl-carousel').trigger('refresh.owl.carousel');
    });
    
    //Календар
    $("#myDiv").datepicker();
});

//Збільшення зображення
function openImage(src) 
{
    const fullScreenContainer = document.getElementById('fullScreenContainer');
    const fullScreenImage = document.getElementById('fullScreenImage');
    fullScreenImage.src = src;
    fullScreenContainer.style.display = 'flex';
}

//Закриття зображеня
function closeImage() 
{
    const fullScreenContainer = document.getElementById('fullScreenContainer');
    fullScreenContainer.style.display = 'none';
}