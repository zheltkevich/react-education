export const getPagesCount = (totalPostsCount, postsLimitOnPage) => {
    return Math.ceil(totalPostsCount / postsLimitOnPage)
}

export const getPagesArray = (totalPages) => {
    let pagesArray = []

    for (let index = 0; index < totalPages; index++) {
        pagesArray.push(index + 1)
    }

    return pagesArray
}
