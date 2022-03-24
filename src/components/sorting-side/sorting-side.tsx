import { MouseEvent, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { SORTS } from '../../consts';
import { changeSortingType } from '../../store/actions';

function SortingSide(): JSX.Element {
  const dispatch = useDispatch();

  const handleChangeSorting = (evt: MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = evt.currentTarget;
    dispatch(changeSortingType(button.id));
  };

  return (
    <div className="sorting_wrapper">
      <div className="sorting">
        <p className='sorting-title'>Сортировка</p>
        {SORTS.map((sort, id) => {
          return (
            <Fragment key={`sort-item-${id}`}>
              <div className="button_wrapper">
                <button onClick={(evt) => handleChangeSorting(evt)}
                  className="button"
                  id={sort.id}
                  type="button">{sort.text}</button>
              </div>
            </Fragment>
        );
      })}
      </div>
      </div>
  );
}

export default SortingSide;
