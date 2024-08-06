import styles from '../components/Avatar.module.css'

export function Avatar({hasBorder = true, src}){

    return(
        <img className={hasBorder ? styles.avatarWithBorder :  styles.avatar} src={src}  />
    )
}