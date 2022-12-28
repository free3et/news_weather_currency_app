import { useGetTopPostsQuery } from "../../GetData/newsSlice";
import { NewsComponent } from "./NewsComponent";
import styles from "./News.module.scss";
import { useNewsContext } from "../../context/NewsContext";
import { Loader } from "../Loader/Loader";

export const TopNews = () => {
  const { country, search } = useNewsContext();

  const { data = [], isLoading, isError, isSuccess, error } = useGetTopPostsQuery(country);

  return (
    <>
      {isLoading && <Loader />}
      {search === "" && (
        <>
          <h2>Top news</h2>
          <section className={`${styles.news_list}  top`}>
            {data.articles !== undefined &&
              isSuccess &&
              data.articles.map((post, index) => <NewsComponent post={post} key={index} />)}
          </section>
        </>
      )}
    </>
  );
};
