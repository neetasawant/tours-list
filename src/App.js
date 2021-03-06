import React, {useState,useEffect} from 'react';
import Tours from './Tours';
import Loading from './Loading';
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading,setLoading] = useState(true)
  const [tours,setTours] = useState([])

  const fetchTours = async () => {
    setLoading(true)
    try{
        const response = await fetch(url);
        const tours = await response.json();
        setLoading(false)
        setTours(tours)
      }catch(error){
        setLoading(true)
        console.log(error)
      }
  }
  const removeTour = (id) => {
    let newTours = tours.filter((tour)=>tour.id!==id)
    setTours(newTours)
  }
  useEffect(()=>{
    fetchTours();
  },[])

  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }
  return <main>
    <Tours tours={tours} removeTour={removeTour}/>
  </main>
}

export default App;
