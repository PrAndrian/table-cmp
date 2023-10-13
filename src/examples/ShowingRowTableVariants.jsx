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
          <h3>Default Example</h3>
          <ShowingRowTable
            itemsPerPage={10}
            onItemsPerPageChange={handleItemsPerPageChange}
            totalItems={100}
            indexOfFirstItem={0}
            indexOfLastItem={9}
          />
          <p>
            Description: This is the default variant of the ShowingRowTable component. It displays information about the currently shown rows and allows selecting the number of items to display per page.
            <ul>
              <li>Props Used:</li>
              <ul>
                <li>- `itemsPerPage`: The number of items to display per page (10).</li>
                <li>- `onItemsPerPageChange`: A callback function for handling the change in items per page.</li>
                <li>- `totalItems`: The total number of items (100).</li>
                <li>- `indexOfFirstItem`: Index of the first shown item (0).</li>
                <li>- `indexOfLastItem`: Index of the last shown item (9).</li>
              </ul>
            </ul>
          </p>
        </div>

        {/* Variant 1 */}
        <div>
          <h3>Example 1</h3>
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
          <p>
            Description: Variant 1 of the ShowingRowTable component provides information about the currently shown rows and allows selecting the number of items to display per page. It features customization options for width, height, label color, select box border color, select box background color, select box text color, and text color for the shown rows.
            <ul>
              <li>Props Used:</li>
              <ul>
                <li>- `itemsPerPage`: The number of items to display per page (25).</li>
                <li>- `onItemsPerPageChange`: A callback function for handling the change in items per page.</li>
                <li>- `totalItems`: The total number of items (150).</li>
                <li>- `indexOfFirstItem`: Index of the first shown item (25).</li>
                <li>- `indexOfLastItem`: Index of the last shown item (49).</li>
                <li>- `width`: Sets the width of the component to "400px."</li>
                <li>- `height`: Sets the height of the component to "50px."</li>
                <li>- `labelColor`: Sets the color of the label text to "blue."</li>
                <li>- `selectBorderColor`: Sets the border color of the select box to "gray."</li>
                <li>- `selectBackgroundColor`: Sets the background color of the select box to "white."</li>
                <li>- `selectTextColor`: Sets the text color of the select box to "black."</li>
                <li>- `spanTextColor`: Sets the text color for the shown rows to "green."</li>
              </ul>
            </ul>
          </p>
        </div>

        {/* Variant 2 */}
        <div>
          <h3>Example 2</h3>
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
          <p>
            Description: Variant 2 of the ShowingRowTable component displays information about the currently shown rows and allows selecting the number of items to display per page. It offers customizations for width, height, label color, select box border color, select box background color, select box text color, and text color for the shown rows.
            <ul>
              <li>Props Used:</li>
              <ul>
                <li>- `itemsPerPage`: The number of items to display per page (50).</li>
                <li>- `onItemsPerPageChange`: A callback function for handling the change in items per page.</li>
                <li>- `totalItems`: The total number of items (200).</li>
                <li>- `indexOfFirstItem`: Index of the first shown item (50).</li>
                <li>- `indexOfLastItem`: Index of the last shown item (99).</li>
                <li>- `width`: Sets the width of the component to "300px."</li>
                <li>- `height`: Sets the height of the component to "40px."</li>
                <li>- `labelColor`: Sets the color of the label text to "red."</li>
                <li>- `selectBorderColor`: Sets the border color of the select box to "black."</li>
                <li>- `selectBackgroundColor`: Sets the background color of the select box to "lightblue."</li>
                <li>- `selectTextColor`: Sets the text color of the select box to "white."</li>
                <li>- `spanTextColor`: Sets the text color for the shown rows to "purple."</li>
              </ul>
            </ul>
          </p>
        </div>

        {/* Add more variants as needed */}
      </div>
    </section>
  );
}

export default ShowingRowTableVariants;
