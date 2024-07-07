import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactSlice";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(deleteContact(id));

  return (
    <div className={css.wrapper}>
      <div className={css.user}>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className={css.icon}
          >
            <path
              d="M20.3838 10.8846C20.3838 13.3062 18.4208 15.2692 15.9992 15.2692C13.5777 15.2692 11.6146 13.3062 11.6146 10.8846C11.6146 8.46306 13.5777 6.5 15.9992 6.5C18.4208 6.5 20.3838 8.46306 20.3838 10.8846Z"
              stroke="#0B0B0B"
              strokeWidth="2"
            />
            <path
              d="M15.9992 25.5C20.3425 25.5 22.8449 24.3797 24.0057 23.6586C24.5488 23.3212 24.8166 22.6999 24.7613 22.0563C24.6859 21.1773 24.3788 20.2994 24.0661 19.6031C23.6555 18.6888 22.7051 18.1923 21.7028 18.1923H10.2956C9.29334 18.1923 8.34293 18.6888 7.93236 19.6031C7.61966 20.2994 7.31254 21.1773 7.2371 22.0563C7.18186 22.6999 7.44958 23.3212 7.99275 23.6586C9.15355 24.3797 11.6559 25.5 15.9992 25.5Z"
              stroke="#0B0B0B"
              strokeWidth="2"
            />
          </svg>
          {name}
        </p>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className={css.icon}
          >
            <path
              d="M13.8981 10.3545L11.0262 7.48268C10.7596 7.2161 10.3169 7.22667 10.0373 7.50629L8.03753 9.50602C5.50609 12.0375 9.32812 16.8721 12.2158 19.7598C15.0862 22.6301 19.9623 26.4937 22.4938 23.9623L24.4935 21.9625C24.7731 21.6829 24.7837 21.2401 24.5171 20.9736L21.6453 18.1017C21.3787 17.8351 20.9359 17.8457 20.6563 18.1253L18.6566 20.125C18.6566 20.125 17.6931 20.1232 14.7594 17.2404C11.8257 14.3577 11.8748 13.3432 11.8748 13.3432L13.8745 11.3435C14.1541 11.0639 14.1647 10.6211 13.8981 10.3545Z"
              stroke="#0B0B0B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {number}
        </p>
      </div>
      <button onClick={handleClick} className={css.button}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className={css.svg}
        >
          <path
            d="M16 21.8462L16 13.0769M6.5 9.42308H8.69231M25.5 9.42308H23.3077M19.6538 9.42308H12.3462M19.6538 9.42308V7.96154C19.6538 7.15435 18.9995 6.5 18.1923 6.5H13.8077C13.0005 6.5 12.3462 7.15435 12.3462 7.96154V9.42308M19.6538 9.42308H23.3077M12.3462 9.42308H8.69231M23.3077 9.42308V22.5769C23.3077 24.1913 21.999 25.5 20.3846 25.5H11.6154C10.001 25.5 8.69231 24.1913 8.69231 22.5769V9.42308"
            stroke="#0b0b0b"
            strokeWidth="2px"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Contact;
