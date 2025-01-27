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

function togglemenu()
{
    const menu = document.getelementbyid('menu');
    if(menu.style.display === 'block')
    {
        menu.style.display = 'none';
    } else
    {
        menu.style.display = 'block';
    }
}

document.getelementbyid('scroll-left').addeventlistener('click', function()
{
    const container = document.queryselector('.food-scroll');
    container.scrollby({ left: -200, behavior: 'smooth' });
});

document.getelementbyid('scroll-right').addeventlistener('click', function()
{
    const container = document.queryselector('.food-scroll');
    container.scrollby({ left: 200, behavior: 'smooth' });
});
