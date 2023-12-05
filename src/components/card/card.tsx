import { ChangeEvent, useEffect, useState } from "react";
import { UserCard } from "../../types/cards";
import { useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { changeUserDataCard, deleteUserDataCard } from "../../store/cards-data/action";

type InputProps = {
    card: UserCard;
}
function Card({ card }: InputProps): JSX.Element {
    const [formInput, setFormInput] = useState({
        touch: false,
        data: {
            name: {
                title: card.name.title,
                first: card.name.first,
                last: card.name.last,
            },
            email: card.email,
            phone: card.phone,
            id: {
                name: card.id.name,
                value: card.id.value,
            },
        }
    });

    const dispatch = useDispatch();
    useEffect(() => {
        debouncedInputChange(formInput)
    }, [formInput]
    );
    const debouncedInputChange = useDebouncedCallback((value) => {
        if (value.touch) {
            dispatch(changeUserDataCard(value.data));
        }

    }, 500);

    const handleChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormInput({
            ...formInput,
            touch: true,
            data: {
                ...formInput.data,
                [name]: value,
            }
        });
    };

    const handleClick = () => {
        dispatch(deleteUserDataCard(card))
    }
    return (
        <div className="card">
            <button className="button-delete"
                onClick={handleClick}
            >
                Delete
            </button>
            <ul className="info-list">
                <li className="info-item">
                    <h2>Name:</h2>
                    <p>{card.name.first} {card.name.last}</p>
                </li>
                <li className="info-item">
                    <h2>Email:</h2>
                    <input
                        name="email"
                        value={formInput.data.email}
                        onChange={handleChangeInput} />
                </li>
                <li className="info-item">
                    <h2>Phone:</h2>
                    <input
                        name="phone"
                        value={formInput.data.phone}
                        onChange={handleChangeInput} />
                </li>
            </ul>

        </div>
    );
}

export default Card;
