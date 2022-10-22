import React, { useCallback, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionInvestment from "../../../redux/actionInvestment";
import axios from "axios";
import { useDropzone } from "react-dropzone";

export default function InvestmentAdmin() {
  const [investmentTo, setInvestmentTo] = useState("");
  const [platFormUsed, setPlatFormUsed] = useState("");
  const [withdrawnFrom, setWithdrawnFrom] = useState("");
  const [amount, setAmount] = useState("");
  const [proofTrans, setProofTrans] = useState("");
  const { getAllInvestment, addInvestment, deleteInvestment } =
    bindActionCreators(actionInvestment, useDispatch());
  const investment = useSelector((state) => state.investment);

  useEffect(() => {
    getAllInvestment();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      investmentTo: investmentTo,
      platFormUsed: platFormUsed,
      withdrawnFrom: withdrawnFrom,
      amount: amount,
      proofTrans: proofTrans,
    };

    addInvestment(body);
  };

  function MyInvestment(investment) {
    // Callback function
    const onDrop = useCallback((acceptedFiles) => {
      const file = acceptedFiles[0];

      const formData = new FormData();
      formData.append("file", file);

      // Upload to s3
      axios
        .put(
          `https://capstone-vac.herokuapp.com/investment/${investment.investmentId}`,
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
          <p className="card-text lead fw-bold">{investment.investmentTo}</p>
          <p className="card-text lead fw-bold">{investment.platFormUsed}</p>
          <p className="card-text lead fw-bold">{investment.withdrawnFrom}</p>
          <p className="card-text lead fw-bold">{investment.amount}</p>
          <p className="card-text lead fw-bold">{investment.proofTrans}</p>
          <button onClick={() => deleteReportIncome(investment.expenseId)}>
            DELETE
          </button>
        </div>
      </div>
    );
  }

  const renderInvestment = () => {
    return (
      <>
        {investment.map((investment) => (
          <React.Fragment key={investment.investmentId}>
            <div
              className="col-md-3 mb-4"
              style={{ height: "300px", width: "250px" }}
            >
              <MyInvestment {...investment} />
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
        {/* Investment To */}
        <Form.Group controlId="formInvestmentTo" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter InvestmentTo"
            value={investmentTo}
            onChange={(e) => setInvestmentTo(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please input a investmentTo
          </Form.Control.Feedback>
        </Form.Group>

        {/* PlatFormUsed */}
        <Form.Group controlId="formplatFormUsed" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter platFormUsed"
            value={platFormUsed}
            onChange={(e) => setPlatFormUsed(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please input platFormUsed
          </Form.Control.Feedback>
        </Form.Group>

        {/* Withdrawn From */}
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
      <h4 className="text-danger">Investment</h4>
      <div className="row justify-content-center">{renderInvestment()}</div>
    </>
  );
}
