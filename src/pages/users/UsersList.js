import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TableHeader from "../../components/TableHeader";
import DynamicTable from "../../components/DynamicTable";
import Pagination from "../../components/Pagination";
import {
  getAllAccountsRequest,
  setErrorEmpty,
} from "../../features/adminUserSlice";
import allTableHeaders from "../../tableHeaders/AllTableHeaders";
import { setMessage } from "../../features/appSlice";

const UsersList = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
  const faqArray = useSelector((state) => state.user.allAccounts);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentResultsToMap =
    faqArray &&
    faqArray.length > 0 &&
    faqArray.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(getAllAccountsRequest());
    dispatch(setMessage(""));
    dispatch(setErrorEmpty());
  }, [dispatch]);
  useEffect(() => {}, [postsPerPage]);
  return (
    <div className="dark:bg-tableclmn bg-secoundry shadow-dhruv mt-4 font-semibold text-iconColor">
      <TableHeader
        showNewButton={true}
        postsPerPage={postsPerPage}
        setPostsPerPage={setPostsPerPage}
        heading={"Users List"}
      />
      {faqArray && faqArray.length > 0 ? (
        <div>
          <DynamicTable
            mappingDataArray={currentResultsToMap}
            tableHeaderArray={allTableHeaders.usersTableHeader}
            tableActionHeader={true}
            updateLinkString="/users/update-account"
            updateLinkTerm="id"
            hideDeleteIcon={true}
          />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={faqArray && faqArray.length}
            paginate={paginate}
          />
        </div>
      ) : (
        <div className="flex py-32">
          <div className="m-auto ">
            <p className="text-sm font-normal text-gray-700 mb-2 text-center">
              No Records
            </p>
            <Link to="/faqs-list/add-new-faq">
              <button className="bg-yellow-600 text-sm px-6 py-1 text-white rounded-sm hover:bg-yellow-500">
                Create One
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersList;
