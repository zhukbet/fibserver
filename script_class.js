'use strict'

let str_1;
class Newclass{
    constructor(all_project, result){
    this.all_project=document.querySelector('.'+all_project)
    this.result=document.querySelector("."+result)
    
    this.input=null
    this.button=null
    this.mistake=null
    this.min=null
    this.eror=null
    this.check=null
    this.sort=null
    this.results=null
    this.newMas=[]
    this.spinner=null
    }


all_paint(){
    this.all_project.innerHTML=`<div class="fiba">Fibonacci Calculator </div>
    <div class="conteiner_value">
    The Fibonnaci Of
    <input class="input" value="42" type="number" placeholder="#">
    <button class="button">IS</button>
    <div class="mistake"></div>
    <div class="eror anim">
    </div>
    <input  class="check" type="checkbox">
    <select class="sort" >
    <option value="0">Number Asc</option>
    <option value="1">Number Desc</option>
    <option selected value="2">Date Asc</option>
    <option value="3">Date Desc</option>
    </select>
    <div class="results">Results</div>
    <img class="spinner close" src="./1_9EBHIOzhE1XfMYoKz1JcsQ.gif">
    `
    this.give_all_the_fanction()
    
}

give_all_the_fanction(){
    this.add_selection("input")
    this.add_selection("button")
    this.add_selection("mistake")
    this.add_selection("eror")
    this.add_selection("check")
    this.add_selection("sort")
    this.add_selection("results")
    this.eveButton()
    this.add_selection("spinner")

}
add_selection(class_){
  this[class_]=document.querySelector("."+class_)


}

eveButton(){

    this.button.addEventListener("click", e=>{

        e.preventDefault()
        {
            if(this.input.value.trim()){
              this.fetch_serch(this.input.value)
            }
          } 
      
    })

   
}


addMas=(data)=>{

    
    this.newMas=
    [
       {...data, date_sort:new Date().getTime(),  current_date:new Date().toDateString()+" "+new Date().getHours()+":"+new Date().getMinutes()},...this.newMas
    ]
  this.sort_value()
  this.paint()
    
   
}

paint=()=>{

   this.result.innerHTML=this.newMas
    .map(data=>`<div>The Fibonacci of ${data.number} is ${data.result} ${data.current_date}</div>` )
    .join("<hr>")
    this.check.checked&& localStorage.setItem("new",JSON.stringify(this.newMas))
    
    
  }

  local=()=>{
    if(localStorage.getItem("new")){
      this.newMas=JSON.parse(localStorage.getItem("new"))
      this.paint()
  }
}

more50_min=(more)=>{
  this.mistake.innerHTML=`<div>${more.message}</div>`
  setTimeout(()=>this.mistake.innerHTML="", 5000);
}
mistake42=(ero)=>{
  this.eror.innerHTML=`<div class="container_error">
  <p>${ero.message}</p> 
  <button class="eror_close">X</button>
  </div>`;
  
document.querySelector('.eror_close').addEventListener("click",e=>{ 

this.eror.innerHTML=""
  })
}

add_sort=()=>{
  this.sort.addEventListener("change", this.sort_value)
}

creat_new_date=()=>{
this.addMas({
  number:this.input.value,
 results:this.fibEror(this.input.value)
})

}
//!!!!!!!!!!!!!!!!!
sort_value=()=>{
  switch(this.sort.value){
    case '0':
      this.newMas.sort((a,b)=>a.number-b.number)
       break;
        case "1":
          this.newMas.sort((a,b)=>b.number-a.number)
          break;
        case "2":
          this.newMas.sort((a,b)=>a.date_sort-b.date_sort)
          break;
          case "3":
            this.newMas.sort((a,b)=>b.date_sort-a.date_sort)
            break;

  }
          this.paint()

        }
        
        
        fetch_serch=(num)=>{
          this.button.disabled=true
          this.spinner.classList.remove("close")
          fetch(`http://localhost:5050/fibonacci/${num}`)
    .then(response=>{
      
      if(response.ok){
        return response.json()
      }else{
        
          return Promise.reject(response)
          
        }
      })
      .then(this.addMas)
      .catch(prom=>{
        if(prom.stack) {
        if(prom.stack.includes("TypeError")){
         
          this.creat_new_date()

          return
        }
      }
        const promise_json=prom.json()
        switch(prom.status){
          
            case 442:promise_json.then(e=>{
              
              this.mistake42(e)
            })
            break;
            case 450:
              case 401:promise_json.then(e=>{
                  this.more50_min(e)
              })
              break;
              default:
                this.creat_new_date()
             
                this.paint()
           
              }
            })
            .finally(()=>{
             this.spinner.classList.add("close")
             this.button.disabled=false
            })
          }
          

        }
        

        const fibEror=a=>{
          if(a<2){
            return a
          }else{
            return fibEror(a-2)+fibEror(a-1)
          }
        }

const fib = new Newclass('root', "containre_fib")
fib.all_paint()
fib.local()
fib.add_sort()



const obj = {
  name : 'Ale',
  age : 12,
  isBool : false
}
obj["age1"] = 13



