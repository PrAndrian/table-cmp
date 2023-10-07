import React from "react";
import ShowingRowTable from "../components/ShowingRowTable"; // Replace with the actual import path

function ShowingRowTableVariants() {
  const handleItemsPerPageChange = (selectedItemsPerPage) => {
    console.log(`Items per page changed to: ${selectedItemsPerPage}`);
  };

  return (
    <section className="border pb-10">
      <h2 className="text-3xl font-bold text-center py-5">ShowingRowTable Variants</h2>
      <div className=" flex justify-between px-2">

        {/* Default Variant */}
        <div>
          <h3>Default Variant</h3>
          <ShowingRowTable
            itemsPerPage={10}
            onItemsPerPageChange={handleItemsPerPageChange}
            totalItems={100}
            indexOfFirstItem={0}
            indexOfLastItem={9}
          />
        </div>

        {/* Variant 1 */}
        <div>
          <h3>Variant 1</h3>
          <ShowingRowTable
            itemsPerPage={25}
            onItemsPerPageChange={handleItemsPerPageChange}
            totalItems={150}
            indexOfFirstItem={25}
            indexOfLastItem={49}
            width="400px"
            height="50px"
            labelColor="blue"
            selectBorderColor="gray"
            selectBackgroundColor="white"
            selectTextColor="black"
            spanTextColor="green"
          />
        </div>

        {/* Variant 2 */}
        <div>
          <h3>Variant 2</h3>
          <ShowingRowTable
            itemsPerPage={50}
            onItemsPerPageChange={handleItemsPerPageChange}
            totalItems={200}
            indexOfFirstItem={50}
            indexOfLastItem={99}
            width="300px"
            height="40px"
            labelColor="red"
            selectBorderColor="black"
            selectBackgroundColor="lightblue"
            selectTextColor="white"
            spanTextColor="purple"
          />
        </div>

        {/* Add more variants as needed */}
      </div>
    </section>
  );
}

export default ShowingRowTableVariants;
