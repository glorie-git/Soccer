// import logo from './logo.svg';
import PlayerList from './Player/PlayerList';
import PlayerForm from './Player/PlayerForm';
import PlayerSingle from './Player/PlayerSingle';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col s12'>Menu</div>
      </div>
      <div className="row">
        <div className='col s3'>< PlayerList /></div>
      </div>
      <div className="row">
        <div className='col s9'>< PlayerSingle /></div>
      </div>
      <div className="row">
        <div className='col s9'>< PlayerForm /></div>
      </div>
    </div>
  );
}

export default App;
