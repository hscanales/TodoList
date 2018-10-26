
 window.onload = init;
   
 function init() {
     let todoList = {
         listHTML: document.getElementById("todoList"),
         listTask: [],
         add(task, priority = false) {
             let element = document.createElement("li");
             
             element.appendChild(document.createTextNode(task));
             let checkButton = document.createElement("button");
             
             
             checkButton.innerHTML = "Done";
             element.appendChild(checkButton);
             checkButton.addEventListener("click", () => {
                 element.style.textDecoration = "line-through";
             });
             let deleteButton = document.createElement("button");
             deleteButton.innerHTML = "Delete";
             deleteButton.addEventListener("click", () => {
                element.remove();
             });
             element.appendChild(deleteButton);
             
             /*element.addEventListener("click", () => {
                let parent = element.parentNode;
                if(parent){
                    parent.removeChild(element);
                }
             });*/
             /*
             element.addEventListener("click", function(){
                console.log(this);
                let parent = this.parentNode;
                if(parent){
                    parent.removeChild(this);
                }
             });
             */
            // Añadir un boton para marcar de finalizado
            // Elmine de la lista

             if (priority) {
                 this.listTask.unshift({
                     element,
                     task
                 });
                 this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
             } else {
                 this.listTask.push({
                     element,
                     task
                 });
                 this.listHTML.appendChild(element);
             }
         }
     }

     let form = document.managerTask;
     form.addEventListener("submit", (evt) => {
         evt.preventDefault();
         let task = form.task.value;

         let validTask = /.{2,}/;
         if (!validTask.test(task)) {
             console.log("Ingrese una descripcion clara");
             return false;
         }

         todoList.add(task, form.important.checked);

     });
 }