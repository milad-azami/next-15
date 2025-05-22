import Form from "next/form";

function SearchPage() {
  return (
    <Form action="/search/result">
      <input name="text" />
      <button type="submit">Submit</button>
    </Form>
  );
}

export default SearchPage;
