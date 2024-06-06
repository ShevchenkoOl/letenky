import Layout from "../../components/Layout/Layout";
import FlightSearch from "../../components/FligthSearch/FligthSearch";

import style from "./wellcomePage.module.scss";

const WellcomePage = ({onSearch}) => {
  return (
    <Layout>
      <div className={style.header}>
        <h1 className={style.title}>Flight Finder</h1>
        <p className={style.subtitle}>
          Find the Best Deals for Your Next Adventure
        </p>
      </div>
      <FlightSearch onSearch={onSearch}/>
    </Layout>
  );
};

export default WellcomePage;
