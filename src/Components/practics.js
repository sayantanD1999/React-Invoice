import React, { useState } from "react";

function Invoice(details) {
  const [c, Setc] = useState(0);
  console.log(details);
  // console.log(details.ips[c].items[0]);

  if (details.payment_status == "Unpaid") {
    document.getElementsByClassName("pm")[0].style.display = "none";
    document.getElementsByClassName("pm")[1].style.display = "none";
  }

  return (
    <div id="invoice">
      <div className="top_div">
        <div>
          <p id="header">INVOICE</p>
        </div>
        <div>
          <div>
            <p>Invoice #</p>
            <p>Invoice Date</p>
            <p className="pm">Due Date</p>
            <p>Payment Status</p>
            <p>Payment Mode</p>
          </div>
        </div>
        <div>
          <div>
            <p>213321</p>
            <p>{details.ips[0].issue_date}</p>
            <p className="pm">{details.ips[0].issue_date}</p>
            <p>{details.ips[0].payment_status}</p>
            <p>{details.ips[0].mode}</p>
          </div>
        </div>
      </div>
      <div className="next_div">
        <div>
          <p className="header2">From</p>
          <p>
            {details.ips[0].issuer_name}
            <br /> {details.ips[0].issuer_name} <br />{" "}
          </p>
        </div>
        <div>
          <p className="header2">Bill To</p>
          <p>
            {details.ips[0].name} <br /> {details.ips[0].number} <br />{" "}
          </p>
        </div>
        <div>
          <p className="header2">Ship To</p>
          <p>
            {details.ips[0].address1} <br /> {details.ips[0].address2}
            <br />{" "}
          </p>
        </div>
        <div>
          <p className="header2">Invoice Total</p>
          <p id="header3"> {details.ips[0].total} </p>
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
          {/* {details.ips[c].items.map((entry) => (
            <tr>
              <td>{details.ips[c].items[entry].name}</td>
              <td>342</td>
              <td>45</td>
              <td>342423</td>
            </tr>
          ))} */}

          <tr>
            <td>dasdasdasdasda</td>
            <td>342</td>
            <td>45</td>
            <td>342423</td>
          </tr>
          <tr>
            <td>dasdasdasdasda</td>
            <td>342</td>
            <td>45</td>
            <td>342423</td>
          </tr>

          <tr>
            <td>dasdasdasdasda</td>
            <td>342</td>
            <td>45</td>
            <td>342423</td>
          </tr>
          <tr>
            <td>dasdasdasdasda</td>
            <td>342</td>
            <td>45</td>
            <td>342423</td>
          </tr>
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
            GST {details.ips[0].gst_perCent}
          </td>
          <td>{details.ips[0].discount_amt}</td>
        </tr>
        <tr>
          <td colSpan={3} className="trd">
            Discount {details.ips[0].discount_perCent}
          </td>
          <td>{details.ips[0].discount_amt}</td>
        </tr>

        <br />
        <br />
        <tr>
          <td colSpan={3} className="trd">
            Total
          </td>
          <td>{details.ips[0].total}</td>
        </tr>
      </table>
    </div>
  );
}

export default Invoice;
