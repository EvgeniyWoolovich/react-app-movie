import styles from './Card.module.css'
import {FormattedMovie} from "../../types/movieApi";

type CardProps = {
    movie: FormattedMovie
}

export const Card = ({movie}: CardProps) => {
    return (
        <div className={styles.card}>
            <img className={styles.card__image} src={movie.posterUrl} alt={movie.nameRu || movie.nameEn || ''}/>
            <div className={styles.card__info}>
                <p className={styles.card__title}>{movie.nameRu || movie.nameEn || ''}</p>
                <div className={styles.card__description}>
                    <p className={styles.card__btn}>Рейтинг: {movie.rating}</p>
                    <p className={styles.card__btn}>Год: {movie.year}</p>
                </div>
            </div>
        </div>
    )
}