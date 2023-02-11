import React from 'react'
import AppSelect from "./ui/select/AppSelect"
import AppInput from "./ui/input/AppInput"

const PostFilter = ({filter, setFilter}) => {
  return (
    <div className='postFilter'>
        <AppInput
            placeholder={'Поиск...'}
            value={filter.query}
            onChange={event => setFilter({...filter, query: event.target.value})}
        />
        <AppSelect
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            defaultValue={'Сортировка:'}
            options={[
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По описанию'}
            ]}
        />
    </div>
  )
}

export default PostFilter
