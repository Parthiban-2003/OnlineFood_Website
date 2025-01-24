document.getElementById('carousel-left').addEventListener('click', () =>
{
    const container = document.querySelector('.carousel-wrapper');
    container.scrollBy({
        left: -container.clientWidth,
        behavior: 'smooth'
    });
});

document.getElementById('carousel-right').addEventListener('click', () =>
{
    const container = document.querySelector('.carousel-wrapper');
    container.scrollBy({
        left: container.clientWidth,
        behavior: 'smooth'
    });
});

//function toggleMenu()
//{
//    const menu = document.getElementById('menu');
//    if(menu.style.display === 'block')
//    {
//        menu.style.display = 'none';
//    } else
//    {
//        menu.style.display = 'block';
//    }
//}

//document.getElementById('scroll-left').addEventListener('click', function()
//{
//    const container = document.querySelector('.food-scroll');
//    container.scrollBy({ left: -200, behavior: 'smooth' });
//});

//document.getElementById('scroll-right').addEventListener('click', function()
//{
//    const container = document.querySelector('.food-scroll');
//    container.scrollBy({ left: 200, behavior: 'smooth' });
//});
