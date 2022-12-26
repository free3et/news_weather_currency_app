import { useGetSearchPostsQuery } from "../../GetData/newsSlice";
import { NewsComponent } from "./NewsComponent";
import styles from "./News.module.scss";
import { Loader } from "../Loader/Loader";
import { useNewsContext } from "../../context/NewsContext";

export const NewsListSearch = () => {
  const { search } = useNewsContext();

  const { currentData = [], isLoading, isError, isSuccess, error } = useGetSearchPostsQuery(search);

  return (
    <>
      {isLoading && <Loader />}
      <section className={`${styles.news_list} search`}>
        {currentData.articles !== undefined &&
          isSuccess &&
          currentData.articles.map((post, index) => <NewsComponent post={post} key={index} />)}
      </section>
    </>
  );
};
