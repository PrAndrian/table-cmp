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
          <p>
            Description: This is the default variant of the SearchBar component. It provides a simple search input with default styling.
            <ul>
              <li>Props Used:</li>
              <ul>
                <li>- `onSearch`: A callback function to handle search.</li>
              </ul>
            </ul>
          </p>
        </div>

        {/* Variant 1 */}
        <div className="flex-1">
          <h3>Example 1</h3>
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
          <p>
            Description: Variant 1 of the SearchBar component features a customized search input with a blue search icon, gray border, and white background. It has a placeholder text, and the input size is adjusted.
            <ul>
              <li>Props Used:</li>
              <ul>
                <li>- `id`: Sets the ID attribute for the search input ("searchbar1").</li>
                <li>- `onSearch`: A callback function to handle search.</li>
                <li>- `width`: Sets the width of the input to "200px".</li>
                <li>- `height`: Sets the height of the input to "40px".</li>
                <li>- `iconColor`: Sets the color of the search icon to "blue".</li>
                <li>- `borderColor`: Sets the border color to "gray".</li>
                <li>- `inputTextColor`: Sets the text color inside the input to "black".</li>
                <li>- `backgroundColor`: Sets the background color to "white".</li>
                <li>- `placeHolder`: Sets the placeholder text to "Search Variant 1".</li>
              </ul>
            </ul>
          </p>
        </div>

        {/* Variant 2 */}
        <div className="flex-1">
          <h3>Example 2</h3>
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
          <p>
            Description: Variant 2 of the SearchBar component provides a different styled search input with a green search icon, red border, and light blue background. It has a placeholder text, and the input size is adjusted.
            <ul>
              <li>Props Used:</li>
              <ul>
                <li>- `id`: Sets the ID attribute for the search input ("searchbar2").</li>
                <li>- `onSearch`: A callback function to handle search.</li>
                <li>- `width`: Sets the width of the input to "300px".</li>
                <li>- `height`: Sets the height of the input to "50px".</li>
                <li>- `iconColor`: Sets the color of the search icon to "green".</li>
                <li>- `borderColor`: Sets the border color to "red".</li>
                <li>- `inputTextColor`: Sets the text color inside the input to "white".</li>
                <li>- `backgroundColor`: Sets the background color to "lightblue".</li>
                <li>- `placeHolder`: Sets the placeholder text to "Search Variant 2".</li>
              </ul>
            </ul>
          </p>
        </div>

        {/* Add more variants as needed */}
      </div>
    </section>
  );
}

export default SearchBarVariants;
