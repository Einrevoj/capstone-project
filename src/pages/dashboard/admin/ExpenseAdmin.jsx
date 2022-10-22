import React, { useCallback, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionExpense from "../../../redux/actionExpense";
import axios from "axios";
import { useDropzone } from "react-dropzone";

export default function ExpenseAdmin() {
  const [expenseFrom, setExpenseFrom] = useState("");
  const [amount, setAmount] = useState("");
  const [withdrawnFrom, setWithdrawnFrom] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [proofTrans, setProofTrans] = useState("");
  const { getAllReportExpense, addReportExpense, deleteReportExpense } =
    bindActionCreators(actionExpense, useDispatch());
  const reportExpense = useSelector((state) => state.reportExpense);

  useEffect(() => {
    getAllReportExpense();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      expenseFrom: expenseFrom,
      amount: amount,
      withdrawnFrom: withdrawnFrom,
      accountNumber: accountNumber,
      proofTrans: proofTrans,
    };

    addReportExpense(body);
  };

  function MyReportExpense(reportExpense) {
    // Callback function
    const onDrop = useCallback((acceptedFiles) => {
      const file = acceptedFiles[0];

      const formData = new FormData();
      formData.append("file", file);

      // Upload to s3
      axios
        .put(
          `https://capstone-vac.herokuapp.com/reportexpense/${reportExpense.expenseId}`,
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
          <p className="card-text lead fw-bold">{reportExpense.incomeFrom}</p>
          <p className="card-text lead fw-bold">{reportExpense.amount}</p>
          <p className="card-text lead fw-bold">
            {reportExpense.withdrawnFrom}
          </p>
          <p className="card-text lead fw-bold">
            {reportExpense.accountNumber}
          </p>
          <p className="card-text lead fw-bold">{reportExpense.proofTrans}</p>
          <button onClick={() => deleteReportIncome(reportExpense.expenseId)}>
            DELETE
          </button>
        </div>
      </div>
    );
  }

  const renderReportExpense = () => {
    return (
      <>
        {reportExpense.map((reportExpense) => (
          <React.Fragment key={reportExpense.expenseId}>
            <div
              className="col-md-3 mb-4"
              style={{ height: "300px", width: "250px" }}
            >
              <MyReportExpense {...reportExpense} />
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
        <Form.Group controlId="formExpenseFrom" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter ExpenseFrom"
            value={expenseFrom}
            onChange={(e) => setExpenseFrom(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please input a expenseFrom
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
        <Form.Group controlId="formWithdrawnFrom" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter Withdrawn From"
            value={withdrawnFrom}
            onChange={(e) => setWithdrawnFrom(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please input withdrawnFrom
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
      <h4 className="text-danger">ReportExpense</h4>
      <div className="row justify-content-center">{renderReportExpense()}</div>
    </>
  );
}
