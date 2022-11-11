import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Router from './routers/Router';
function App() {
  return (
      <div className='container py-5'>
          <div className='row'>
            <div className='col-3'>
                <Sidebar />
            </div>
            <div className='col-9'>
               <Router/>
            </div>
          </div>
      </div>
  );
}
export default App;