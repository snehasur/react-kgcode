import React from "react";

function Form() {
  const [name, setName] = React.useState("");
  const [list, setList] = React.useState([]);
  const submitHandel = (e) => {
    e.preventDefault();
    setList([...list, name]);
    setName("");
    //console.log(name);
  };

  return (
    <>
      <form onSubmit={submitHandel}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <button>click</button>
      </form>
      {list.length === 0 ? (
        <p>your list will be pop out here</p>
      ) : (
        list.map((item, index) => {
          return <div key={index}>{item}</div>;
        })
      )}
    </>
  );
}

export default Form;
