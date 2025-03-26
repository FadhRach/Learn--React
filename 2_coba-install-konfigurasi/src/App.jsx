import { useState } from 'react'
import Header from './components/Header';

function App() {
  const hepiturings = ['fadh', 'sisil', 'nai','bambang', 'kuda', 'kepin', 'alex'];
            const [likes, setLikes] = useState(0);

            function handleClick() {
                setLikes(likes + 1);
            }

            return(
                <>
                    <Header author="jadi wibu"/>
                    <ul>
                        {
                            hepiturings.map((hepituring) => (
                                <li key={hepituring}>{hepituring}</li>
                            ))
                        }
                    </ul>
                    <button onClick={handleClick}>Like ({likes})</button>
                </>
            );
}

export default App
