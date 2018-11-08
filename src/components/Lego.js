import React from 'react';

const Lego = (props) => (
  <div className="main-content">
    <h2>{props.title}</h2>
    <p>This is where you look up Lego sets and do something with them</p>
    
    <div className="listLego"></div>
    <div className="card"></div>
    
  </div>
);

const card = document.querySelector('.card');

 fetch('https://rebrickable.com/api/v3/lego/sets/?search=falcon&key=615a80bba28489a8148fe8e0ae3dfea9')
     //.then(response => console.log(response))
     .then(response => response.json())
     //.then(data => console.log(data.count))
     //.then(data => console.log(data.results[3].name))
     //.then(data => console.log(data))
     //.then(data => generateImage(data.results[3].set_img_url))
     .then(data => generateList(data))
     //.then(data => console.log(data.results))
     //.then(data => console.log(data.results[3].set_url))
     .catch(error => console.log('There is an issue ', error))
     

function generateImage(data) {
  const card = document.querySelector('.card');

  const html = `
    <img src='${data}' alt='' height=150" width="150">
    <p>Click to view images of 
    (put info here) </p>
  `;
  card.innerHTML = html;
}

function generateList(data){

  const listLego = document.querySelector('.listLego');

  const results = data.results.map(item =>
      <div class='row'> 
        <div class='column1'>${item}</div>
        <div class='column2'>c2</div>
        <div class='column3'>c3</div>
      </div>
    );

    listLego.innerHTML = results;

}

function generateList2(data) {
  const listLego = document.querySelector('.listLego');

  let html = `<div className='maintable'>`;
  let counter = `${data.count}`;
  for(let i=1; i<= counter; i++)
  {
    html += `
      <div class='row'> Row `+ i + ` of `+ counter + `
        <div class='column1'>${data.results[` + i +`].name}</div>
        <div class='column2'>c2</div>
        <div class='column3'>c3</div>
      </div>
    
    `;
  }
  html += `</div>`;

  listLego.innerHTML = html;
}


export default Lego;