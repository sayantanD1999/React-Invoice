import React from "react";
import { FaRupeeSign } from "react-icons/fa";

function Invoice({ info }) {
  console.log(info);

  if (info.payment_status == "UNPAID") {
    info.payment_mode = "Not Applicable";
  }
  return (
    <div id="invoice">
      <div className="top_div">
        <div>
          <p id="header">INVOICE</p>
        </div>
        <div>
          <div>
            <p className="info">INVOICE #</p>
            <p className="info">INVOICE DATE</p>
            <p className="info">PAYMENT STATUS</p>
            <p className="info">PAYMENT MODE</p>
          </div>
        </div>
        <div>
          <div>
            <p className="info">{info.invoice_id}</p>
            <p className="info">{info.issue_date}</p>
            <p className="info">{info.payment_status}</p>
            <p className="info">{info.payment_mode}</p>
          </div>
        </div>
      </div>
      <div className="next_div">
        <div>
          <p className="header2">From</p>
          <p className="info">
            {info.issuer_name}
            <br /> {info.issuer_contact} <br />{" "}
          </p>
        </div>
        <div>
          <p className="header2">Bill To</p>
          <p className="info">
            {info.name} <br /> {info.number} <br />{" "}
          </p>
        </div>
        <div>
          <p className="header2">Ship To</p>
          <p className="info">
            {info.address1} <br /> {info.address2}
            <br /> {info.address3}
          </p>
        </div>
        <div>
          <p className="header2">Invoice Total</p>
          <p id="header3">
            <FaRupeeSign id="rupee_h" /> {info.total}{" "}
          </p>
        </div>
      </div>
      <hr />
      <table>
        <thead>
          <th>Item</th>
          <th>Unit Price</th>
          <th>Quantity</th>
          <th>Amount</th>
        </thead>
        <tbody>
          {info.items.map((entry) => (
            <tr>
              <td>{entry.name}</td>
              <td>{entry.cost}</td>
              <td>{entry.quantity}</td>
              <td>{parseInt(entry.cost) * parseInt(entry.quantity)}</td>
            </tr>
          ))}
        </tbody>
        <br />
        <br />
        <tr>
          <td colSpan={3} className="trd">
            Subtotal
          </td>
        </tr>
        <tr>
          <td colSpan={3} className="trd">
            GST {info.gst_perCent}%
          </td>
          <td>{info.gst_sum}</td>
        </tr>
        <tr>
          <td colSpan={3} className="trd">
            Discount {info.discount_perCent}%
          </td>
          <td> {info.discount_value}</td>
        </tr>

        <br />
        <br />
        <tr>
          <td colSpan={3} className="trd">
            TOTAL
          </td>
          <td>
            <FaRupeeSign id="rupee_h" /> {info.total}
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Invoice;
