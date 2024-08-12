import styles from '../components/Avatar.module.css'

export function Avatar({hasBorder = true, src}){ // definimos atraves da desestruturaçao que o harBorder terá o valor de true como padrão para puxar a borda no avatar

    return(
        <img className={hasBorder ? styles.avatarWithBorder :  styles.avatar} src={src}  /> // se hasBorder for True, então irá puxar o estilo avatarWithBorder do arquivo de estilo, se não irá puxar o avatar normal
    )
}