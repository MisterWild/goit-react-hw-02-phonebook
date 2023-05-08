import PropTypes from 'prop-types';
import a from './Filter.module.css'


const Filter = ({ filter, onChange }) => (
  <label className={a}>
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={onChange}
      placeholder="Find contacts by name"
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
