import { Fragment } from "react";

export default function Table() {
  return (
    <Fragment>
      <table class="table ">
        <thead className="bg-navbar text-light">
          <tr>
            <th scope="col">Order Number</th>
            <th scope="col">Order Date</th>
            <th scope="col">Status</th>
            <th scope="col">Owner</th>
            <th scope="col">View Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-light">
            <th scope="row">0231541311</th>
            <td>15/11/2565</td>
            <td>
              <div
                class="spinner-border spinner-border-sm me-2 text-primary"
                role="status"
              ></div>
              รอการยืนยัน...
            </td>
            <td>Otto</td>
            <td>
              <button type="button" class="btn btn-primary">
                Detail
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}
