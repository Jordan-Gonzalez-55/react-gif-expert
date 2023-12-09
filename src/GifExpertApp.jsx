import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    //console.log(newCategory);
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/*titulo*/}
      <h1>GifExpertApp con React</h1>
      {/*Input*/}
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />

      {/*Listado de Gif*/}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/*Gif Item*/}
    </>
  );
};
