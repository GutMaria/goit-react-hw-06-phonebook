import { setFilter } from '../../redux/filter/filter-slice'
import { useDispatch } from "react-redux";



const Filter = () => {

  const dispatch = useDispatch();

const changeFitler = ({ target }) => {
      dispatch(setFilter(target.value))
    }

  return <div>
            <h3>Find contacts by name:</h3>
            <input name="filter" onChange={changeFitler} className="filter-input" />
          </div>
}

export default Filter;