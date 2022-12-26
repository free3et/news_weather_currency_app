import styles from "./News.module.scss";
import UserAvatar from "../../assets/news/user_avatar.png";

export const NewsComponent = ({ post }) => {
  const { title, description, publishedAt, author, source, url, urlToImage } = post;
  return (
    <article className={`${styles.newsCard_wrap} col-12 col-md-4 col-lg-3`}>
      <div className={styles.newsCard_thumb_img}>
        <img src={urlToImage} alt={title} />
      </div>
      <div className={styles.newsCard_body}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.userDate_info}>
          <img src={UserAvatar} alt={title} />
          <p>{author || "no author"}</p>
          <p>{publishedAt}</p>
          <p>{source.name}</p>
          <a href={url}>Link</a>
        </div>
      </div>
    </article>
  );
};
