import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getCurrentUser } from '../../store/selectors';
import NotFoundPage from '../not-found-page/not-found-page';
import SortingSide from '../sorting-side/sorting-side';
import { useForm } from "react-hook-form";
import { TUser } from '../../types/types';

type PossibleUser = TUser | undefined;

function UserPage(): JSX.Element {

  const param: {id: string} = useParams();
  const id = Number(param.id);
  const user: PossibleUser = useSelector(getCurrentUser(id));
  const [edit, setEdit] = useState(false);
  const { register, handleSubmit } = useForm({ defaultValues: user, shouldUseNativeValidation: true });

  const onSubmit = handleSubmit(data => {
    setEdit(false)
    return console.log(JSON.stringify(data))
  });

  if (!user) {
    return (<NotFoundPage/>);
  }

  return (
    <>
      <div className="page">
        <SortingSide />
        <div className='user-page_wrapper'>
          <div className='user-page_header'>
            <h2 className='title'>Профиль пользователя</h2>
            <button type='button' className="button" onClick={() => setEdit(!edit)}>Редактировать</button>
          </div>
        <form action="#" className='user-form' onSubmit={onSubmit}>
            <fieldset className='user-form_fieldset' disabled={!edit}>
          <div className="input_wrapper">
              <label>Name</label>
              <input  className='input-item' type="text" placeholder="name" {...register("name", { required: true, maxLength: 80 })} />
              </div>
                <div className="input_wrapper">
              <label>Username</label>
                <input  className='input-item' type="text" placeholder="username" {...register("username", { required: true, maxLength: 100 })} />
              </div>
                <div className="input_wrapper">
              <label>Email</label>
                <input  className='input-item' type="text" placeholder="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
              </div>
                <div className="input_wrapper">
              <label>Street</label>
                <input  className='input-item' type="text" placeholder="street" {...register("address.street", { required: true, maxLength: 80 })} />
              </div>
                <div className="input_wrapper">
              <label>City</label>
                <input className='input-item' type="text" placeholder="city" {...register("address.city", { required: true })} />
              </div>
                <div className="input_wrapper">
              <label>Zipcode</label>
                <input  className='input-item' type="text" placeholder="zipcode" {...register("address.zipcode", { required: true })} />
              </div>
                <div className="input_wrapper">
              <label>Phone</label>
                <input  className='input-item' type="text" placeholder="phone" {...register("phone", { required: true })} />
              </div>
                <div className="input_wrapper">
              <label>Website</label>
                <input  className='input-item' type="text" placeholder="website" {...register("website", { required: true })} />
              </div>
                 <div className="input_wrapper">
              <label>Comment</label>
                <textarea className='input-item comment' {...register("comment")} />
                </div>
            </fieldset>
            <button type="submit" className={!edit ? 'button-submit button-submit_disable' : `button-submit button-submit_active`} disabled={!edit} >Отправить</button>
        </form>
         </div>
      </div>
    </>
  );
}

export default UserPage;
