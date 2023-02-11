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
import AppSelect from "../components/ui/select/AppSelect"
import AppPagination from "../components/ui/pagination/AppPagination"
import { useObserver } from "../hooks/useObserver"

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const lastElement = useRef()

    console.log(lastElement);



    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)

        setPosts([...posts, ...response.data])

        const totalCount = Number(response.headers['x-total-count'])
        const totalPagesCount = getPagesCount(totalCount, limit)

        setTotalPages(totalPagesCount)
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1)
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

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
            <AppSelect
                value={limit}
                defaultValue={'Кол-во элементов на странице'}
                options={[
                    { value: 5, name: '5' },
                    { value: 10, name: '10' },
                    { value: 25, name: '25' },
                    { value: -1, name: 'Показать все' }
                ]}
                onChange={value => setLimit(value)}
            ></AppSelect>
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
