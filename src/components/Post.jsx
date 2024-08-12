/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Comment } from './Comment';
import { Avatar } from './Avatar'
import styles from './Post.module.css';
import { useState } from 'react'; //importando o useState para monitorar variáveis e alterar valores

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

export function Post({author, publishedAt, content}){
    const [comments, setComments] = useState([  // iniciando o useState com a variável comments (valor inicial) e setComments (para atualizar o valor inicial)
        "Post muito bacana, hein?!"
    ])

    const [newCommentText, setNewCommentText] = useState('') // iniciando o estado com texto vazio

    const publishedDateFormatted =  format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })
    
    function handleCreateNewComment(){
        event.preventDefault()
        setComments([...comments, newCommentText]) //utiliza o hook useState para atualizar o valor de comments. Usamos o spread operator para pegar o array anterior e adicionar mais um valor.
        setNewCommentText('') // após a adiçao do comentário, será definido o valor do comentario como um valor vazio, para que o textarea fique em branco

    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
        // console.log(event.target.value)
    }

    function handleNewCommentInvalid(){
        // console.log(event)       
        event.target.setCustomValidity('Esse campo é OBRIGATÓRIO HAHAHA!!')
    }

    function deleteComment(commentToDelete){
        // imutabilidade -> as variáveis não sofrem mutação
        const commentsWithoutDeletedOne = comments.filter(comment =>{
            return comment != commentToDelete
        })

        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length == 0

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line =>{ //mapenado o content que está presente no app.jsx, onde é apresentado paragrafos e linhas
                    if (line.type == 'paragraph'){
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type == 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>       

                <textarea
                    placeholder='Deixe seu comentário'
                    name='comment'
                    value={newCommentText} //receberá o valor do state newCommentText, que é o comentário em si
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Deixe seu comentário
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => { //mapeando os comentarios dos posts
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}/>
                        )
                    // retornando o comentario mapeado com a prop content que recebe cada comment mapeado no array
                    // passamos dentro do comment, a prop deleteComment que recebe como valor a funçao de remover o comentario, para que no componente Comment.jsx, possamos acessar a prop e realizar a remoçao correta do comentário
                })}
                
            </div>    
        </article>
    )

}