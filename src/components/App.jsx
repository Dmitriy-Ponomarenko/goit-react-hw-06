import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import css from "./App.module.css";

const App = () => {
  return (
    <div>
      <div className={css.title}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="73"
          height="92"
          viewBox="0 0 73 92"
          fill="none"
        >
          <path
            d="M42.3333 5.5L9.66667 5.5C4.8963 5.5 1 9.24262 1 13.8947L1 73.1053C1 77.7574 4.8963 81.5 9.66667 81.5H42.3332C47.1036 81.5 50.9999 77.7574 50.9999 73.1053L51 13.8948C51 9.24263 47.1037 5.5 42.3333 5.5Z"
            stroke="#0B0B0B"
            strokeLinecap="round"
          />
          <path
            d="M38.0029 68.6233H14M41 8.00002H11C6.50977 7.49578 3.16833 10.4268 3.45833 15.0417L3.45833 72.5C3.37372 76.8733 6.74447 79.3672 11 79.1459L41.5 79.5C45.8348 79.1646 48.8775 76.3362 48.7083 72.5V15.0417C48.9315 10.3126 45.3814 7.45357 41 8.00002Z"
            stroke="#5B53C4"
            strokeWidth="4.1"
            strokeLinecap="round"
          />
          <rect
            x="11.5"
            y="66.5"
            width="28.5"
            height="4.5"
            rx="2.25"
            stroke="#0B0B0B"
          />
          <path
            d="M11.6667 9.5L40.3333 9.5C44.009 9.5 47 12.5216 47 16.2632L46.9999 70.7369C46.9999 74.4784 44.0089 77.5 40.3333 77.5H11.6667C7.99105 77.5 5 74.4784 5 70.7368L5 16.2632C5 12.5216 7.99105 9.5 11.6667 9.5Z"
            stroke="#0B0B0B"
          />
        </svg>
        <h1 className={css.titleText}>Phonebook</h1>
      </div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
