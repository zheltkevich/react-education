import React, {useState, useEffect, useRef} from "react"
import {usePosts} from '../hooks/usePosts'
import {useFetching} from '../hooks/useFetching'
import {getPagesCount, getPagesArray} from '../utils/pages'
import PostService from '../API/PostService'
import PostsList from "../components/PostsList"
import PostForm from "../components/PostForm"
import PostFilter from "../components/PostFilter"
import AppModal from "../components/ui/modal/AppModal"
import AppButton from "../components/ui/button/AppButton"
import AppLoader from "../components/ui/loader/AppLoader"
import AppPagination from "../components/ui/pagination/AppPagination"

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const lastElement = useRef()
    const observer = useRef()
    console.log(lastElement);



    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)

        setPosts([...posts, ...response.data])

        const totalCount = Number(response.headers['x-total-count'])
        const totalPagesCount = getPagesCount(totalCount, limit)

        setTotalPages(totalPagesCount)
    })

    useEffect(() => {
        if (isPostsLoading) return
        if (observer.current) observer.current.disconnect()

        const callback = function(entries, observer) {
            if (entries[0].isIntersecting && page < totalPages) {
               setPage(page + 1)
            }
        }

        observer.current = new IntersectionObserver(callback)
        observer.current.observe(lastElement.current)
    }, [isPostsLoading])

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const changePage = (page) => {
        setPage(page)
    }

    const removePost = (post) => {
        setPosts(posts.filter(item => item.id !== post.id))
    }

    return (
        <div className="posts">
            {/* <div className="first-components">
                <InputText></InputText>
                <div className="first-components__counters">
                    <Counter></Counter>
                    <ClassCounter></ClassCounter>
                </div>
            </div>
            <hr /> */}
            {/* ========================== */}
            <AppButton onClick={() => setModal(true)}>Создать пост</AppButton>
            <AppModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </AppModal>
            <hr />
            <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
            {
                postError && <h1 style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>Произошла ошибка {postError}</h1>
            }
            <PostsList remove={removePost} posts={sortedAndSearchedPosts} title={'JavaScript'} />
            <div ref={lastElement} style={{height: 0}}></div>
            {
                isPostsLoading && <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><AppLoader/></div>

            }
            <AppPagination
                totalPages={totalPages}
                page={page}
                changePage={changePage}
            />
        </div>
    )
}

export default Posts
