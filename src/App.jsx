import React, {useState} from "react"
import './styles/App.css'
// import Counter from "./components/11111/Counter"
// import ClassCounter from "./components/11111/ClassCounter"
// import InputText from "./components/11111/InputText"
import PostsList from "./components/PostsList"
import PostForm from "./components/PostForm"
import AppSelect from "./components/ui/select/AppSelect"
import AppInput from "./components/ui/input/AppInput"

const POSTS = [
    {
        id: 1,
        title: 'aa',
        description: 'zz'
    },
    {
        id: 2,
        title: 'bb',
        description: 'yy'
    },
    {
        id: 3,
        title: 'cc',
        description: 'xx'
    },
]

function App() {
    const [posts, setPosts] = useState(POSTS)
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const sortedPosts = getSortedPosts()


    function getSortedPosts() {
        console.log('getSortedPosts');
        if (selectedSort) return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
        return posts
    }
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const removePost = (post) => {
        console.log('remove', post.id)
        setPosts(posts.filter(item => item.id !== post.id))
    }
    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }

    return (
        <div className="app">
            {/* <div className="first-components">
                <InputText></InputText>
                <div className="first-components__counters">
                    <Counter></Counter>
                    <ClassCounter></ClassCounter>
                </div>
            </div>
            <hr /> */}
            {/* ========================== */}
            <PostForm create={createPost} />
            <hr />
            <AppInput
                placeholder={'Поиск...'}
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
            />
            <AppSelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue={'Сортировка:'}
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'description', name: 'По описанию'}
                ]}
            />
            {
                posts.length
                    ? <PostsList remove={removePost} posts={sortedPosts} title={'JavaScript'} />
                    : <h2 style={{textAlign: 'center'}}>Посты не найдены!</h2>
            }
        </div>
    )
}

export default App
