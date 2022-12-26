import { useGetSearchPostsQuery } from "../../GetData/newsSlice";
import { NewsComponent } from "./NewsComponent";
import styles from "./News.module.scss";
import { Loader } from "../Loader/Loader";
import { useNewsContext } from "../../context/NewsContext";

export const NewsListSearch = () => {
  const { search } = useNewsContext();

  const { data = [], isLoading, isError, isSuccess, error } = useGetSearchPostsQuery(search);

  //useEffect(() => getQueryParams(search), []);

  /*   const searchTerm = new URL(data.url).searchParams;
  const search1 = searchTerm.get("search");
  console.log(search1); */

  return (
    <>
      {isLoading && <Loader />}
      <section className={`${styles.news_list} search`}>
        {data.articles !== undefined &&
          isSuccess &&
          data.articles.map((post, index) => <NewsComponent post={post} key={index} />)}
      </section>
    </>
  );
};
