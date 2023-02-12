import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selector';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChange = query => {
    dispatch(addFilter(query.toLowerCase()));
  };
  const filter = useSelector(selectFilter);
  return (
      <label className={css.searchLabel}>
        <span className={css.searchTitle}>Find contacts by name</span>
      <input
        className={css.searchInput}
        placeholder=""
        name="filterContact"
        value={filter}
        id="findInputId"
        type="text"
        onChange={e => onFilterChange(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
    </label>
  );
};