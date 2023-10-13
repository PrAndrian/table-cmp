import React, { useState } from "react";
import PaginationTable from "../components/PaginationTable"; // Replace with the actual import path

function PaginationTableVariants() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section className="flex flex-col justify-center items-center border pb-10 px-5">
      <h2 className="text-3xl py-5 font-bold">PaginationTable Variants</h2>
      <div className="flex justify-between w-full gap-10">
        {/* Default Variant */}
        <div className="flex-end grow">
          <h3>Default Variant</h3>
          <PaginationTable
            totalItems={100}
            itemsPerPage={10}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
          <ul className="py-4">
            <li>Props Used:</li>
            <ul>
              <li>- `totalItems`: The total number of items to paginate (100).</li>
              <li>- `itemsPerPage`: The number of items to display per page (10).</li>
              <li>- `currentPage`: The current active page controlled by state.</li>
              <li>- `onPageChange`: A callback function for handling page changes.</li>
            </ul>
          </ul>
        </div>

        {/* Variant 1 */}
        <div>
          <h3>Example 1</h3>
          <PaginationTable
            totalItems={50}
            itemsPerPage={5}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            activeButtonColor="red"
            hoverButtonColor="yellow"
            width="600px"
            height="30px"
          />
          <p>Description: Variant 1 of the PaginationTable component features pagination for a total of 50 items with 5 items per page. <br/> It also customizes the button colors, width, and height.</p>   
          <ul>
            <li>Props Used:</li>
            <ul>
              <li>- `totalItems`: The total number of items to paginate (50).</li>
              <li>- `itemsPerPage`: The number of items to display per page (5).</li>
              <li>- `currentPage`: The current active page controlled by state.</li>
              <li>- `onPageChange`: A callback function for handling page changes.</li>
              <li>- `activeButtonColor`: Sets the color of the active page button to "red."</li>
              <li>- `hoverButtonColor`: Sets the color of the hover state of buttons to "yellow."</li>
              <li>- `width`: Sets the width of the pagination component to "250px."</li>
              <li>- `height`: Sets the height of the pagination component to "30px."</li>
            </ul>
          </ul>
          
        </div>

        {/* Variant 2 */}
        <div>
          <h3>Example 2</h3>
          <PaginationTable
            totalItems={200}
            itemsPerPage={20}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            activeButtonColor="purple"
            hoverButtonColor="orange"
            height="50px"
          />
                    <p>
            Description: Variant 2 of the PaginationTable component provides pagination for a total of 200 items with 20 items per page.<br/>  It customizes the button colors, width, and height for a different look.
          </p>
          <ul>
            <li>Props Used:</li>
            <ul>
              <li>- `totalItems`: The total number of items to paginate (200).</li>
              <li>- `itemsPerPage`: The number of items to display per page (20).</li>
              <li>- `currentPage`: The current active page controlled by state.</li>
              <li>- `onPageChange`: A callback function for handling page changes.</li>
              <li>- `activeButtonColor`: Sets the color of the active page button to "purple."</li>
              <li>- `hoverButtonColor`: Sets the color of the hover state of buttons to "orange."</li>
              <li>- `width`: Sets the width of the pagination component to "full"</li>
              <li>- `height`: Sets the height of the pagination component to "50px."</li>
            </ul>
          </ul>
        </div>
      </div>

      {/* Add more variants as needed */}
    </section>
  );
}

export default PaginationTableVariants;
