//import { Fragment, useCallback, useState } from "react";
import { Route } from "react-router-dom";
//import NewsList from "./Component/NewsList";
//import NewsNav from "./Component/NewsNav";
import NewsPage from "./Component/NewsPage";

function App() {
  // const [category, setCategory] = useState("all");
  // const onSelectedCategory = useCallback((category) => {
  //   setCategory(category);
  // }, []);
  return (
    // <Fragment>
    //   <NewsNav category={category} onSelect={onSelectedCategory}></NewsNav>
    //   <NewsList category={category}></NewsList>
    // </Fragment>
    <Route path="/:category?" component={NewsPage}></Route>
  );
}

export default App;
