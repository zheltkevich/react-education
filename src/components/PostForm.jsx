import React, {useState} from 'react'
import AppButton from './ui/button/AppButton'
import AppInput from "./ui/input/AppInput"



const PostForm = ({create}) => {

    const [post, setPost] = useState({
        title: '',
        body: '',
    })
    // const inputRef = useRef()
    const addNewPost = (event) => {
        event.preventDefault()

        const newPost = {
            ...post,
            id: Date.now()
        }
        create(newPost)
        setPost({
            title: '',
            body: ''
        })
    }
  return (
    <form action="">
                {/* Управляемый компонент */}
                <AppInput
                    value={post.title}
                    onChange={event => setPost({...post, title: event.target.value})}
                    type={'text'}
                    placeholder={'Название поста'}
                />
                <AppInput
                    value={post.body}
                    onChange={event => setPost({...post, body: event.target.value})}
                    type={'text'}
                    placeholder={'Описание поста'}
                />
                {/* Неуправляемый/Неконтролируемый компонент */}
                {/* <AppInput
                    ref={inputRef}
                    type={'text'}
                    placeholder={'Пример неуправляемого компонента'}
                /> */}
                <AppButton type={'submit'} onClick={addNewPost}>Создать пост</AppButton>
            </form>
  )
}

export default PostForm
