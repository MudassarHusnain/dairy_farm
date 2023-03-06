import React, { useState} from "react";
import { Navigate } from "react-router";
import  secureLocalStorage  from  "react-secure-storage";
export default function Addanimal() {
  const [image, setImage] = useState("")
  const [date_of_birth, setDate_of_birth] = useState("")
  const [status, setStatus] = useState(0)
  const [animalAddStatus,setAnimalAddStatus]=useState(false)
  function handleinput(e) {
    e.preventDefault();
    setImage(e.target.picture.files[0])
    setDate_of_birth(e.target.date_of_birth.value)
    setStatus(e.target.status.value)
  }
//   useEffect()
//   {
//     const data = new FormData();
//     data.append("picture", image);
//     data.append("date_of_birth", date_of_birth);
//     data.append("status", status);
//     fetch("/animals", {
//       method: "POST",
//       body: data,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
  function callapi(e)
  {
    e.preventDefault();
    const data = new FormData();
    data.append("picture", e.target.picture.files[0]);
    data.append("date_of_birth", e.target.date_of_birth.value);
    data.append("status", e.target.status.value);
    fetch("/animals", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("This is working properly")
        setAnimalAddStatus(true)
        console.log(animalAddStatus)
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    
    <div className="position-absolute top-50 start-50 translate-middle h-25 w-25">
      <form className="Auth-form" onSubmit={(e)=>callapi(e)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Add New Animal Details</h3>
          <div className="form-group mt-3">
            <label>Picture</label>
            <input
            className="form-control mt-1"
            placeholder="username"
            type="file" name="picture"
            />
          </div>
          <div className="form-group mt-3">
          <label>Date Of Birth</label>
          <input
          className="form-control mt-1"
          type="date" name="date_of_birth"
          />
        </div>
        <div className="form-group mt-3">
        <label>Status</label>
        <input
        className="form-control mt-1"
        placeholder="Status"
        type="number" name="status"
        />
      </div>
      <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Add New Animal
            </button>
          </div>
          </div>
          </form>
        {animalAddStatus?
          <>
          console.log("this working ")
          <Navigate replace to='/frontPage' /></>
          :console.log("this is not working properly")
         }
    </div>
  );
}