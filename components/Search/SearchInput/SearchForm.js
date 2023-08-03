export default function SearchForm({ searchTerm, onSearch }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formElements = event.target.elements;
    onSearch(formElements.searchTerm.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Search term:</label>
        <input />
        <button>
          <span>🔍</span> Search
        </button>
      </form>
      <h2>
        {searchTerm
          ? `You searched for "${searchTerm}"`
          : "Please search for a keyword"}
      </h2>
    </>
  );
}
