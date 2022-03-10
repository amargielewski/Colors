import { Component } from "react";
import { Checkbox, Label } from "components";
import { ColorFilters } from "types/colors";
import "./FilterColorForm.scss";

type FilterColorFormProps = {
  onFilterChange: (key: keyof ColorFilters, value: boolean) => void;
};

export class FilterColorForm extends Component<FilterColorFormProps> {
  render() {
    const { onFilterChange } = this.props;
    return (
      <form className="filter-form">
        <Label displayPosition="row" labelText="Red > 50%">
          <Checkbox
            onChange={(e) => onFilterChange("r", e.target.checked)}
            placeholder="Filter red"
            type="checkbox"
          />
        </Label>
        <Label displayPosition="row" labelText="Green > 50%">
          <Checkbox
            onChange={(e) => onFilterChange("g", e.target.checked)}
            placeholder="Filter green"
            type="checkbox"
          />
        </Label>
        <Label displayPosition="row" labelText="Blue > 50%">
          <Checkbox
            onChange={(e) => onFilterChange("b", e.target.checked)}
            placeholder="Filter blue"
            type="checkbox"
          />
        </Label>
      </form>
    );
  }
}
