import { Input } from 'components/ContactForm/ContactForm.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          placeholder="Enter contact name"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};
