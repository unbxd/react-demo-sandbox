import React, { useState, useContext, useEffect } from "react";

const PaginationItemComponent = ({ itemData, onClick }) => {
  const { pageNumber, type, isSelected = false } = itemData;
  return (
    <div data-pagenumber={pageNumber} onClick={onClick ? onClick : null}>
      {type === "NUMBER" && (
        <button
          className={`UNX-pageNavigation__button ${
            isSelected ? "-isSelected" : ""
          }`}
        >
          {pageNumber}
        </button>
      )}
      {type === "PREVIOUS" && (
        <button className="UNX-pageNavigation__button -action">&lt;</button>
      )}
      {type === "NEXT" && (
        <button className="UNX-pageNavigation__button -action">&gt;</button>
      )}
    </div>
  );
};

export default PaginationItemComponent;
