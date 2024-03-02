import React,{useRef} from 'react'

function FilterButton (props) {
  const isa = useRef(props);
  console.log(isa.current.isPressed)
  function changeType () {
    props.setFilter(props.name);
  }
  return (
    <button onClick={changeType}
      type="button"
      className='btn toggle-btn'
      aria-pressed="true">
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  )
}

export default FilterButton;