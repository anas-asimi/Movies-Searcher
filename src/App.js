import axios from "axios";
import Card from "./Components/Card"
import { useRef, useState } from "react"

export default function App() {
  const query = useRef()
  const [data, setData] = useState([])

  const getData = (search_string)=>{
    
    setData([])
    const options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/auto-complete',
      params: {q: search_string},
      headers: {
        'X-RapidAPI-Key': '537f6f0bbcmsh9ed16119f079f0fp168b84jsn028254201906',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    };
    console.time('time')
    axios.request(options).then(function (response) {
      setData(response.data.d);
      console.timeEnd('time')
    }).catch(function (error) {
      console.error(error);
    });
  }

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-md">
          <span className="navbar-brand mb-0 h1"><h1 className='text-primary'>Movies wiki</h1></span>
        </div>
      </nav>
      <div className="container-md">
        <div className="mt-5 d-flex align-items-center justify-content-center">
          <div className="input-group">
            <div className="form-outline">
              <input type="text" id="form1" className="form-control" placeholder="Search" onChange={(e)=>query.current = e.target.value}/>
            </div>
            <button type="button" className="btn btn-primary" onClick={()=>{getData(query.current)}}>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="container w-75 mt-5">
        <div className="container d-flex flex-column bd-highlight mb-3">
          {data.map((ele , i)=><Card data={ele} key={i} />)}
        </div>
      </div>
    </>
  )
}