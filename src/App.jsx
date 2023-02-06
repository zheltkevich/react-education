import React, {useState, useMemo} from "react"
import './styles/App.css'
// import Counter from "./components/11111/Counter"
// import ClassCounter from "./components/11111/ClassCounter"
// import InputText from "./components/11111/InputText"
import PostsList from "./components/PostsList"
import PostForm from "./components/PostForm"
import PostFilter from "./components/PostFilter"
import AppModal from "./components/ui/modal/AppModal"
import AppButton from "./components/ui/button/AppButton"


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
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)

    const sortedPosts = useMemo(()=> {
        if (filter.sort) return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        return posts
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        console.log('remove', post.id)
        setPosts(posts.filter(item => item.id !== post.id))
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
            <AppButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>Создать пост</AppButton>
            <AppModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </AppModal>
            <hr />
            <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
            <PostsList remove={removePost} posts={sortedAndSearchedPosts} title={'JavaScript'} />
        </div>
    )
}

export default App
