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


document.addEventListener('DOMContentLoaded', function()
{
    const filterButton = document.getElementById('filter-button');
    const filterPopup = document.getElementById('filter-popup');
    const closePopup = document.getElementById('close-popup');
    const filterRight = document.getElementById('filter-right');
    const filterFooter = document.querySelector('.filter-footer');

    const filterOptions = {
        'sort': [
            { label: 'Price', value: 'price' },
            { label: 'Popularity', value: 'popularity' }
        ],
        'delivery-time': [
            { label: 'Under 1 hour', value: 'under-1-hour' },
            { label: '1-2 hours', value: '1-2-hours' }
        ],
        'rating': [
            { label: '1 Star', value: '1-star' },
            { label: '2 Stars', value: '2-stars' },
            { label: '3 Stars', value: '3-stars' },
            { label: '4 Stars', value: '4-stars' },
            { label: '5 Stars', value: '5-stars' }
        ],
        'relevance': [
            { label: 'High', value: 'high' },
            { label: 'Medium', value: 'medium' },
            { label: 'Low', value: 'low' }
        ],
        'cost-low-high': [
            { label: 'Low', value: 'low' },
            { label: 'Medium', value: 'medium' },
            { label: 'High', value: 'high' }
        ],
        'cost-high-low': [
            { label: 'High', value: 'high' },
            { label: 'Medium', value: 'medium' },
            { label: 'Low', value: 'low' }
        ]
    };

    filterButton.addEventListener('click', function()
    {
        filterPopup.style.display = 'block';
    });

    closePopup.addEventListener('click', function()
    {
        filterPopup.style.display = 'none';
    });

    document.querySelectorAll('.filter-option').forEach(button =>
    {
        button.addEventListener('click', function()
        {
            const filterType = this.getAttribute('data-filter');
            updateRightSide(filterOptions[filterType] || []);
            filterFooter.style.display = filterType === 'sort' ? 'block' : 'none';
        });
    });

    function updateRightSide(filters)
    {
        filterRight.innerHTML = '<h4>Select Filters</h4>';

        filters.forEach(filter =>
        {
            const label = document.createElement('label');
            label.innerHTML = `<input type="checkbox" name="${filter.value}" value="${filter.value}"> ${filter.label}`;
            filterRight.appendChild(label);
            filterRight.appendChild(document.createElement('br'));
        });
    }

    document.getElementById('clear-filters').addEventListener('click', function()
    {
        document.querySelectorAll('#filter-right input[type="checkbox"]').forEach(checkbox =>
        {
            checkbox.checked = false;
        });
    });

    document.querySelectorAll('#filter-footer button').forEach(button =>
    {
        button.addEventListener('click', function()
        {
            alert(`Applying filter: ${this.textContent}`);
            filterPopup.style.display = 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', function()
{
    const ppButton = document.getElementById('pp');
    const filterPopup = document.getElementById('filter-popup');
    const closePopup = document.getElementById('close-popup');
    const filterRight = document.getElementById('filter-right');
    const filterFooter = document.querySelector('.filter-footer');

    const filterOptions = {
        'sort': [
            { label: 'Price' },
            { label: 'Popularity' }
        ],

    };

    ppButton.addEventListener('click', function()
    {
        filterPopup.style.display = 'block';
        updateRightSide(filterOptions['sort']);
    });

    closePopup.addEventListener('click', function()
    {
        filterPopup.style.display = 'none';
    });

    function updateRightSide(filters)
    {
        filterRight.innerHTML = '<h4>Select Filters</h4>';

        filters.forEach(filter =>
        {
            const label = document.createElement('label');
            label.innerHTML = `<input type="checkbox" name="${filter.value}" value="${filter.value}"> ${filter.label}`;
            filterRight.appendChild(label);
            filterRight.appendChild(document.createElement('br'));
        });

        filterFooter.style.display = 'block';
    }
    document.getElementById('clear-filters').addEventListener('click', function()
    {
        document.querySelectorAll('#filter-right input[type="checkbox"]').forEach(checkbox =>
        {
            checkbox.checked = false;
        });
    });

    document.querySelectorAll('.filter-footer button').forEach(button =>
    {
        button.addEventListener('click', function()
        {
            alert(`Applying filter: ${this.textContent}`);
            filterPopup.style.display = 'none';
        });
    });
});

const foods = [
    { name: "Theni", details: "TamilNadu,India." },
    { name: "Theni-Allinagaram", details: "Allinagaram,Theni,TamilNadu,Theni." },
    { name: "Theni-NRT", details: "NRT Nagar,Theni,TamilNadu,Theni." },
    { name: "Theni Old-Bus Stand", details: "543-po,Old BusStand,Theni,TamilNadu,Theni." },
    { name: "Theni-Suppan", details: "Suppan Ragavan Colony,Theni,TamilNadu,Theni." },
    { name: "Theni-Railaway", details: "Railway Station,Theni,TamilNadu,Theni.." },
    { name: "Theni New-Bus Stand", details: "123-po,New BusStand,Theni,TamilNadu,Theni." },
    { name: "Theni-vettri", details: "Vettri Cinimas,Theni,TamilNadu,Theni." },
    { name: "Theni-Eadamal", details: "12,Edamal street,Theni,TamilNadu,Theni." },
];

function searchFood()
{
    const input = document.getElementById('search-input').value.toLowerCase();
    const detailsDiv = document.getElementById('food-details');
    detailsDiv.innerHTML = "";

    const matchingFoods = foods.filter(food => food.name.toLowerCase().includes(input));

    if(matchingFoods.length > 0)
    {
        matchingFoods.forEach(food =>
        {
            let icon = 'fa-solid fa-location-dot';
            detailsDiv.innerHTML += `
                <div class="food-item">
                    <div class="details">
                        <h3><i class="fa ${icon}"></i> ${food.name}</h3>
                        <p>${food.details}</p>
                    </div>
                </div>
            `;
        });
    }

    else
    {
        detailsDiv.innerHTML = "<p>Food not found</p>";
    }
}
