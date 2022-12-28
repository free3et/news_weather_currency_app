import styles from "./News.module.scss";
import UserAvatar from "../../assets/news/user_avatar.png";

export const NewsComponent = ({ post, className }) => {
  const { title, description, publishedAt, author, source, url, urlToImage } = post;
  return (
    <article className={`${styles.newsCard_wrap} ${className}`}>
      <div className={styles.newsCard_thumb_img}>
        <img src={urlToImage} alt={title} />
      </div>
      <div className={styles.newsCard_body}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.userInfo}>
          <div className={styles.userName_info}>
            <img src={UserAvatar} alt={title} />
            <p>{author || "no author"}</p>
          </div>
          <div className={styles.userDate_info}>
            <img src={UserAvatar} alt={title} />
            <p>{publishedAt}</p>
          </div>
          <div className={styles.sourceNews_info}>
            <img src={UserAvatar} alt={title} />
            <p>{source.name}</p>
            <a href={url}>Link</a>
          </div>
        </div>
      </div>
    </article>
  );
};
