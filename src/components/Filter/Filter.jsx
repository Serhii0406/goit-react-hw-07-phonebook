import { setFilter } from 'redux/filtersSlice';
import { useDispatch } from 'react-redux';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
      <label className={css.searchLabel}>
        <span className={css.searchTitle}>Find contacts by name</span>
      <input
        className={css.searchInput}
        type="text"
        onChange={event => dispatch(setFilter(event.target.value))}
      />
    </label>
  );
};