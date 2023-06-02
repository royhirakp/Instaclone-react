import Postcard from "../post/postcard/Postcard";
import Loader from "../../featurs/Loder";
import StaticPostCard from "../post/postcard/SaticPostCard";
import { useFetchDataQuery } from "../../../Redux/getDataPApi/getDataApi";
import { memo, useEffect } from "react";

const Post = () => {
  const { data, isFetching, isError, refetch } = useFetchDataQuery();
  let arr = data?.data;
  let copy_arr = arr ? [...arr]?.reverse() : [];

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <>
      {isFetching ? <Loader /> : ""}
      {isError ? <h1>Error comming to get the data</h1> : ""}
      {copy_arr?.map((obj, i) => {
        return <Postcard data={obj} key={i * 0.025554} />;
      })}
      <>
        <StaticPostCard />
      </>
    </>
  );
};
export default memo(Post);
