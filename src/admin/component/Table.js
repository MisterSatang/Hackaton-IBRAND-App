import { Fragment } from "react";

export default function Table({ product }) {
  return (
    <Fragment>
      <tr className="bg-light">
        <th scope="row">{product._id}</th>
        <td>{product.date.slice(0, 10)}</td>
        <td className="text-danger fw-semibold">{product.status}</td>
        <td>{product.user_name}</td>
        <td>
          <button type="button" class="btn btn-primary">
            Detail
          </button>
        </td>
      </tr>
    </Fragment>
  );
}
