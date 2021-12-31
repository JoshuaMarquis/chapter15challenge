import { useEffect, useState } from 'react';
import Form from './Form';
import List from './List';
import Table from './Table';


function App() {
  const [reqType, setReqType]= useState('users');
  const [content, setContent] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const API_URL = 'https://jsonplaceholder.typicode.com/'

  useEffect(() => {
    const fetchItems = async() =>{
      try{
        const response = await fetch(`${API_URL}${reqType}`);
        if(!response.ok) throw Error('Error receiving from API');
        const data = await response.json();
        console.log(data);
        setContent(data);
      }catch(err){
        setFetchError(err.message);
      } finally{
        //setisloading
      }
    
    }
    fetchItems();

  }, [reqType]);


  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType}> </Form>
      {/* <List content={content}></List> */}
      <Table content={content}></Table>

    </div>
  );
}

export default App;
