function Comparison() {
  return (
    <div className='comparson-container'>
      <h1 className='comparson-header'>
        <span className='comparson-header--text'>
          Compare package download counts over time
        </span>
      </h1>
      <form id='search_form' name='searchForm' autoComplete='off'>
        <span className='algolia-autocomplete'>
          <input
            type='text'
            id='search_form_input'
            className='autocomplete aa-input'
            placeholder='Enter github repository...'
            autoComplete='off'
            spellCheck='false'
            role='combobox'
            aria-autocomplete='both'
            aria-expanded='false'
            aria-owns='algolia-autocomplete-listbox-0'
            dir='auto'
          />
        </span>
      </form>
    </div>
  )
}
export default Comparison