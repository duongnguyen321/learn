const FilterOption = (props) => {
  return (
    <label htmlFor={props.id}>
      <input
        type="radio"
        name="filter"
        id={props.id}
        value={props.id}
        defaultChecked={props.defaultChecked}
      />
      {props.label}
    </label>
  );
};

const Filter = (props) => {
  const handleChange = (e) => {
    props.filterBy(e.target.value);
  };
  return (
    <form onChange={handleChange}>
      <div className="filter">
        <h4>Show</h4>
        <FilterOption
          label="All"
          id="all"
          defaultChecked={props.currentOption == "all"}
        />
        <FilterOption
          label="Done"
          id="done"
          defaultChecked={props.currentOption == "done"}
        />
        <FilterOption
          label="Not Done"
          id="notdone"
          defaultChecked={props.currentOption == "notdone"}
        />
      </div>
    </form>
  );
};
