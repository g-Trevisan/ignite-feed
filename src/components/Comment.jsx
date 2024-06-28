import { Trash } from 'phosphor-react'
import { ThumbsUp } from "phosphor-react";

import styles from './Comment.module.css'

export function Comment(){
    return (
        <div className={styles.comment}>
            <img src="https://github.com/g-trevisan.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gustavo Trevisan</strong>
                            <time title="Publicado a 1h" dateTime="2024-26-06 23:19:58">Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!!!!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}