import React,{useState} from 'react'

function Form (props) {
  const [name, setName] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    if (!name) {
      return;
    }
    props.onSubmit(name);
    setName('')
  }
  function handleChange (event) {
    const value = event.target.value;
    setName(value)
    console.log(value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        onChange={handleChange}
        value={name}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  )
}

export default Form;