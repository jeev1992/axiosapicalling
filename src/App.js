import logo from './logo.svg';
import './App.css';
import AxiosGetComponent from './component/AxiosGetComponent';
import AxiosPostComponent from './component/AxiosPostComponent';
import AxiosPutComponent from './component/AxiosPutComponent';
import AxiosDeleteComponent from './component/AxiosDeleteComponent';
import AxiosErrorHandling from './component/AxiosErrorHandling';
import AxiosInstance from './component/AxiosInstance';

function App() {
  return (
    <div className="App">
      <AxiosPostComponent />
    </div>
  );
}

export default App;
