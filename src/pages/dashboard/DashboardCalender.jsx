/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import "../../index.css";
import Footer from '../../components/fragments/dashboard/Footer';

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const themes = [
    { label: 'Blue', value: 'blue' },
    { label: 'Red', value: 'red' },
    { label: 'Yellow', value: 'yellow' },
    { label: 'Green', value: 'green' },
    { label: 'Purple', value: 'purple' }
];

const Calendar = () => {
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState([]);
    const [eventModalOpen, setEventModalOpen] = useState(false);
    const [eventTitle, setEventTitle] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventTheme, setEventTheme] = useState(themes[0].value);

    const month = date.getMonth();
    const year = date.getFullYear();

    useEffect(() => {
        getNoOfDays();
    }, [date]);

    const getNoOfDays = () => {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const dayOfWeek = new Date(year, month, 1).getDay();
        const blankdaysArray = [];
        for (let i = 1; i <= dayOfWeek; i++) {
            blankdaysArray.push(i);
        }
        setBlankDays(blankdaysArray);
        setNoOfDays([...Array(daysInMonth).keys()].map(i => i + 1));
    };

    const [blankdays, setBlankDays] = useState([]);
    const [noOfDays, setNoOfDays] = useState([]);

    const isToday = (date) => {
        const today = new Date();
        const d = new Date(year, month, date);
        return today.toDateString() === d.toDateString();
    };

    const showEventModal = (date) => {
        setEventDate(new Date(year, month, date).toDateString());
        setEventModalOpen(true);
    };

    const addEvent = () => {
        setEvents([...events, { event_title: eventTitle, event_date: eventDate, event_theme: eventTheme }]);
        setEventTitle('');
        setEventModalOpen(false);
    };

    return (
        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main className="w-full flex-grow p-6">
                <h1 className="text-3xl text-black pb-6">Calendar</h1>
                <div className="w-full">
                    <div className="antialiased sans-serif bg-gray-100">
                        <div className="container py-2">
                            <div className="bg-white rounded-lg shadow overflow-hidden">
                                <div className="flex items-center justify-between py-2 px-6">
                                    <div>
                                        <span className="text-lg font-bold text-gray-800">{MONTH_NAMES[month]}</span>
                                        <span className="ml-1 text-lg text-gray-600 font-normal">{year}</span>
                                    </div>
                                    <div className="border rounded-lg px-1" style={{ paddingTop: '2px' }}>
                                        <button
                                            type="button"
                                            className={`leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center ${month === 0 && 'cursor-not-allowed opacity-25'}`}
                                            disabled={month === 0}
                                            onClick={() => setDate(new Date(year, month - 1))}
                                        >
                                            <svg className="h-6 w-6 text-gray-500 inline-flex leading-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <div className="border-r inline-flex h-6"></div>
                                        <button
                                            type="button"
                                            className={`leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1 ${month === 11 && 'cursor-not-allowed opacity-25'}`}
                                            disabled={month === 11}
                                            onClick={() => setDate(new Date(year, month + 1))}
                                        >
                                            <svg className="h-6 w-6 text-gray-500 inline-flex leading-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="-mx-1 -mb-1">
                                    <div className="flex flex-wrap" style={{ marginBottom: '-40px' }}>
                                        {DAYS.map((day, index) => (
                                            <div key={index} style={{ width: '14.26%' }} className="px-2 py-2">
                                                <div className="text-gray-600 text-sm uppercase tracking-wide font-bold text-center">{day}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap border-t border-l">
                                        {blankdays.map((blankday, index) => (
                                            <div key={index} style={{ width: '14.28%', height: '120px' }} className="text-center border-r border-b px-4 pt-2"></div>
                                        ))}
                                        {noOfDays.map((date, dateIndex) => (
                                            <div key={dateIndex} style={{ width: '14.28%', height: '120px' }} className="px-4 pt-2 border-r border-b relative">
                                                <div
                                                    onClick={() => showEventModal(date)}
                                                    className={`inline-flex w-6 h-6 items-center justify-center cursor-pointer text-center leading-none rounded-full transition ease-in-out duration-100 ${isToday(date) ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-blue-200'}`}
                                                >
                                                    {date}
                                                </div>
                                                <div style={{ height: '80px' }} className="overflow-y-auto mt-1">
                                                    {events.filter(e => new Date(e.event_date).toDateString() === new Date(year, month, date).toDateString()).map((event, index) => (
                                                        <div
                                                            key={index}
                                                            className={`px-2 py-1 rounded-lg mt-1 overflow-hidden border ${event.event_theme === 'blue' ? 'border-blue-200 text-blue-800 bg-blue-100' :
                                                                    event.event_theme === 'red' ? 'border-red-200 text-red-800 bg-red-100' :
                                                                        event.event_theme === 'yellow' ? 'border-yellow-200 text-yellow-800 bg-yellow-100' :
                                                                            event.event_theme === 'green' ? 'border-green-200 text-green-800 bg-green-100' :
                                                                                'border-purple-200 text-purple-800 bg-purple-100'
                                                                }`}
                                                        >
                                                            <p className="text-sm truncate leading-tight">{event.event_title}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {eventModalOpen && (
                            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }} className="fixed z-40 top-0 right-0 left-0 bottom-0 h-full w-full">
                                <div className="p-4 max-w-xl mx-auto relative left-0 right-0 overflow-hidden mt-24">
                                    <div
                                        className="shadow absolute right-0 top-0 w-10 h-10 rounded-full bg-white text-gray-500 hover:text-gray-800 inline-flex items-center justify-center cursor-pointer"
                                        onClick={() => setEventModalOpen(false)}
                                    >
                                        <svg className="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
                                        </svg>
                                    </div>

                                    <div className="shadow w-full rounded-lg bg-white overflow-hidden block p-8">
                                        <h2 className="font-bold text-2xl mb-6 text-gray-800 border-b pb-2">Add Event Details</h2>

                                        <div className="mb-4">
                                            <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">Event title</label>
                                            <input
                                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                                type="text"
                                                value={eventTitle}
                                                onChange={(e) => setEventTitle(e.target.value)}
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">Event date</label>
                                            <input
                                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                                type="text"
                                                value={eventDate}
                                                readOnly
                                            />
                                        </div>

                                        <div className="inline-block w-64 mb-4">
                                            <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">Select a theme</label>
                                            <div className="relative">
                                                <select
                                                    onChange={(e) => setEventTheme(e.target.value)}
                                                    value={eventTheme}
                                                    className="block appearance-none w-full bg-gray-200 border-2 border-gray-200 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500 text-gray-700"
                                                >
                                                    {themes.map((theme, index) => (
                                                        <option key={index} value={theme.value}>{theme.label}</option>
                                                    ))}
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 text-right">
                                            <button
                                                type="button"
                                                className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-lg shadow-sm mr-2"
                                                onClick={() => setEventModalOpen(false)}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="button"
                                                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded-lg shadow-sm"
                                                onClick={addEvent}
                                            >
                                                Save Event
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Calendar;
