

const baseUrl = "http://localhost:8000";

export const getAllData = async () =>{
   const res = await fetch(`${baseUrl}/tasks` , {cache : 'no-store'})
   const json = res.json().catch(error => console.log(error))
   return json
}

export const addTask = async (task) =>{
    const res = await fetch(`${baseUrl}/tasks` , {
        method : 'POST' , 
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(task)
    }).catch(error =>{
      console.log(error);
    })

    const newTask = await res.json();
    return newTask   
    
}


export const editTask = async (task) =>{
  const res = await fetch(`${baseUrl}/tasks/${task.id}` , {
      method : 'PUT' , 
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(task)
  }).catch(error =>{
    console.log(error);
  })

  const updateTask = await res.json();
  return updateTask
}

export const deleteTask = async (id) =>{
  await fetch(`${baseUrl}/tasks/${id}` , {
      method : 'DELETE' , 
  }).catch(error =>{
    console.log(error);
  })
}