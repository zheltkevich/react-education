import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import AppLoader from '../components/ui/loader/AppLoader'
import { useFetching } from '../hooks/useFetching'

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching( async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const [fetchComments, isCommentsLoading, commentsError] = useFetching( async (id) => {

        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1>Страница поста (id: <em>{params.id}</em>)</h1>
            {
                isLoading
                    ? <AppLoader></AppLoader>
                    : <h6>{post.id}. {post.title}</h6>
            }
            <hr />
            <h2>Коментарии</h2>
            {
                isCommentsLoading
                    ? <AppLoader></AppLoader>
                    : <div>
                        {
                            comments.map(item =>
                                <div key={item.id} style={{marginTop: '15px'}}>
                                    <h5>{item.email}</h5>
                                    <p>{item.body}</p>
                                </div>
                            )
                        }
                    </div>
            }

        </div>
    )
}

export default PostIdPage
