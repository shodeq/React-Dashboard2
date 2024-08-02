import TablesBody from "./TablesBody";

export default function TablesThree() {
    return (
        <div className="bg-white overflow-auto">
        <table className="min-w-full leading-normal">
            <thead>
                <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">User</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Role</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Created at</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                </tr>
            </thead>
            <TablesBody>
                <TablesBody.Row3 user="Vera Carpenter" role="Admin" created="Jan 21, 2020" status="Active" />
                <TablesBody.Row3 user="Blake Bowman" role="Editor" created="Jan 01, 2020" status="Active" />
                <TablesBody.Row3 user="Dana Moore" role="Editor" created="Jan 10, 2020" status="Suspended" />
                <TablesBody.Row3 user="Alonzo Cox" role="Admin" created="Jan 18, 2020" status="Inactive" />
            </TablesBody>
        </table>
    </div>
    )
}
