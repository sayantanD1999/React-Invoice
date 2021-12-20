import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Form from "./Components/Form";
import Invoice from "./Components/Invoice";
import "./index.css";
import React, { useState, useRef } from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
function App() {
  const [info, setInfo] = useState({
    issuer_name: "John Doe",
    issuer_contact: "jd@gmail.com",
    issue_date: "03.06.21",
    name: "Jane Doe",
    number: 59,
    invoice_id: "#DFSFSD",
    mail: "janedoe@gmamail.com",
    address1: "street,city",
    address2: "street,city",
    address3: "street,city",
    payment_status: "PAID",
    payment_mode: "CASH",
    discount_perCent: 20,
    discount_value: 200,
    gst_perCent: 5,
    gst_sum: 40,
    total: 800,
    items: [
      { name: "sd", cost: 435, quantity: 67 },
      { name: "yu", cost: 455, quantity: 23 },
      { name: "sd", cost: 435, quantity: 67 },
      { name: "yu", cost: 455, quantity: 23 },
      { name: "sd", cost: 435, quantity: 67 },
    ],
  });

  const pdfExportComponent = useRef(null);
  const create_pdf = () => {
    // pdfExportComponent.current.save();
    savePDF(pdfExportComponent.current, { paperSize: "A4" });
    // const input = document.getElementById("divToPrint");
    // html2canvas(input).then((canvas) => {
    //   const imgData = canvas.toDataURL("image/png");

    //   var pdf = new jsPDF("p", "px", "a4");

    //   var width = pdf.internal.pageSize.getWidth();

    //   var height = pdf.internal.pageSize.getHeight();
    //   console.log(height, width);
    //   pdf.addImage(imgData, "JPEG", 0, 0, 450, 300);
    //   pdf.save("Invoice.pdf");

    //   return true;
    // });
  };

  return (
    <div className="App">
      <div className="form-holder">
        <Form setInfo={setInfo} />

        <center>
          <button onClick={create_pdf}>Download Bill</button>
        </center>
      </div>
      {/* <PDFExport ref={pdfExportComponent} paperSize="A4"> */}
      <div id="divToPrint" ref={pdfExportComponent}>
        <Invoice info={info} />
      </div>
      {/* </PDFExport> */}
    </div>
  );
}

export default App;
