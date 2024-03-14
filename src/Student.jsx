import './index.css';
function Student({ name, email,id,face}){
   return(
    <div className="Student">
         <h1>{id}</h1>
         <p>{name}</p>
         <p>{email}</p>
    </div>
   )
}

export default Student