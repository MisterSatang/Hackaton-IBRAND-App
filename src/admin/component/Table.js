import { Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Table({ product }) {
  console.log(product._id);

  const sendtesting = () => {
    axios.put(`http://localhost:8000/transaction/update/${product._id}?update=status`, {
      value: "wating",
    })
    axios.put(`http://localhost:8000/transaction/update/${product._id}?update=status_user`, {
      value: "confirm",
    })
    axios.put(`http://localhost:8000/transaction/update/${product._id}?update=step`, {
      value: 3,
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
    window.location.href = "/tb_testing"
  }

  const sendFDA = () => {
    axios.put(`http://localhost:8000/transaction/update/${product._id}?update=status`, {
      value: "confirm",
    })
    axios.put(`http://localhost:8000/transaction/update/${product._id}?update=status_user`, {
      value: "wating",
    })
    axios.put(`http://localhost:8000/transaction/update/${product._id}?update=step`, {
      value: 7,
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
    window.location.href = "/tb_FDA"
  }

  const sendProduce = () => {
    axios.put(`http://localhost:8000/transaction/update/${product._id}?update=status`, {
      value: "wating",
    })
    axios.put(`http://localhost:8000/transaction/update/${product._id}?update=status_user`, {
      value: "confirm",
    })
    axios.put(`http://localhost:8000/transaction/update/${product._id}?update=step`, {
      value: 8,
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
    window.location.href = "/tb_produce"
  }

  const sendPays = () => {
    axios.put(`http://localhost:8000/transaction/update/${product._id}?update=status`, {
      value: "wating",
    })
    axios.put(`http://localhost:8000/transaction/update/${product._id}?update=status_user`, {
      value: "wating",
    })
    axios.put(`http://localhost:8000/transaction/update/${product._id}?update=step`, {
      value: 9,
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
    window.location.href = "/tb_pays"
  }

  return (
    <Fragment>
      <tr className="bg-light">
        <th scope="row">{product._id}</th>
        <td>{product.date.slice(0, 10)}</td>

        <td className={`fw-semibold text-${product.status == 'confirm' ? 'success' : product.status == 'wating' ? 'warning' : 'danger'}`}>{
          product.status == 'fail' ? 'รอการเเก้ไขจากลูกค้า' : product.status == 'wating' && product.step == 1 ? 'รอการยืนยัน' : product.status == 'wating' && product.step == 2 ? 'รอการยืนยัน testing จากลูกค้า' : product.status == 'confirm' && product.step == 2 ? 'ส่งสินค้า testing' : product.status == 'wating' && product.step == 3 ? 'รอการ testing' : product.status == 'wating' && product.step == 4 ? 'รอการมัดจำ' : product.status == 'confirm' && product.step == 4 ? 'ยืนยันการมัดจำ' : product.status == 'wating' && product.step == 5 ? 'รอลูกค้าเลือก packaging' : product.status == 'confirm' && product.step == 5 ? 'รอการตรวจสอบ packaging' : product.status == 'confirm' && product.step == 6 ? 'ยืนยัน อ.ย.' : product.status == 'confirm' && product.step == 7 ? 'ยืนยัน เสร็จสิ้นการผลิต' : product.status == 'wating' && product.step == 8 ? 'รอการชำระเงินจากลูกค้า' : product.status == 'confirm' && product.step == 8 ? 'ยืนยันการชำระเงิน' : product.status == 'wating' && product.step == 9 ? 'ยืนยันการจัดส่งสินค้า' : product.status == 'confirm' && product.step == 9 ? 'จัดส่งสินค้าเสร็จสิ้น' : null
        }</td>
        <td>{product.user_name}</td>
        <td>
          {
            product.step == 1 && product.status == 'wating' ? (<Link to={`/detail_product/${product._id}`}>
              <button type="button" class="btn btn-primary">
                Detail
              </button>
            </Link>) : product.step == 1 && product.status == 'fail' ? (
              <button type="button" class="btn btn-primary" disabled>
                Detail
              </button>
            ) :
              product.step == 2 && product.status == 'confirm' ?
                <Link to="/tb_testing" onClick={sendtesting}>
                  <button type="button" class="btn btn-primary">
                    Send Testing
                  </button>
                </Link>
                : product.status == 'wating' && product.step == 2 ? <button type="button" class="btn btn-primary" disabled>
                  wating
                </button> :
                  product.step == 3 && product.status == 'wating' ? <button type="button" class="btn btn-primary" disabled>
                    wating
                  </button> : product.step == 4 && product.status == 'confirm' ?
                    <Link to={`/detail_product_offer/${product._id}`}>
                      <button type="button" class="btn btn-primary">
                        Detail
                      </button>
                    </Link> : product.step == 5 && product.status == 'confirm' ?
                      <Link to={`/detail_packaging/${product._id}/${product.pakaging_choose}`}>
                        <button type="button" class="btn btn-primary">
                          Detail
                        </button>
                      </Link> : product.step == 6 && product.status == 'confirm' ?
                        <Link to={`/tb_FDA`}>
                          <button type="button" class="btn btn-primary" onClick={sendFDA}>
                            ยืนยัน อ.ย.
                          </button>
                        </Link> : product.step == 7 && product.status == 'confirm' ?
                          <Link to={`/tb_produce`}>
                            <button type="button" class="btn btn-primary" onClick={sendProduce}>
                              ยืนยัน เสร็จสิ้นการผลิต
                            </button>
                          </Link> : product.step == 8 && product.status == 'wating' ?
                            <Link to={`/tb_pays`}>
                              <button type="button" class="btn btn-primary" onClick={sendPays}>
                                ยืนยันการชำระเงิน
                              </button>
                            </Link> : product.step == 9 && product.status == 'wating' ?
                              <Link to={`/detail_deliveries/${product._id}`}>
                                <button type="button" class="btn btn-primary">
                                  ยืนยันการจัดส่งสินค้า
                                </button>
                              </Link> : null
          }
        </td>
      </tr>
    </Fragment >
  );
}
