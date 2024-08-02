import TableData from "../../elements/dashboard/TableData";
import TableHeader from "../../elements/dashboard/TableHeader";

export default function Table() {
    return (
        <table className="min-w-full bg-white">
            <TableHeader />
            <TableData />
        </table>
    )
}