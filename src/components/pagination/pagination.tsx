/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch, useSelector } from 'react-redux';
import { getActivePage } from '../../store/ui-state/selectors';
import { activePageChange } from '../../store/ui-state/action';
import cn from 'classnames';

type PaginationProps = {
    pageCount: number;
}

function Pagination({ pageCount }: PaginationProps): JSX.Element {
    const activePage = useSelector(getActivePage);
    const dispatch = useDispatch();
    const paginationPages = Array.from({ length: pageCount + 1 }, (_, i) => i);

    const handleChangePage = (page: number) => {
        dispatch(activePageChange(page));
    };

    if (pageCount < 2) {
        return (
            <section className="pagination"></section>
        );
    }
    return (
        <section className="pagination">
            <ul className="pagination-list">
                {activePage !== 1 && (
                    <li className="pagination-item">
                        <a className="link pagination-link"
                            onClick={() => handleChangePage(activePage - 1)}
                        >
                            Назад
                        </a>
                    </li>)}
                {paginationPages.slice(activePage, activePage + 2).map((page) => {
                    const classLink = cn('pagination-link', { 'pagination-link--active': activePage === page });
                    return(
                    <li key={page} className="pagination-item">
                        <a className={classLink}
                            onClick={() => handleChangePage(page)}
                        >
                            {page}
                        </a>
                    </li>
                )})}
                {activePage !== pageCount && pageCount > 1 && (
                    <li className="pagination-item">
                        <a className="link pagination-link"
                            onClick={() => handleChangePage(activePage + 1)}
                        >
                            Далее
                        </a>
                    </li>)}
            </ul>
        </section>
    );
}

export default Pagination;