/* eslint-disable react/prop-types */
const TablesBody = ({ children }) => {
    return (
        <tbody className="text-gray-700">
            {children}
        </tbody>
    )
}

const Row1 = ({ name, lastName, phone, email }) => {
    return (
        <tr>
            <td className="w-1/3 text-left py-3 px-4">{name}</td>
            <td className="w-1/3 text-left py-3 px-4">{lastName}</td>
            <td className="text-left py-3 px-4">
                <a className="hover:text-blue-500" href={`tel:${phone}`}>{phone}</a>
            </td>
            <td className="text-left py-3 px-4">
                <a className="hover:text-blue-500" href={`mailto:${email}`}>{email}</a>
            </td>
        </tr>
    )
}

const Row2 = ({ name, lastName, phone, email }) => {
    return (
        <tr className="hover:bg-grey-lighter">
            <td className="py-4 px-6 border-b border-grey-light">{name}</td>
            <td className="py-4 px-6 border-b border-grey-light">{lastName}</td>
            <td className="py-4 px-6 border-b border-grey-light">{phone}</td>
            <td className="py-4 px-6 border-b border-grey-light">{email}</td>
        </tr>
    )
}

const Row3 = ({ user, role, created, status }) => {
    return (
        <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10">
                    <img className="w-full h-full rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" alt={user} />
                </div>
                <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">{user}</p>
                </div>
            </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">{role}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">{created}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <span className={`relative inline-block px-3 py-1 font-semibold leading-tight ${status === "Active" ? "text-green-900" : status === "Suspended" ? "text-orange-900" : "text-red-900"}`}>
                <span aria-hidden className={`absolute inset-0 opacity-50 rounded-full ${status === "Active" ? "bg-green-200" : status === "Suspended" ? "bg-orange-200" : "bg-red-200"}`}></span>
                <span className="relative">{status}</span>
            </span>
        </td>
    </tr>
    )
}

TablesBody.Row1 = Row1;
TablesBody.Row2 = Row2;
TablesBody.Row3 = Row3;

export default TablesBody;
