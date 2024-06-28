import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import styles from './components/App.module.css';
import './global.css';


export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Gustavo trevisan"
            content="Texto aqui Textoa aqui Texto aqui Textoa aqui Texto aqui Textoa aqui Texto aqui Textoa aqui"
          />
          <Post
            author="Thomas Turbano"
            content="Texto aqui Textoa aqui Texto aqui Textoa aqui Texto aqui Textoa aqui Texto aqui Textoa aqui"
          />
        </main>
      </div>
    </div>
  )
}
