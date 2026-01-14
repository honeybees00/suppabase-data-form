const name=input()=>{
const response =await fetch(https://wwtctwboxdubvuwdngec.supabase.co/rest/v1/data_form)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error =>console.error(error))
}