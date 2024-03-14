import Student from "./Student";
import './index.css';
function Content(){
    const list = {
      student1: {
        name: "John Doe",
        email: "John@doe.com",
        id: <img src="https://i.pinimg.com/736x/99/8f/41/998f41fc4c63e69c06b99a6e03629815.jpg"/>
      },
      student2:{
        id: <img src="https://i.pinimg.com/736x/99/8f/41/998f41fc4c63e69c06b99a6e03629815.jpg"/>,
        name: "Juan Tan",
        email: "juan@tan.com",
      },
      student3:{
        id: <img src="https://i.pinimg.com/736x/99/8f/41/998f41fc4c63e69c06b99a6e03629815.jpg"/>,
        name: "Sean Archer",
        email: "tesoro@archer.com",
      },
      student4:{
        id: <img src="https://i.pinimg.com/736x/99/8f/41/998f41fc4c63e69c06b99a6e03629815.jpg"/>,
        name: "Nino cezar",
        email: "nino@cezard.com",
      },
      student5:{
        id: <img src="https://i.pinimg.com/736x/99/8f/41/998f41fc4c63e69c06b99a6e03629815.jpg"/>,
        name: "FrancisBien",
        email: "francis@bien.com",
      }
    }
  
    return(
      <>
        {Object.keys(list).map((key) => {
          const studentlist = list[key];
          return (
            <Student
              key={key}
              id={studentlist.id}
              name={studentlist.name}
              email={studentlist.email}
            />
          );
          })}
      </>
    )
}

export default Content