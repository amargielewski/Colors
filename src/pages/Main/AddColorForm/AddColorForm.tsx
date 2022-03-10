import { ChangeEvent, FormEvent } from "react";
import { Error, Input, Label, Button } from "components";
import "./AddColorForm.scss";

type AddColorFormProps = {
  error: string;
  colorValue: string;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const AddColorForm = ({
  error,
  colorValue,
  handleSubmit,
  handleChange,
}: AddColorFormProps) => {
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <Error errorText={error}>
        <Label labelText="Type color">
          <Input
            placeholder="Color in hex or rgb"
            type="text"
            value={colorValue}
            onChange={handleChange}
          />
        </Label>
      </Error>
      <Button>Add Color</Button>
    </form>
  );
};
