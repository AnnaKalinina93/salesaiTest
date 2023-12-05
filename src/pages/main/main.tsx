import Cards from "../../components/cards/cards";
import Pagination from "../../components/pagination/pagination";
import { USER_COUNT } from "../../const";

function Main(): JSX.Element {
    const PAGE_COUNT = USER_COUNT / 10;

    return (
        <main className="main">
            <h1 className="main-title">Client cards</h1>
            <Cards />
            <Pagination pageCount={PAGE_COUNT} />
        </main>
    );
}

export default Main;
