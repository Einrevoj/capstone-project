import React, { useCallback, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionExpense from "../../../redux/actionExpense";
import axios from "axios";
import { useDropzone } from "react-dropzone";

export default function ExpenseAdmin() {
  const [expenseFor, setExpenseFor] = useState("");
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
      expenseFor: expenseFor,
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
          `https://mikezgarcia.com/reportexpense/${reportExpense.expenseId}`,
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
      <>
        <div className="flex flex-col m-5">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="divide-y divide-gray-200 border border-blue-900">
              <tr>
                <td className="px-6 py-4 text-lg font-medium text-blue-900 text-center whitespace-nowrap border border-blue-900">
                  {reportExpense.expenseFor}
                </td>
                <td className="px-6 py-4 text-lg  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                  {reportExpense.amount}
                </td>
                <td className="px-6 py-4 text-lg  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                  {reportExpense.withdrawnFrom}
                </td>
                <td className="px-6 py-4 text-lg font-medium  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                  {reportExpense.accountNumber}
                </td>
                <td className="px-6 py-4 text-lg font-medium  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                  {reportExpense.proofTrans}
                </td>
                <button
                  className="px-6 py-4 text-lg font-medium  text-red-900 text-center whitespace-nowrap border border-blue-900"
                  onClick={() => deleteReportExpense(reportExpense.expenseId)}
                >
                  DELETE
                </button>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }

  const renderReportExpense = () => {
    return (
      <>
        {reportExpense.map((reportExpense) => (
          <React.Fragment key={reportExpense.expenseId}>
            <div
              className="col-md-3 mb-4"
              style={{ height: "50px", width: "250px" }}
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
            value={expenseFor}
            onChange={(e) => setExpenseFor(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please input a expenseFor
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
