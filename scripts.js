/* Scripts.js*/

/* Dynamically creating the content and formatting*/
const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);


/* Function call when search button is clicked */
function findmovie(){
	var q = document.getElementById('txtbox').value;

  const api_url = 'http://www.omdbapi.com/?s='+q+'&apikey=a6115b9';
                                                     
async function getmovie(){                                                      /* Error handling purpose async and await for promises*/
      const response = await fetch(api_url);
      const data = await response.json();
    for (i = 0; i < data.Search.length; i++) {  

        if(i<=5) {
   
          const card = document.createElement('div');
          card.setAttribute('class', 'card');
	 
	       const h1 = document.createElement('h1');
         h1.textContent = data.Search[i].Title;
	 
	       const a = document.createElement('a');
	       a.href = 'https://www.imdb.com/title/'+data.Search[i].imdbID;
	 
	       const img = document.createElement('img');
         img.src = data.Search[i].Poster;	 
   
        container.appendChild(card);
        card.appendChild(h1);
        a.appendChild(img);
	      card.appendChild(a);
        }

        else if (i>=6){
          const hdncard = document.createElement('div');
          hdncard.setAttribute('id','hdncard');

           const card = document.createElement('div');
          card.setAttribute('class', 'card');

          const h1 = document.createElement('h1');
         h1.textContent = data.Search[i].Title;
   
         const a = document.createElement('a');
         a.href = 'https://www.imdb.com/title/'+data.Search[i].imdbID;
   
         const img = document.createElement('img');
         img.src = data.Search[i].Poster;  
   
        container.appendChild(hdncard);
        hdncard.appendChild(card);
        card.appendChild(h1);
        a.appendChild(img);
        card.appendChild(a);

        }
   } 
   var element = document.createElement("input");
   element.type = "button";
   element.name = "show";
   element.id = "show";
   element.value = "Show more";
   element.onclick = function show(){
    var showcont = document.getElementById("hdncard");
    showcont.style.display ="inline";
    var less = document.getElementById("show");
    less.style.display = "none";
   };
   container.appendChild(element);
}
getmovie();

}

