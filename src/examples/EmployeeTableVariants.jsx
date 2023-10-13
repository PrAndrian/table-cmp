import EmployeeTable from "../components/EmployeeTable"; // Replace with the actual import path

function EmployeeTableVariants() {
  return (
    <section>
      <h2 className="text-center text-3xl font-bold py-5">EmployeeTable Variants</h2>
      <div className="flex gap-2 px-2">

        {/* Default Variant */}
        <div className="flex-1">
          <h3>Default Variant</h3>
          <EmployeeTable 
              headColumns={[
                  { label: "First Name", value: "firstName" },
                  { label: "Last Name", value: "lastName" },
                  { label: "Age", value: "age" },
              ]}
              listEmployees={[
                  { firstName: "John", lastName: "Doe", age: "30" },
                  { firstName: "Jane", lastName: "Smith", age: "25" },
                  // Add more employees as needed
              ]}
          />
          <p>
            Description: This is the default variant of the EmployeeTable component. It displays a list of employees with default styling.
            <ul>
              <li>Props Used:</li>
              <ul>
                <li>- `headColumns`: An array of column definitions, specifying the label and value for each column.</li>
                <li>- `listEmployees`: An array of employee data.</li>
              </ul>
            </ul>
          </p>
        </div>

        {/* Variant 1 */}
        <div className="flex-1">
          <h3>Example 1</h3>
          <EmployeeTable
            listEmployees={[
              { firstName: "John", lastName: "Doe", age: "30" },
              { firstName: "Jane", lastName: "Smith", age: "25 "},
              // Add more employees as needed
            ]}
            headerBgColor="lightblue"
            sortedColumnColor="green"
            headColumns={[
              { label: "First Name", value: "firstName" },
              { label: "Last Name", value: "lastName" },
              { label: "Age", value: "age" },
            ]}
            minWidth="250px"
            height="400px"
            bodyTextColor="black"
            bodyColor="white"
          />
          <p>
            Description: Variant 1 of the EmployeeTable component features custom styling with a light blue header background and green color for the sorted column. It also adjusts the table's minimum width, height, text color, and background color.
            <ul>
              <li>Props Used:</li>
              <ul>
                <li>- `headColumns`: An array of column definitions, specifying the label and value for each column.</li>
                <li>- `listEmployees`: An array of employee data.</li>
                <li>- `headerBgColor`: Sets the background color of the header to "lightblue."</li>
                <li>- `sortedColumnColor`: Sets the color for the sorted column to "green."</li>
                <li>- `minWidth`: Sets the minimum width of the table to "250px."</li>
                <li>- `height`: Sets the height of the table to "400px."</li>
                <li>- `bodyTextColor`: Sets the text color in the table body to "black."</li>
                <li>- `bodyColor`: Sets the background color in the table body to "white."</li>
              </ul>
            </ul>
          </p>
        </div>

        {/* Variant 2 */}
        <div className="flex-1">
          <h3>Example 2</h3>
          <EmployeeTable
            listEmployees={[
              { firstName: "Alice", lastName: "Johnson", age: "28" },
              { firstName: "Bob", lastName: "Brown", age: "35" },
              // Add more employees as needed
            ]}
            headerBgColor="lightpink"
            sortedColumnColor="purple"
            headColumns={[
              { label: "First Name", value: "firstName" },
              { label: "Last Name", value: "lastName" },
              { label: "Age", value: "age" },
            ]}
            minWidth="300px"
            height="350px"
            bodyTextColor="white"
            bodyColor="black"
          />
          <p>
            Description: Variant 2 of the EmployeeTable component features a different set of employee data with a light pink header background, purple color for the sorted column, and custom width, height, text color, and background color.
            <ul>
              <li>Props Used:</li>
              <ul>
                <li>- `headColumns`: An array of column definitions, specifying the label and value for each column.</li>
                <li>- `listEmployees`: An array of employee data.</li>
                <li>- `headerBgColor`: Sets the background color of the header to "lightpink."</li>
                <li>- `sortedColumnColor`: Sets the color for the sorted column to "purple."</li>
                <li>- `minWidth`: Sets the minimum width of the table to "300px."</li>
                <li>- `height`: Sets the height of the table to "350px."</li>
                <li>- `bodyTextColor`: Sets the text color in the table body to "white."</li>
                <li>- `bodyColor`: Sets the background color in the table body to "black."</li>
              </ul>
            </ul>
          </p>
        </div>

        {/* Add more variants as needed */}
      </div>
    </section>
  );
}

export default EmployeeTableVariants;
