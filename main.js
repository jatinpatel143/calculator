let string ="";
let button = document.querySelectorAll(".buttons")
// console.log(button.childrens);
button.forEach(element => {
    let elem = element.querySelectorAll("button")
    elem.forEach(e=>{
        e.addEventListener('click',(el)=>{
            if (el.target.innerText == "=") {
                string = eval(string);
                document.querySelector("input").value =string;
              }

          else if (el.target.innerText == "AC") {
                string = ("");
                document.querySelector("input").value =string;
            
            }
      
          else if (el.target.innerText == "M-") {
        //   let into = 

         string= (string.slice
            (0, 1))
        //    string = (into)
            document.querySelector("input").value = string;
        
        }
   else{
            console.log(el.target.innerText);
            string = string +el.target.innerText
            document.querySelector("input").value =string;}
            
        })
    })
});
