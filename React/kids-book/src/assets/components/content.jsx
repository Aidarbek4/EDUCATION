import React from "react";
import { Categories, Sort, BookBlock } from "./index";

function Content() {
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
              onClick={() => console.log("hello!")}
              items={["Сказки", "Мальчикам", "Девочкам", "Энциклопедии"]}
            />
          <Sort />
        </div>
        <h2 className="content__title">Все книги</h2>
        <div className="content__items">
          <BookBlock />
          <BookBlock />
          <BookBlock />
          <BookBlock />
          <BookBlock />
          <BookBlock />
          <BookBlock />
          <BookBlock />
          <BookBlock />
          <BookBlock />
          <BookBlock />
          <BookBlock />
        </div>
      </div>
    </div>
  );
};

export default Content;