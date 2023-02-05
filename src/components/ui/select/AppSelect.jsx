import React from 'react'

const AppSelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select
        name="sort"
        id="sort1"
        value={value}
        onChange={event => onChange(event.target.value)}
    >
        <option disabled value="">{defaultValue}</option>
        {
            options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )
        }
    </select>
  )
}

export default AppSelect
