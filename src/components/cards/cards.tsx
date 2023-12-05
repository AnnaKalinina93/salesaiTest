import Card from "../card/card";
import { useSelector} from 'react-redux';
import { getSelectedUsers, getUserDataError, getUserDataLoading } from "../../store/cards-data/selectors";


function Cards(): JSX.Element {
    const userDataLoading = useSelector(getUserDataLoading);
    const userDataError = useSelector(getUserDataError);
    const userData = useSelector(getSelectedUsers);

    return (
        <section className="cards">
            {userDataLoading && !userDataError && (
                <h2>Идет загрузка</h2>)}

            {userDataError && !userDataLoading && (
                <h2>Произошла ошибка. Перезагрузите страницу.</h2>)}

            {userData.length > 1 && !userDataLoading && userData.map((card) => (
                <Card key={card.id.name+card.id.value+card.email} card={card}/>
            ))}
        </section>
    );
}

export default Cards;
