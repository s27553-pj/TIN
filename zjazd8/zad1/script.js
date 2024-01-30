const url = "http://szuflandia.pjwstk.edu.pl/~ppisarski/zad8/dane.php";
let lastNews = [];
let lastData = null;

function fetchData() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data || !data.stock) {
                console.error('Invalid or missing data:', data);
                return;
            }
            if (!lastData || JSON.stringify(lastData) !== JSON.stringify(data)) {
                lastData = data;
                showData(data.stock);
                showNews(data.news)
            }
        })
        .catch(error => console.error('Error:', error));
}


function showData(stockData) {
    const tableBody = document.getElementById('tablebody');
    tableBody.innerHTML = '';

    Object.keys(stockData).forEach(company => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td scope="row">${company}</td>
          <td scope="row">${stockData[company]}</td>
        `;
        tableBody.appendChild(row);
    });
}
function showNews(news){
    const newsbody = document.getElementById('news');
    lastNews.push(news);
    if(lastNews.length>3){
        lastNews.shift();
    }
    newsbody.innerHTML='';
    lastNews.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-body">
                <p class="card-text">${item}</p>
            </div>
        `;
        newsbody.appendChild(card)
    })
}

fetchData();
setInterval(fetchData, 10000);