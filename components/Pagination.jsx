import Reacts from 'react';

const Pagination = ({ totalPosts, postPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      <div>
        {pages.map((page, idx) => {
          return (
            <button
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(page);
              }}
              className="m-3 text-center border-slate-200 border w-8 h-8 rounded-lg shadow-md hover:bg-slate-200 "
              key={idx}
            >
              {page}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Pagination;
