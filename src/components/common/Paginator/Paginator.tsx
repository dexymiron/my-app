import React, { useState } from "react";
import styles from "./Paginator.module.scss";
import cn from "classnames";
//@ts-ignore
import rightArrow from '../../../assets/images/icons/right.svg';
//@ts-ignore
import leftArrow from '../../../assets/images/icons/left.svg';



type PropsType = {
  totalItemsCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber:number) => void
  portionSize?: number
}

let Paginator: React.FC<PropsType> = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <button className={styles.nextButton}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
        <img src={leftArrow} alt="next" style={{width: '11px', height: '11px'}}/>
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={cn(
                {
                  [styles.selectedPage]: currentPage === p,
                },
                styles.pageNumber
              )}
              key={p}
              onClick={(e) => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button className={styles.nextButton}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          <img src={rightArrow} alt="next" style={{width: '11px', height: '11px'}}/>
        </button>
      )}
    </div>
  );
};

export default Paginator;
