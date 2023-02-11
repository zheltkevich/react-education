import React, {useState, useEffect} from "react"
import {usePosts} from './hooks/usePosts'
import {useFetching} from './hooks/useFetching'
import PostServise from './API/PostService'
import './styles/App.css'
// import Counter from "./components/11111/Counter"
// import ClassCounter from "./components/11111/ClassCounter"
// import InputText from "./components/11111/InputText"
import PostsList from "./components/PostsList"
import PostForm from "./components/PostForm"
import PostFilter from "./components/PostFilter"
import AppModal from "./components/ui/modal/AppModal"
import AppButton from "./components/ui/button/AppButton"
import AppLoader from "./components/ui/loader/AppLoader"


// const POSTS = [
//     {
//         id: 1,
//         title: 'aa',
//         description: 'zz'
//     },
//     {
//         id: 2,
//         title: 'bb',
//         description: 'yy'
//     },
//     {
//         id: 3,
//         title: 'cc',
//         description: 'xx'
//     },
// ]

function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const posts = await PostServise.getAll()

        setPosts(posts)
    })

    useEffect(() => {
        fetchPosts()
    }, [])

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
            {
                postError
                    && <h1 style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>Произошла ошибка {postError}</h1>
            }
            {
                isPostsLoading
                    ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><AppLoader/></div>
                    : <PostsList remove={removePost} posts={sortedAndSearchedPosts} title={'JavaScript'} />
            }

        </div>
    )
}

export default App
