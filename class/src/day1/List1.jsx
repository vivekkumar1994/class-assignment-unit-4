// component => function => take any propertie as argument and
// return  react element

import React from "react";
import styles from './List1.module.css'

const List1 = (props) => {
  console.log(styles)
  return (
    <>
      <h1 className= {styles.header}>Student's List</h1>
      <p className= {styles.header__list}>MASAI</p>
    </>
  );
};

export default List1;

//golbal css
// list componeny
// module.css

