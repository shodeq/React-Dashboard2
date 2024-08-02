import TableRow from './TableRow';

const tableData = [
    { name: "Lian", lastName: "Smith", phone: "622322662", email: "jonsmith@mail.com" },
    { name: "Emma", lastName: "Johnson", phone: "622322662", email: "jonsmith@mail.com" },
    { name: "Oliver", lastName: "Williams", phone: "622322662", email: "jonsmith@mail.com" },
    { name: "Isabella", lastName: "Brown", phone: "622322662", email: "jonsmith@mail.com" },
    { name: "Lian", lastName: "Smith", phone: "622322662", email: "jonsmith@mail.com" },
    { name: "Emma", lastName: "Johnson", phone: "622322662", email: "jonsmith@mail.com" },
    { name: "Oliver", lastName: "Williams", phone: "622322662", email: "jonsmith@mail.com" },
    { name: "Isabella", lastName: "Brown", phone: "622322662", email: "jonsmith@mail.com" },
];

const TableData = () => (
    <tbody className="text-gray-700">
        {tableData.map((data, index) => (
            <TableRow
                key={index}
                name={data.name}
                lastName={data.lastName}
                phone={data.phone}
                email={data.email}
                isEven={index % 2 === 0}
            />
        ))}
    </tbody>
);

export default TableData;
