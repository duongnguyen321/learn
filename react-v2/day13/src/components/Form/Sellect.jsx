import React, { useId } from "react";

export default function Sellect({ name, label, data }) {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} defaultValue={data.value}>
        {data.map((option) => {
          if (option.isSelected === true) {
            return (
              <option key={option.value} selected={`selected`} defaultValue={option.value}>
                {option.name}
              </option>
            );
          }
          return <option key={option.value} defaultValue={option.value}>{option.name}</option>;
        })}
      </select>
    </>
  );
}
