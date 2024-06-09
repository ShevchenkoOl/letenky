import style from "./textFields.module.scss";

const TextFields = ({label, ...props}) => {
    return ( 
   <label className={style.label}>
        {label} 
        <input
        //  onChange={handleChange}
          className={style.label}
          {...props}
        />
      </label>
    )
};

export default TextFields;