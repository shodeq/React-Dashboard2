import { FaCheck, FaPlus } from "react-icons/fa";
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';

export default function Charts() {
    const barData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const lineData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
            },
        ],
    };

    return (
        <main className="w-full flex-grow">
            <div className="flex flex-wrap mt-6">
                <div className="w-full lg:w-1/2 pr-0 lg:pr-2 mb-12 lg:mb-0">
                    <p className="text-xl pb-3 flex items-center">
                    <FaPlus className="mr-3" /> Monthly Reports
                    </p>
                    <div className="p-6 bg-white">
                        <Bar data={barData} />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 pl-0 lg:pl-2">
                    <p className="text-xl pb-3 flex items-center">
                    <FaCheck className="mr-3" /> Resolved Reports
                    </p>
                    <div className="p-6 bg-white">
                        <Line data={lineData} />
                    </div>
                </div>
            </div>
        </main>
    )
}