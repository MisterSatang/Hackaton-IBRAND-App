import { Fragment } from "react";

export default function TableNoneDetail() {
  return (
    <Fragment>
      <table class="table ">
        <thead className="bg-navbar text-light">
          <tr>
            <th scope="col">Order Number</th>
            <th scope="col">Order Date</th>
            <th scope="col">Status</th>
            <th scope="col">Owner</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-light">
            <th scope="row">0231541311</th>
            <td>15/11/2565</td>
            <td className="text-danger fw-semibold">ยังไม่ได้ยืนยัน</td>
            <td>Otto</td>
            <td>
              <button type="button" class="btn btn-primary">
                Send
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}
