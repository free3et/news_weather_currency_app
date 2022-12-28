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
          <div className="row">
            <section className={`${styles.top} `}>
              {data.articles !== undefined &&
                isSuccess &&
                data.articles.map((post, index) => (
                  <NewsComponent post={post} key={index} className={`col-12 col-md-6 col-lg-6`} />
                ))}
            </section>
          </div>
        </>
      )}
    </>
  );
};
