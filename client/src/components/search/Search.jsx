import './Search.css'

export default function Search({ onSearch }) {
    const changeHandler = (e) => {
        onSearch(e.target.value)
    }

    return (
        <>
            <div className="search-form-container">
                <div className="centered-container">
                    <form className="search-form" action="#" method="GET">
                        <input
                            type="text"
                            name="search"
                            className="search-input"
                            placeholder="Search for products titles"
                            onChange={changeHandler}
                        />
                        <button type="submit" className="search-button">
                            <span>🔍</span>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}