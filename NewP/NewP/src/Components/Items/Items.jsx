import React, { useState, useEffect } from 'react';
import './items.css';

const Items = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState(''); // Track search input
    const itemsPerPage = 7;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:9000/');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="loading">Loading items...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    // Filter data based on search query
    const filteredData = data.filter((item) =>
        item.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // Calculate the current items to display
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate total pages for filtered data
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value); // Update search query
        setCurrentPage(1); // Reset to first page
    };

    return (
        <>
            <div className="SearchBar">
                <input
                    type="text"
                    placeholder="Search for items"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="ItemGridC">
                {currentItems.map((item) => (
                    <div key={item.id}>
                        <h3>{item.Name || 'No Name'}</h3>
                        <img
                            src={item.Image || 'default-image.jpg'}
                            alt={item.Name || 'No Name'}
                        />
                    </div>
                ))}
            </div>
            <div>
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span> Page {currentPage} of {totalPages} </span>
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default Items;
