import './App.css';
import thumb from "./img/OIP.jpg"

function App() {

  return(
<section>
    <div className='hub'>
      <div className='main-header'>
      <a href= "https://www.youtube.com/watch?v=rCFmLjGq3Jg&list=RDrCFmLjGq3Jg&start_radio=1">
        <img src={thumb}/>  </a>
        <div className="text">
        <h3>O tamanho da burrice do Arnaldo 4k</h3>
        <p>O gênio e ao mesmo tempo burro da UFAL</p>
        </div>
     
      </div>
    </div>
    
</section>
  );


}

export default App;
