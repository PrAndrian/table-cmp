import React, { useState } from "react";
import PaginationTable from "../components/PaginationTable"; // Replace with the actual import path

function PaginationTableVariants() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section className="flex flex-col justify-center items-center border pb-10">
      <h2 className="text-3xl py-5 font-bold">PaginationTable Variants</h2>
      <div className="flex justify-between w-full">
        {/* Default Variant */}
        <div>
          <h3>Default Variant</h3>
          <PaginationTable
            totalItems={100}
            itemsPerPage={10}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>

        {/* Variant 1 */}
        <div>
          <h3>Variant 1</h3>
          <PaginationTable
            totalItems={50}
            itemsPerPage={5}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            activeButtonColor="red"
            hoverButtonColor="yellow"
            width="250px"
            height="30px"
          />
        </div>

        {/* Variant 2 */}
        <div>
          <h3>Variant 2</h3>
          <PaginationTable
            totalItems={200}
            itemsPerPage={20}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            activeButtonColor="purple"
            hoverButtonColor="orange"
            width="350px"
            height="50px"
          />
        </div>
      </div>

      {/* Add more variants as needed */}
    </section>
  );
}

export default PaginationTableVariants;
