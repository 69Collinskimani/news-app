export default function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
    return (
      <div className="flex items-center justify-center gap-4 my-4">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded p-2 w-1/2"
        />
        <button
          onClick={onSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>
    );
  }
  