import React from 'react'
import { getPagesArray } from '../../../utils/pages'

const AppPagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)

    return (
        <div className="pagination">
            {
                pagesArray.map(item =>
                    <span
                        className={page === item ? 'pagination__item current' : 'pagination__item'}
                        key={item}
                        onClick={() => changePage(item)}
                    >
                        {item}
                    </span>
                )
            }
        </div>
    )
}

export default AppPagination
