import Form from "./styles/Form";
import useForm from "../lib/useForm";

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: "Nice Shoes",
    price: 3423,
    description: "The best shooz",
    image: "",
  });
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(inputs);
      }}
    >
      <fieldset>
        <label htmlFor="image">
          Image
          <input
            required
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            type="description"
            id="description"
            name="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  );
}
