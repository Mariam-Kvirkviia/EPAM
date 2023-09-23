import React from "react";
import "./Form.css";
import FormControl from "./FormControl";
import { useState } from "react";

function Form() {
  const colors = {
    " ": "",
    white: "#FFFFFF",
    black: "#000000",
    green: "#00FF00",
    red: "#FF0000",
    blue: "#0000FF",
    yellow: "#FFFF00",
  };
  const namesRadio = ["Larry", "Moe", "Curly"];
  const nameSauces = ["Ketchup", "Mustard", "Mayonnaise", "Guacamole"];
  let startObj = {
    stooge: "Larry",
    employed: false,
  };
  const validationObj = {
    firstName: true,
    lastName: true,
    age: true,
    notes: true,
  };
  let [isValid, setIsValid] = useState(validationObj);
  let [disabled, setDisabled] = useState(true);
  let [obj, setObj] = useState(startObj);

  function handleChanges(event) {
    const e = event.target.name;
    const value = event.target.value;
    setDisabled(false);

    switch (e) {
      case "firstName": {
        setObj({ ...obj, firstName: value });
        if (!value) makeDisabled("firstName");
        break;
      }
      case "lastName": {
        setObj({ ...obj, lastName: value });
        if (!value) makeDisabled("lastName");
        break;
      }
      case "age": {
        setObj({ ...obj, age: value });
        if (!value) makeDisabled("age");
        break;
      }
      case "employed": {
        //bad practice
        obj.employed = event.target.checked;
        setObj({ ...obj, employed: event.target.checked });
        if (!event.target.checked) makeDisabled("employed");
        break;
      }
      case "stooge": {
        //bad practice
        obj.stooge = value;
        setObj({ ...obj, stooge: value });
        if (value === "Larry") makeDisabled("stooge");
        break;
      }
      case "sauces": {
        if (obj.sauces) {
          if (event.target.checked) {
            setObj({ ...obj, sauces: [...obj.sauces, value] });
            return;
          }
          if (!event.target.checked) {
            //bad practice
            obj.sauces = obj.sauces.filter((el) => el !== value);
            setObj({ ...obj, sauces: [...obj.sauces] });
            if (obj.sauces.length === 0) {
              makeDisabled("sauces");
            }
          }
        } else {
          setObj({ ...obj, sauces: [value] });
        }
        break;
      }
      case "notes": {
        setObj({ ...obj, notes: value });
        if (!value) makeDisabled("notes");
        break;
      }
      case "Favorite Color": {
        if (colors[value]) {
          setObj({ ...obj, favoriteColor: colors[value] });
        } else {
          makeDisabled("favoriteColor");
        }
        break;
      }

      default:
    }
  }
  function makeDisabled(del) {
    if (del !== "employed" && del !== "stooge") {
      delete obj[del];
      setObj({ ...obj });
    }

    if (JSON.stringify(obj) === JSON.stringify(startObj)) {
      setDisabled(true);
      setIsValid({ ...validationObj });
    }
  }
  function resetForm() {
    setDisabled(true);
    setIsValid({ ...validationObj });
    setObj(startObj);
  }
  function validation() {
    const regexName = /^[a-zA-Z\s]+$/;
    const regexAge = /^[0-9]+$/;
    const firstName = obj.firstName ? obj.firstName.match(regexName) : false;
    const lastName = obj.lastName ? obj.lastName.match(regexName) : false;
    const age = obj.age ? obj.age.match(regexAge) : false;
    const notes = obj.notes ? obj.notes.length <= 100 : false;
    //bad practice
    isValid.firstName = firstName;
    isValid.lastName = lastName;
    isValid.age = age;
    isValid.notes = notes;
    setIsValid({ firstName, lastName, age, notes });
  }
  function submitForm(e) {
    e.preventDefault();
    validation();

    if (Object.values(isValid).every((el) => el === true)) {
      alert(JSON.stringify(obj, null, 4));
    }
  }
  return (
    <div className="wrapper">
      <form onSubmit={submitForm}>
        <FormControl label="firstName" title="First name">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={obj.firstName ? obj.firstName : ""}
            className={isValid.firstName ? "" : "invalid"}
            onChange={handleChanges}
          />
        </FormControl>

        <div className="form-item">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={obj.lastName ? obj.lastName : ""}
            className={isValid.lastName ? "" : "invalid"}
            onChange={handleChanges}
          />
        </div>
        <div className="form-item">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={obj.age ? obj.age : ""}
            className={isValid.age ? "" : "invalid"}
            onChange={handleChanges}
          />
        </div>
        <FormControl label="employed" title="Employed">
          <input
            type="checkbox"
            name="employed"
            checked={obj.employed}
            onChange={handleChanges}
          />
        </FormControl>
        <FormControl label="Favorite Color">
          <select name="Favorite Color" onChange={handleChanges}>
            {Object.keys(colors).map((color) => {
              return (
                <option value={color} key={color}>
                  {color[0].toLocaleUpperCase() + color.slice(1, color.length)}
                </option>
              );
            })}
          </select>
        </FormControl>

        <div className="item-group">
          <label>Sauces</label>
          <div>
            {nameSauces.map((sauce) => {
              return (
                <div key={sauce}>
                  <input
                    type="checkbox"
                    name="sauces"
                    value={sauce}
                    checked={obj.sauces ? obj.sauces.includes(sauce) : false}
                    onChange={handleChanges}
                  />
                  <label htmlFor={sauce}>{sauce}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="item-group">
          <p>Best Stooge</p>
          <div>
            {namesRadio.map((name) => {
              return (
                <div key={name}>
                  <input
                    type="radio"
                    name="stooge"
                    value={name}
                    checked={obj.stooge === name}
                    onChange={handleChanges}
                  />
                  <label htmlFor={name}>{name}</label>
                </div>
              );
            })}
          </div>
        </div>
        <FormControl label="notes" title="Notes">
          <textarea
            name="notes"
            id=""
            rows="1"
            placeholder="Notes"
            value={obj.notes ? obj.notes : ""}
            className={isValid.notes ? "" : "invalid"}
            onChange={handleChanges}
          ></textarea>
        </FormControl>
        <div className="buttons">
          <button className="submit" type="submit" disabled={disabled}>
            Submit
          </button>
          <button
            className="reset"
            type="reset"
            onClick={resetForm}
            disabled={disabled}
          >
            Reset
          </button>
        </div>
      </form>
      <div className="content">
        <pre>{JSON.stringify(obj, null, 4)}</pre>
      </div>
    </div>
  );
}
export default Form;
