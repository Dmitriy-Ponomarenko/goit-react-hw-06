import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../../redux/selectors";
import { filterContact } from "../../redux/filterSlice";

const SearchBox = () => {
  const filterId = useId();
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => dispatch(filterContact(event.target.value));

  return (
    <div className={css.filterWrapper}>
      <label htmlFor={filterId} className={css.label}>
        Find contacts by name
      </label>
      <div className={css.inputWrapper}>
        <input
          type="text"
          value={filter}
          id={filterId}
          onChange={handleChange}
          className={css.input}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={css.svg}
        >
          <path
            d="M18.75 18.75L15.4404 15.4464M15.4404 15.4464C16.5227 14.3656 17.1923 12.8716 17.1923 11.2212C17.1923 7.92338 14.5189 5.25 11.2212 5.25C7.92338 5.25 5.25 7.92338 5.25 11.2212C5.25 14.5189 7.92338 17.1923 11.2212 17.1923C12.8685 17.1923 14.36 16.5252 15.4404 15.4464Z"
            stroke="#0B0B0B"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBox;
