 let inputTag=document.querySelector("input");
 let ulTag=document.querySelector("ul");   // selected ul Tag
      inputTag.addEventListener("keydown",function(e){
            let key=e.key;
            if(key=="Enter"){
                let value=inputTag.value;
                console.log(value);
                inputTag.value=" ";
                let liTag=document.createElement("li");
                liTag.innerHTML=`<div>${value}</div>
                                   <div class="delete"><i class="fa fa-trash"></i></div>`
                ulTag.appendChild(liTag);
                handleRemoval(liTag);
                
                

            }

      })

     


       function handleRemoval(liTag){
                      let deleteIcon  =liTag.querySelector(".delete");

               deleteIcon.addEventListener("click",function(){
                        liTag.remove();

               })

       }
    //    let buttonTag= document.querySelector("button");
    //    buttonTag.addEventListener("click",function(){
    //       ulTag.remove();
              

    //    })
