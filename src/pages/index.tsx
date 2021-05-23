import { useEffect, useState} from 'react';
import axios from "axios";
import style from '../styles/body.module.css'; 
import Loader from '../components/loading';

export default function Home() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isloading, setloading] = useState(false);

  useEffect(()=>{
    const fetcData = async ()=>{
      setloading(true);
      const result  = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "wakUmib1ju64mIqFbE8gcZ4A1KH5hQSA"
        }
      });

      console.log(result);
      setData(result.data.data);

      setloading(false);
    }

    fetcData();
  },[]); 

  const renderGifs = ()=>{
    if(isloading){
      return(
        <div className={style.loadin}>
          <Loader></Loader>
        </div>
      );
    }    
    return data.map(el =>{      

      return(
        <>
        <div key={el.id} className={style.box}>
          <img src={el.images.fixed_height.url} alt="" />
          <div className={style.dados}>
            <p><b>Titulo: </b>{el.title}</p>
            <p><b>Tipo: </b>{el.type}</p>
            <p><b>Dimensões: </b>{el.images.fixed_height.width} x {el.images.fixed_height.height}</p>
          </div>
        </div>    

        </>
      );
    })
  }

  const SearchChage = (event)=>{
    setSearch(event.target.value);
  }

  const handleSubmit = async(event)=>{
      event.preventDefault();
      setloading(true);
      const result = await axios("https://api.giphy.com/v1/gifs/search",{
        params: {
          api_key: "wakUmib1ju64mIqFbE8gcZ4A1KH5hQSA",
          q: search
        }
      });

      setData(result.data.data);
      setloading(false);
  }

  return (
      <>  
        <div className={style.body}>            
            <form className={style.form}>
              <div className={style.box}>
                <input value={search} type="text" placeholder="Pesquisar GIF..." onChange={SearchChage}/>
                <input onClick={handleSubmit} type="submit" value="Pesquisar" />
              </div>
            </form>         
            {renderGifs()}
        </div>        
      </>
  );
}