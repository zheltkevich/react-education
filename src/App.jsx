import React, {useState} from "react"
import './styles/App.css'
import Counter from "./components/11111/Counter"
import ClassCounter from "./components/11111/ClassCounter"
import InputText from "./components/11111/InputText"
import PostsList from "./components/PostsList"
import PostForm from "./components/PostForm"

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

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
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
            <PostForm create={createPost} />
            <PostsList posts={posts} title={'JavaScript'} />
        </div>
    )
}

export default App
