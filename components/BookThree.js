import bookThreeStyles from "../styles/modules/BookThree.module.css";

// components/BookThree.js
export default function BookThree() {
  return (
    <div className={bookThreeStyles["book-three"]}>
      <div className="book-info">
        <p className="title">the revolt of the public</p>
        <p className="author">Martin Gurri</p>
      </div>
    </div>
  );
}
