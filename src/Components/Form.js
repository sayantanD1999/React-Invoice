import React, { useState } from "react";
function Form({ setInfo }) {
  const [arr, setArr] = useState([]);
  const [itemcount, setItemCount] = useState(2);
  const [amt, setAmt] = useState(0);

  const addItem = () => {
    let div = (
      <div className="item_details">
        <div className="item_div1">
          <label htmlFor="">
            <b>Item {itemcount}</b>
          </label>
          <br />
          <input type="text" className="inp2 item_name" name="" id="" />
        </div>
        <div className="item_div2">
          <label htmlFor="">
            <b>Quantity</b>
          </label>
          <br />
          <input
            type="number"
            min={0}
            className="inp item_quantity"
            name=""
            id=""
          />
        </div>
        <div className="item_div3">
          <label htmlFor="">
            <b>Cost</b>
          </label>
          <br />
          <input
            type="number"
            min={0}
            className="inp item_cost"
            name=""
            id=""
          />
        </div>
      </div>
    );

    const item = {
      x: div,
    };
    setArr([...arr, item]);
    setItemCount(itemcount + 1);
  };

  const calculateBill = () => {
    var x = document.getElementsByClassName("item_cost");
    var y = document.getElementsByClassName("item_quantity");
    var z = document.getElementsByClassName("item_name");

    var items_price = [];
    var items_quantity = [];
    var item_name = [];
    var main_arr = [];
    for (
      let i = 0, j = 0, k = 0;
      i < x.length, j < y.length, k < z.length;
      i++, j++, k++
    ) {
      const arr = {
        name: z[k].value,
        cost: x[i].value,
        quantity: y[j].value,
      };

      main_arr.push(arr);
      items_price.push(x[i].value);
      items_quantity.push(y[j].value);
      item_name.push(z[k].value);
    }
    // console.log(main_arr);
    // setItemDetails(main_arr);

    var sum = 0;
    for (
      let i = 0, j = 0;
      i < items_price.length, j < items_quantity.length;
      i++, j++
    ) {
      // console.log(items_price[i]);
      sum = sum + items_price[i] * items_quantity[j];
    }

    var gst = document.getElementsByName("gst_val");
    var gst_value = 0;
    for (let i = 0; i < gst.length; i++) {
      if (gst[i].checked) {
        gst_value = gst[i].value;
      }
    }
    var gst_amt = (gst_value / 100) * sum;
    console.log(gst_amt);
    sum = sum + gst_amt;

    var discount = document.getElementById("discount").value;
    var discount_amt = (discount / 100) * sum;
    sum = sum - discount_amt;
    console.log(discount_amt);

    setAmt(parseInt(sum));

    var issuer_name = document.getElementById("issuer_name").value;
    var issuer_contact = document.getElementById("issuer_contact").value;
    var recipent_fname = document.getElementById("fname").value;
    var recipent_lname = document.getElementById("lname").value;
    var number = document.getElementById("number").value;
    var mail = document.getElementById("mail").value;

    var street = document.getElementById("street").value;
    var city = document.getElementById("city").value;
    var zip = document.getElementById("zip").value;
    var state = document.getElementById("state").value;

    var p = document.getElementsByName("status");
    var status = " ";
    for (let i = 0; i < p.length; i++) {
      if (p[i].checked) {
        status = p[i].value;
      }
    }

    var m = document.getElementsByName("mode");
    var mode = " ";
    for (let i = 0; i < m.length; i++) {
      if (m[i].checked) {
        mode = m[i].value;
      }
    }

    let uid =
      "#" +
      recipent_fname.substring(0, 1) +
      recipent_lname.substring(0, 1) +
      state.substring(0, 2) +
      city.substring(0, 2);
    console.log(uid);

    var d = new Date();
    console.log(d);
    var issue_date = String(d).substring(0, 15);

    const details = {
      issuer_name: issuer_name,
      issue_date: issue_date,
      issuer_contact: issuer_contact,
      invoice_id: uid,
      name: recipent_fname + " " + recipent_lname,
      number: number,
      mail: mail,
      address1: street,
      address2: state,
      address3: city + " " + zip,
      payment_status: status,
      payment_mode: mode,
      discount_perCent: discount,
      discount_value: parseInt(discount_amt),
      gst_perCent: gst_value,
      gst_sum: parseInt(gst_amt),
      total: parseInt(sum),
      items: main_arr,
    };
    setInfo(details);
  };

  return (
    <div className="form">
      <div className="nav">
        {" "}
        <h1>Create Invoice</h1>
      </div>
      <div className="customer_details">
        <div>
          <label>
            <b>Issuer Name</b>
          </label>
          <input type="text" className="inp" name="" id="issuer_name" />
        </div>
        <div>
          <label>
            <b>Contact</b>
          </label>
          <br />
          <input type="mail" className="inp" name="" id="issuer_contact" />
        </div>
      </div>

      <h2>Customer Details</h2>
      <div className="customer_details">
        <div>
          <label>
            <b>First Name</b>
          </label>
          <br />
          <input type="text" className="inp" name="" id="fname" />
          <br />
        </div>
        <div>
          <label>
            <b>Last Name</b>
          </label>
          <br />
          <input type="text" className="inp" name="" id="lname" />
          <br />
        </div>
        <div>
          <label>
            <b>Telephone</b>
          </label>
          <br />
          <input
            type="number"
            min={0}
            className="inp"
            name=""
            id="number"
            inputMode="tel"
          />
          <br />
        </div>
        <div>
          <label>
            <b>Email</b>
          </label>
          <br />
          <input type="email" className="inp" name="mail" id="mail" />
          <br />
        </div>
      </div>
      <h2>Address</h2>
      <div className="customer_address">
        <div>
          <label>
            <b>Street</b>
          </label>
          <br />
          <input type="text" className="inp" name="" id="street" />
          <br />
        </div>

        <div>
          <label>
            <b>State</b>
          </label>
          <br />
          <input type="text" className="inp" name="" id="state" />
          <br />
        </div>

        <div>
          <label>
            <b>City</b>
          </label>
          <br />
          <input type="text" className="inp" name="" id="city" />
          <br />
        </div>

        <div>
          <label>
            <b>Zip</b>
          </label>
          <br />
          <input type="text" className="inp" name="" id="zip" />
          <br />
        </div>
      </div>

      <h2>Billing Details</h2>
      <div className="billing_details">
        <div>
          <div className="item_details">
            <div className="item_div1">
              <label htmlFor="">
                <b>Item 1</b>
              </label>
              <br />
              <input type="text" className="inp2 item_name" name="" id="" />
            </div>
            <div className="item_div2">
              <label htmlFor="">
                <b>Quantity</b>
              </label>
              <br />
              <input
                type="number"
                min={0}
                className="inp item_quantity"
                name=""
                id=""
              />
            </div>
            <div className="item_div3">
              <label htmlFor="">
                <b>Cost</b>
              </label>
              <br />
              <input
                type="number"
                min={0}
                className="inp item_cost"
                name=""
                id=""
              />
            </div>
          </div>
          {arr.map((entry) => (
            <div>{entry.x}</div>
          ))}
        </div>
        <button onClick={addItem}>Add Item</button>
      </div>

      <h2>Payment Details</h2>
      <div className="payment_details">
        <div id="payment_div1">
          <label>
            <b>Payment Status</b>
          </label>
          <br />
          <br />
          <div className="payment_div">
            <div>
              <input type="radio" value="PAID" name="status" id="" /> Paid
            </div>
            <div>
              <input type="radio" value="UNPAID" name="status" id="" /> Unpaid
            </div>
          </div>
        </div>

        <div id="payment_div2">
          <label>
            <b>Payment Mode</b>
          </label>
          <br />
          <br />
          <div className="payment_div">
            <div>
              <input type="radio" value="CHEQUE" name="mode" id="" /> Cheque
            </div>
            <div>
              <input type="radio" value="CASH" name="mode" id="" /> Cash
            </div>
            <div>
              <input type="radio" value="CARD" name="mode" id="" /> Card
            </div>
            <div>
              <input type="radio" value="UPI" name="mode" id="" /> UPI
            </div>
          </div>
        </div>

        <div id="payment_div3">
          <label>
            <b>GST Applied</b>
          </label>
          <br />
          <br />

          <div className="payment_div">
            <div>
              <input type="radio" value="5" name="gst_val" id="" /> 5%
            </div>
            <div>
              <input type="radio" value="12" name="gst_val" id="" /> 12%
            </div>
            <div>
              <input type="radio" value="18" name="gst_val" id="" /> 18%
            </div>
            <div>
              <input type="radio" value="28" name="gst_val" id="" /> 28%
            </div>
          </div>
        </div>

        <div id="payment_div4">
          <label>
            <b>Discount Applied (%)</b>
          </label>
          <br />
          <input
            type="number"
            min={0}
            className="inp3"
            name=""
            id="discount"
            inputMode="tel"
          />
        </div>

        <button onClick={calculateBill}>Calculate Bill</button>

        <h2>Total : ₹ {amt}</h2>
      </div>
    </div>
  );
}

export default Form;
