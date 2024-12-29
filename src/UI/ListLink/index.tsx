import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];

}

export const ListLink = ({ options }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={styles.selectContainer}>
      <div className={styles.selectBox} onClick={toggleDropdown}>
        <span>MENU</span>
        <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className={styles.optionsList}>
          {options.map((option) => (
            <div key={option.value} className={styles.option} >
              <Link to={option.value}>
                {option.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};