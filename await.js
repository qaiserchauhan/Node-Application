async function logJSONData() {
  try{
    const response = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
    const jsonData = await response.json();
    console.log(jsonData.joke);
  }
  catch(error){
    console.log("Something went wrong")
    console.warn(error)
  }
    
  }
  logJSONData();
 

// (async () => {
//   async function fetchDataFromApi() {
//     const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
//     const json = await res.json();
//     console.log(json.joke);
//   }
//   await fetchDataFromApi();
//   console.log('Finished fetching data');
// })();