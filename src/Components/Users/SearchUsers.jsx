import Button from '../Layout/Button';

const SearchUsers = () => {
  return (
    <section className='search-users'>
      <form>
        <input type='text' className='form-control' placeholder='Search Users...' />
        <Button title='Search' />
      </form>
    </section>
  );
};

export default SearchUsers;
