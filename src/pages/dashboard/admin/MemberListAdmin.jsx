import React, { useCallback, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionMemberList from "../../../redux/actionMemberList";
import axios from "axios";
import { useDropzone } from "react-dropzone";

export default function MemberListAdmin() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [status, setStatus] = useState("");
  const { getAllMemberList, addMemberList, deleteMemberList } =
    bindActionCreators(actionMemberList, useDispatch());
  const memberList = useSelector((state) => state.memberList);

  // Validation
  const [invalidFirstName, setInvalidFirstName] = useState(false);
  const [invalidLastName, setInvalidLastName] = useState(false);
  const [invalidContactNumber, setInvalidContactNumber] = useState(false);
  const [invalidStatus, setInvalidStatus] = useState(false);

  useEffect(() => {
    getAllMemberList();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkIfValid()) {
      const body = {
        firstName: firstName,
        lastName: lastName,
        contactNumber: contactNumber,
        status: status,
      };

      addMemberList(body);
    }
  };

  const checkIfValid = () => {
    let isValid = true;

    // Check if firstName is valid
    if (firstName.match("^$|^.*@.*..*$")) {
      setInvalidFirstName(true);
      isValid = false;
    } else {
      setInvalidFirstName(false);
    }

    // Check if lastName is valid
    if (lastName.match("^$|^.*@.*..*$")) {
      setInvalidLastName(true);
      isValid = false;
    } else {
      setInvalidLastName(false);
    }

    // Check if contactNumber is valid
    if (contactNumber.match("^$|^.*@.*..*$")) {
      setInvalidContactNumber(true);
      isValid = false;
    } else {
      setInvalidContactNumber(false);
    }

    // Check if status is valid
    if (status.match("^$|^.*@.*..*$")) {
      setInvalidStatus(true);
      isValid = false;
    } else {
      setInvalidStatus(false);
    }

    return isValid;
  };

  function MyMemberList(memberList) {
    // Callback function
    const onDrop = useCallback((acceptedFiles) => {
      const file = acceptedFiles[0];

      const formData = new FormData();
      formData.append("file", file);

      // Upload to s3
      axios
        .put(
          `https://vacportal.herokuapp.com/memberlist/${memberList.memberlistId}`,
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
                  {memberList.firstName}
                </td>
                <td className="px-6 py-4 text-lg  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                  {memberList.lastName}
                </td>
                <td className="px-6 py-4 text-lg  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                  {memberList.contactNumber}
                </td>
                <td className="px-6 py-4 text-lg font-medium  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                  {memberList.status}
                </td>
                <button
                  className="px-6 py-4 text-lg font-medium  text-red-900 text-center whitespace-nowrap border border-blue-900"
                  onClick={() => deleteMemberList(memberList.memberlistId)}
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

  const renderMemberList = () => {
    return (
      <>
        {memberList.map((memberList) => (
          <React.Fragment key={memberList.memberlistId}>
            <div
              className="col-md-3 mb-4"
              style={{ height: "50px", width: "250px" }}
            >
              <MyMemberList {...memberList} />
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
        {/* FIRST NAME */}
        <Form.Group controlId="formFirstName" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            isInvalid={invalidFirstName}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please input a first name
          </Form.Control.Feedback>
        </Form.Group>

        {/* LAST NAME */}
        <Form.Group controlId="formLastName" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            isInvalid={invalidLastName}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please input a last name
          </Form.Control.Feedback>
        </Form.Group>

        {/* Contact number */}
        <Form.Group controlId="formContactNumber" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter Contact Number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            isInvalid={invalidContactNumber}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please input a contact number
          </Form.Control.Feedback>
        </Form.Group>

        {/* Status */}
        <Form.Group controlId="formStatus" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            isInvalid={invalidStatus}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please input a status
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
      <h4 className="font-bold text-blue-900 text-2xl">MEMBERLIST</h4>
      <div className="row justify-content-center container">
        {renderMemberList()}
      </div>
    </>
  );
}
