import React, {useState, useRef} from "react"
import './styles/App.css'
import Counter from "./components/11111/Counter"
import ClassCounter from "./components/11111/ClassCounter"
import InputText from "./components/11111/InputText"
import PostsList from "./components/PostsList"
import AppButton from "./components/ui/button/AppButton"
import AppInput from "./components/ui/input/AppInput"

const POSTS = [
    {
        id: 1,
        title: 'Javascript',
        description: 'Javascript - язык программирования'
    },
    {
        id: 2,
        title: 'Javascript 2',
        description: 'Javascript - язык программирования'
    },
    {
        id: 3,
        title: 'Javascript 3',
        description: 'Javascript - язык программирования'
    },
]

function App() {
    const [posts, setPosts] = useState(POSTS)

    const [post, setPost] = useState({
        title: '',
        description: '',
    })
    // const inputRef = useRef()
    const addNewPost = (event) => {
        event.preventDefault()
        setPosts([
            ...posts,
            {
                ...post,
                id: Date.now()
            }
        ])
        setPost({
            title: '',
            description: ''
        })
    }

    return (
        <div className="app">
            <div className="first-components">
                <InputText></InputText>
                <div className="first-components__counters">
                    <Counter></Counter>
                    <ClassCounter></ClassCounter>
                </div>
            </div>
            <hr />
            {/* ========================== */}
            <form action="">
                {/* Управляемый компонент */}
                <AppInput
                    value={post.title}
                    onChange={event => setPost({...post, title: event.target.value})}
                    type={'text'}
                    placeholder={'Название поста'}
                />
                <AppInput
                    value={post.description}
                    onChange={event => setPost({...post, description: event.target.value})}
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
            <PostsList posts={posts} title={'JavaScript'}></PostsList>
        </div>
    )
}

export default App
