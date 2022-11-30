import React from 'react';



const MainPage: React.FC = () => {
    return (
        <div >
            <form >
                <input
                    type="text"
                    placeholder="Enter city name"
                />
                <button>Search</button>
            </form>
        </div>
    );
}

export default MainPage;