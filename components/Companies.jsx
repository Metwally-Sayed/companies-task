import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanyData } from '../redux/features/companyDataSlice';
import Link from 'next/link';
const Companies = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://forall.sa/services/api/ads/companies?page_count=88`,
      );
      const jsonData = response;
      setData(jsonData.data.data);
    }

    fetchData();
  }, []);

  console.log(data);

  const lastPostIdx = currentPage * postPerPage;
  const firstPostIdx = lastPostIdx - postPerPage;
  const currentPosts = data?.slice(firstPostIdx, lastPostIdx);

  const routingHandler = (companyId) => {
    const company = currentPosts.filter((post) => post.id === companyId);
    dispatch(getCompanyData(company));
    console.log(company);
  };

  return (
    <>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {Array.isArray(currentPosts)
            ? currentPosts?.map((company, idx) => (
                <Link key={idx} href={`${company.id}`}>
                  <div
                    key={company.id}
                    className="group"
                    onClick={() => {
                      routingHandler(company.id);
                    }}
                  >
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img
                        src={company.logo['256px']}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">
                      {company.name.value}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      {company.description.value}
                    </p>
                  </div>
                </Link>
              ))
            : null}
        </div>
        <br />
        <div className="flex flex-col items-center">
          <Pagination
            totalPosts={data.length}
            postPerPage={postPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default Companies;
