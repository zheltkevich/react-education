import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import AppLoader from '../components/ui/loader/AppLoader'
import { useFetching } from '../hooks/useFetching'

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [fetchPostById, isLoading, error] = useFetching( async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
    }, [])

    return (
        <div>
            <h1>Страница поста (id: <em>{params.id}</em>)</h1>
            {
                isLoading
                    ? <AppLoader></AppLoader>
                    : <h2>{post.id}. {post.title}</h2>
            }

        </div>
    )
}

export default PostIdPage
