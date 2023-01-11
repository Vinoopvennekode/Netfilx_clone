import React ,{useEffect,useState}from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, imgUrl} from '../../constants/constants'
import Youtube from 'react-youtube'
function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId,setUrlId]=useState('')
    useEffect(() => {
      axios.get(props.url).then((response)=>{
        console.log(response.data);
        setMovies(response.data.results)
      }).catch(err=>{
       // alert('network error')
      })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },}
    
        const handleMovie=(id)=>{
            console.log(id);
            axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`).then((response)=>{
                console.log(response.data);
            })
        }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {movies.map((obj)=>
                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallposter':'poster'} src={`${imgUrl+obj.backdrop_path}`} alt="" />
            )}
        </div>
        <Youtube opts={opts} videoId="2g811Eo7K8U"/>
    </div>
  )
}

export default RowPost