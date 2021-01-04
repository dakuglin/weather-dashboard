import React, { useContext } from "react";
import { Context } from "../../Context";


export const Search = () => {

  const { data } = useContext(Context);

  return (
    <>
    <div>
      <form onSubmit={data}>
        <input />
        <div>
          <button></button>
        </div>
      </form>
    </div>
    </>
  );
};