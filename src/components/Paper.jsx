import React from "react";
import PropTypes from "prop-types";

//menggunakan props, yang pada react adalah sebuah object yang berisi semua hal yang akan di inject ke dalam komponen, dan hal yang pasti di miliki oleh setiap komponen adalah props children.
// dengan kata lain props adalah sebuah object yang berisi children.
//Paper disini merupakan komponen
const Paper = ({ children }) => {
  return (
    <div className="container">
      <div className="frame">{children}</div>
    </div>
  );
};

//langkah selanjutnya menentukan types dari props yang akan diterima oleh komponen.
//types disini merupakan tipe datanya.
//untuk memberikan proptypes atau typing pada komponen kita dapat menggunakan 1 npm packcages sederhana bernama proptypes.

/*children akan memiliki 2 diantara type yang telah di definisikan,
bisa berupa 1 node atau sekumpulan (arrayOf) node*/
Paper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Paper;
