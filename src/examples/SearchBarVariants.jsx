import React from "react";
import SearchBar from "../components/SearchBar"; // Replace with the actual import path

function SearchBarVariants() {
  const handleSearch = (value) => {
    console.log(`Searching for: ${value}`);
  };

  return (
    <section className="border pb-10">
      <h2 className="text-3xl text-center py-5 font-bold">SearchBar Variants</h2>
      <div className="w-full flex gap-2">
        {/* Default Variant */}
        <div className="flex-1">
          <h3>Default Variant</h3>
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Variant 1 */}
        <div  className="flex-1">
          <h3>Variant 1</h3>
          <SearchBar
            id="searchbar1"
            onSearch={handleSearch}
            width="200px"
            height="40px"
            iconColor="blue"
            borderColor="gray"
            inputTextColor="black"
            backgroundColor="white"
            placeHolder="Search Variant 1"
          />
        </div>

        {/* Variant 2 */}
        <div  className="flex-1">
          <h3>Variant 2</h3>
          <SearchBar
            id="searchbar2"
            onSearch={handleSearch}
            width="300px"
            height="50px"
            iconColor="green"
            borderColor="red"
            inputTextColor="white"
            backgroundColor="lightblue"
            placeHolder="Search Variant 2"
          />
        </div>

        {/* Add more variants as needed */}
      </div>
    </section>
  );
}

export default SearchBarVariants;
