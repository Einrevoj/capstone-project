import React, { useCallback, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionIncome from "../../../redux/actionIncome";
import axios from "axios";
import { useDropzone } from "react-dropzone";

export default function IncomeAdmin() {
  const [incomeFrom, setIncomeFrom] = useState("");
  const [amount, setAmount] = useState("");
  const [depositTo, setDepositTo] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [proofTrans, setProofTrans] = useState("");
  const { getAllReportIncome, addReportIncome, deleteReportIncome } =
    bindActionCreators(actionIncome, useDispatch());
  const reportIncome = useSelector((state) => state.reportIncome);

  useEffect(() => {
    getAllReportIncome();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      incomeFrom: incomeFrom,
      amount: amount,
      depositTo: depositTo,
      accountNumber: accountNumber,
      accountName: accountName,
      proofTrans: proofTrans,
    };

    addReportIncome(body);
  };

  function MyReportIncome(reportIncome) {
    // Callback function
    const onDrop = useCallback((acceptedFiles) => {
      const file = acceptedFiles[0];

      const formData = new FormData();
      formData.append("file", file);

      // Upload to s3
      axios
        .put(
          `https://capstone-vac.herokuapp.com/reportincome/${reportIncome.incomeId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(() => {
          console.log("file uploaded successfully");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    // React Dropzone
    const { getRootProps } = useDropzone({ onDrop });

    // Return statement
    return (
      <div className="card h-50 text-center p-4">
        <div className="card-body">
          <p className="card-text lead fw-bold">{reportIncome.incomeFrom}</p>
          <p className="card-text lead fw-bold">{reportIncome.amount}</p>
          <p className="card-text lead fw-bold">{reportIncome.depositTo}</p>
          <p className="card-text lead fw-bold">{reportIncome.accountNumber}</p>
          <p className="card-text lead fw-bold">{reportIncome.accountName}</p>
          <p className="card-text lead fw-bold">{reportIncome.proofTrans}</p>
          <button onClick={() => deleteReportIncome(reportIncome.incomeId)}>
            DELETE
          </button>
        </div>
      </div>
    );
  }

  const renderReportIncome = () => {
    return (
      <>
        {reportIncome.map((reportIncome) => (
          <React.Fragment key={reportIncome.incomeId}>
            <div
              className="col-md-3 mb-4"
              style={{ height: "300px", width: "250px" }}
            >
              <MyReportIncome {...reportIncome} />
            </div>
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <>
      <hr />
      <Form onSubmit={handleSubmit} className="row">
        {/* Deposit To */}
        <Form.Group controlId="formIncomeFrom" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter IncomeFrom"
            value={incomeFrom}
            onChange={(e) => setIncomeFrom(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please input a IncomeFrom
          </Form.Control.Feedback>
        </Form.Group>

        {/* Amount */}
        <Form.Group controlId="formAmount" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please input amount
          </Form.Control.Feedback>
        </Form.Group>

        {/* Deposit To */}
        <Form.Group controlId="formDepositTo" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter Deposit To"
            value={depositTo}
            onChange={(e) => setDepositTo(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please input depositTo
          </Form.Control.Feedback>
        </Form.Group>

        {/* Account Number */}
        <Form.Group controlId="formAccountNumber" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please input account Number
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAccountName" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter Account Number"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please input account Name
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formProofTrans" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter ProofTrans"
            value={proofTrans}
            onChange={(e) => setProofTrans(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please input proofTrans
          </Form.Control.Feedback>
        </Form.Group>

        <div className="col-12 d-flex flex-wrap justify-content-center">
          <button
            className="bg-primary text-center text-white w-50"
            onClick={handleSubmit}
          >
            Upload
          </button>
        </div>
      </Form>
      <hr />
      <h4 className="text-danger">ReportIncome</h4>
      <div className="row justify-content-center">{renderReportIncome()}</div>
    </>
  );
}
