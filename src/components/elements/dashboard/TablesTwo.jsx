import TablesBody from "./TablesBody";

export default function TablesTwo() {
    return (
        <div className="bg-white overflow-auto">
        <table className="text-left w-full border-collapse">
            <thead>
                <tr>
                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Name</th>
                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Last Name</th>
                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Phone</th>
                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Email</th>
                </tr>
            </thead>
            <TablesBody>
                <TablesBody.Row2 name="Lian" lastName="Smith" phone="622322662" email="jonsmith@mail.com" />
                <TablesBody.Row2 name="Emma" lastName="Johnson" phone="622322662" email="jonsmith@mail.com" />
                <TablesBody.Row2 name="Oliver" lastName="Williams" phone="622322662" email="jonsmith@mail.com" />
                <TablesBody.Row2 name="Isabella" lastName="Brown" phone="622322662" email="jonsmith@mail.com" />
            </TablesBody>
        </table>
    </div>
    )
}
