import { useGetAllPostsQuery, useGetSearchPostsQuery } from "../../GetData/newsSlice";
import { NewsComponent } from "./NewsComponent";
import styles from "./News.module.scss";
import { Loader } from "../Loader/Loader";
import { useNewsContext } from "../../context/NewsContext";

export const NewsList = () => {
  const { category, country, search } = useNewsContext();

  const news = {
    category,
    country,
  };

  const { data = [], isLoading, isError, isSuccess, error } = useGetAllPostsQuery(news);

  return (
    <>
      {isLoading && <Loader />}
      <section className={`${styles.news_list} category`}>
        {data.articles !== undefined &&
          isSuccess &&
          search === "" &&
          data.articles.map((post, index) => <NewsComponent post={post} key={index} />)}
      </section>
    </>
  );
};
