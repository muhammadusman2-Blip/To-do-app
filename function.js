function add(){
    let finddata=document.getElementById("text");
    let findvalue=finddata.value;

    if(findvalue.trim()==""){
        alert("no allowed empty input")
        return
    }
    // console.log(finddata)
    let li=document.createElement("li")
    li.setAttribute("class","li_style")
    let inputdata=document.createTextNode(findvalue)
    li.appendChild(inputdata)

    console.log(li)

    let ul=document.getElementById("uldata")
    ul.appendChild(li)
    finddata.value=""

    let button=document.createElement("button")
    button.setAttribute("class","button_style")
    let button_value=document.createTextNode("Delete")

    button.appendChild(button_value)
    // console.log(button)

    li.appendChild(button)
    // button.setAttribute("class","styl")
   button.onclick =(function(){
    ul.removeChild(li)
   })

   let set_button=document.createElement("button")
   set_button.setAttribute("class","set_btn_style")
   let set_value=document.createTextNode("Set")
   set_button.appendChild(set_value)

   li.appendChild(set_button)

   set_button.onclick=(function(){
//    let update=prompt(findvalue)

   
    var update=prompt(findvalue,li.firstChild.nodeValue)
      //  if( update.trim() !==""){
           li.firstChild.nodeValue=update
   
      //  }
    })

  //   let del_but=document.getElementById("del")
  //   // let todolist=document.getElementById("today")
  //   del_but.onclick=(function(){
     
 
  // //     while (ul.firstChild) {
  // //   ul.removeChild(ul.firstChild);
  // // }
      
  //   })
}

function del(){
   let confirmation = confirm("Are you sure you want to delete everything?");
  if(confirmation){
  let alldelete=document.getElementById("uldata").innerHTML=""
  }
  else{
    alert("delete cancelled")
  }
}