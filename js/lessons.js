fetch("./data/lessons.json")
.then(r=>r.json())
.then(d=>{
  lessons.innerHTML=d.map(x=>
    `<div class="card"><h3>${x.title}</h3><p>${x.content}</p></div>`
  ).join("");
});
