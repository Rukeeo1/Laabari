import React from 'react';

function SearchForm() {
  return (
    <>
      <div class="row">
        <div class="col " style={{height:"20vh", background:"#f1f1f1"}}>
          <form class="example" style={{marginTop:"20px", maxWidth:"300px"}}>
            <input
              class="input-for-search"
              type="text"
              placeholder="Search.."
              name="search2"
            />
            <button type="submit">
              <i class="fa fa-search" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SearchForm;