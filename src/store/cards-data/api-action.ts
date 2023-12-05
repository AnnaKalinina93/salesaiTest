import { ThunkActionResult } from '../../types/action';
import { userDataFailed, userDataRequest, userDataSucceeded } from './action';
import { toast } from 'react-toastify';
import { UserCards} from '../../types/cards';
import { USER_COUNT } from '../../const';

export const fetchUserDataAction = (
  ): ThunkActionResult => async (dispatch, _, api): Promise<void> => {
      dispatch(userDataRequest());
    try {
      const { data } = await api.get<UserCards>(`/?results=${USER_COUNT}&noinfo&inc=name,email,phone,id`);
      dispatch(userDataSucceeded(data));
    } catch {
        dispatch(userDataFailed());
      toast.info('Не удалось загрузить карточки пользователей, попробуйте еще раз');
    }
  };

