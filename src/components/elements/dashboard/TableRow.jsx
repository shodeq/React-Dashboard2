/* eslint-disable react/prop-types */
const TableRow = ({ name, lastName, phone, email, isEven }) => (
    <tr className={isEven ? "bg-gray-200" : ""}>
        <td className="w-1/3 text-left py-3 px-4">{name}</td>
        <td className="w-1/3 text-left py-3 px-4">{lastName}</td>
        <td className="text-left py-3 px-4">
            <a className="hover:text-blue-500" href={`tel:${phone}`}>{phone}</a>
        </td>
        <td className="text-left py-3 px-4">
            <a className="hover:text-blue-500" href={`mailto:${email}`}>{email}</a>
        </td>
    </tr>
);

export default TableRow;
