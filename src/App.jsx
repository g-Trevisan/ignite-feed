import { Header } from './components/Header';
import { Post } from './Post';
import './global.css';


export function App() {

  return (
    <div>
      <Header/>
      <Post 
        author="Gustavo Trevisan" 
        content = "Lorem ipsum dolor sist amet consectetur adipisicing elit." 
      />
      <Post 
        author="Rocket Seat" 
        content = "Teste de conteudo para reaproveitamento de componente" 
      />
    </div>
  )
}
