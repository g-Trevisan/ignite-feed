/* eslint-disable react/jsx-key */
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import styles from './components/App.module.css';
import './global.css';


const posts = [
  {
      id: 1,
      author: {
          avatharUrl: 'https://github.com/diego3g.png',
          name: 'Gustavo Trevisan',
          role: 'Suporte Técnico - Windel Sistemas',
      },
      content: [
          { type: 'paragraph', content: 'Fala galeraa 👋', },
          { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare🚀', },
          { type: 'link', content: 'jane.design/doctorcare', },
      ],
      publishedAt: new Date('2024-08-02 20:00:00')
  },
  {
      id: 2,
      author: {
          avatharUrl: 'https://github.com/diego3g.png',
          name: 'Zaneleixon',
          role: 'Suporte Técnico - Windel Sistemas',
      },
      content: [
          { type: 'paragraph', content: 'Fala galeraa 👋', },
          { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare🚀', },
          { type: 'link', content: 'jane.design/doctorcare', },
      ],
      publishedAt: new Date('2024-08-05 20:00:00')
  },
];



export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
            {posts.map(post => {
              return(
                <Post
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}

                />
              )
            })}
        </main>
      </div>
    </div>
  )
}
