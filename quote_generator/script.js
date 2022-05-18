let apiQuotes = [];
const abc = document.getElementById('new');
abc.addEventListener('click', getQuotes);

function newq(){
    quote = apiQuotes.joke;
    document.getElementById('quotetext').textContent = quote;
}

async function getQuotes() {
    const apiUrl = 'https://icanhazdadjoke.com/';
    response = await fetch(apiUrl, {
            headers: {
                Accept: 'Application/json'
            },
          });
    apiQuotes = await response.json()
    newq()
}

getQuotes();