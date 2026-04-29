let i=0,s=0;

fetch("./data/quiz.json")
.then(r=>r.json())
.then(d=>{
  show();

  function show(){
    let q=d[i];
    question.innerText=q.q;

    answers.innerHTML=q.a.map((a,x)=>
      `<button class="answer-btn" onclick="check(${x})">${a}</button>`
    ).join("");

    window.check=function(x){
      if(x===q.correct)s++;
      i++;
      if(i<d.length)show();
      else document.body.innerHTML=`<h1>${s}</h1>`;
    }
  }
});
