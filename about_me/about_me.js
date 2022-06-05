let apiQuotes = [];
const abc = document.getElementById('new');
abc.addEventListener('click', getQuotes);

function newq(randomnum, apiQuotes){
    quote = apiQuotes[randomnum].fact;
    document.getElementById('quotetext').textContent = quote;
}

async function getQuotes() {
    try{
        const response = await fetch("./kevin_fun_fact.json")
        const apiQuotes = await response.json()
        const randomnum = Math.floor(Math.random() * apiQuotes.length)
        newq(randomnum, apiQuotes)
    }
    catch(exception){
        console.log("lol")
    }
    
}

getQuotes();