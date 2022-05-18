let apiQuotes = [];

// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://icanhazdadjoke.com/j/R7UfaahVfFd';
    const response = await fetch("https://icanhazdadjoke.com/j/R7UfaahVfFd", {
            headers: {
              Accept: "text/plain",
              "User-Agent": "https://github.com/Fakevin0613/JavaScript-CSS-HTML"
            },
           method: "POST"
          });
    apiQuotes = await response.json();
    console.log(apiQuotes);
    // try{
    //     
    // }
    // catch(error){
    //     console.log("ok");
    // }
}

getQuotes();