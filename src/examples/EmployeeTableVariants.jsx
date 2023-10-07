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
        </div>

        {/* Variant 1 */}
        <div className="flex-1">
          <h3>Variant 1</h3>
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
        </div>

        {/* Variant 2 */}
        <div className="flex-1">
          <h3>Variant 2</h3>
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
        </div>

        {/* Add more variants as needed */}
      </div>
    </section>
  );
}

export default EmployeeTableVariants;
