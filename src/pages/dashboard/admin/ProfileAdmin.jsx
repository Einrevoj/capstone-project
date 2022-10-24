import React, { useCallback, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionProfile from "../../../redux/actionProfile";
import axios from "axios";
import { useDropzone } from "react-dropzone";

export default function ProfileAdmin() {
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [occupation, setOccupation] = useState("");
  const [employer, setEmployer] = useState("");
  const [position, setPosition] = useState("");
  const { getAllProfile, addProfile, deleteProfile } = bindActionCreators(
    actionProfile,
    useDispatch()
  );
  const members = useSelector((state) => state.members);

  // Validation
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidContactNumber, setInvalidContactNumber] = useState(false);
  const [invalidBirthday, setInvalidBirthday] = useState(false);
  const [invalidAddress, setInvalidAddress] = useState(false);
  const [invalidOccupation, setInvalidOccupation] = useState(false);
  const [invalidEmployer, setInvalidEmployer] = useSelector(false);
  const [invalidPosition, setInvalidPosition] = useState(false);

  useEffect(() => {
    getAllProfile();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkIfValid()) {
      const body = {
        email: email,
        contactNumber: contactNumber,
        birthday: birthday,
        address: address,
        occupation: occupation,
        employer: employer,
        position: position,
      };

      addProfile(body);
    }
  };

  const checkIfValid = () => {
    let isValid = true;

    // Check if email is valid
    if (email.match("^$|^.*@.*..*$")) {
      setInvalidEmail(true);
      isValid = false;
    } else {
      setInvalidEmail(false);
    }

    // Check if birthday is valid
    if (birthday.match("^$|^.*@.*..*$")) {
      setInvalidBirthday(true);
      isValid = false;
    } else {
      setInvalidBirthday(false);
    }

    // Check if contactNumber is valid
    if (contactNumber.match("^$|^.*@.*..*$")) {
      setInvalidContactNumber(true);
      isValid = false;
    } else {
      setInvalidContactNumber(false);
    }

    // Check if address is valid
    if (address.match("^$|^.*@.*..*$")) {
      setInvalidAddress(true);
      isValid = false;
    } else {
      setInvalidAddress(false);
    }

    // Check if occupation is valid
    if (occupation.match("^$|^.*@.*..*$")) {
      setInvalidOccupation(true);
      isValid = false;
    } else {
      setInvalidOccupation(false);
    }

    // Check if employer is valid
    if (employer.match("^$|^.*@.*..*$")) {
      setInvalidEmployer(true);
      isValid = false;
    } else {
      setInvalidEmployer(false);
    }

    // Check if position is valid
    if (position.match("^$|^.*@.*..*$")) {
      setInvalidPosition(true);
      isValid = false;
    } else {
      setInvalidPosition(false);
    }

    return isValid;
  };

  function MyMembers(members) {
    // Callback function
    const onDrop = useCallback((acceptedFiles) => {
      const file = acceptedFiles[0];

      const formData = new FormData();
      formData.append("file", file);

      // Upload to s3
      axios
        .put(
          `https://vacportal.herokuapp.com/profile/${members.memberId}`,
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
          <p className="card-text lead fw-bold">{members.email}</p>
          <p className="card-text lead fw-bold">{members.birthday}</p>
          <p className="card-text lead fw-bold">{members.contactNumber}</p>
          <p className="card-text lead fw-bold">{members.address}</p>
          <p className="card-text lead fw-bold">{members.occupation}</p>
          <p className="card-text lead fw-bold">{members.employer}</p>
          <p className="card-text lead fw-bold">{members.position}</p>
          <button onClick={() => deleteProfile(members.memberId)}>
            DELETE
          </button>
        </div>
      </div>
    );
  }

  const renderMembers = () => {
    return (
      <>
        {members.map((members) => (
          <React.Fragment key={members.memberId}>
            <div
              className="col-md-3 mb-4"
              style={{ height: "300px", width: "250px" }}
            >
              <MyMembers {...members} />
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
        {/* Email */}
        <Form.Group controlId="formEmail" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={invalidEmail}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please input a first name
          </Form.Control.Feedback>
        </Form.Group>

        {/* Birthday */}
        <Form.Group controlId="formBirthday" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter birthday"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            isInvalid={invalidBirthday}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please input a Birthday
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

        {/* Address */}
        <Form.Group controlId="formAddress" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            isInvalid={invalidAddress}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please input Address
          </Form.Control.Feedback>
        </Form.Group>

        {/* Occupation */}
        <Form.Group controlId="formOccupation" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter Occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            isInvalid={invalidOccupation}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please input Occupation
          </Form.Control.Feedback>
        </Form.Group>

        {/* Employer */}
        <Form.Group controlId="formEmployer" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter Employer"
            value={employer}
            onChange={(e) => setEmployer(e.target.value)}
            isInvalid={invalidEmployer}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please input employer
          </Form.Control.Feedback>
        </Form.Group>

        {/* Position */}
        <Form.Group controlId="formPosition" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            isInvalid={invalidPosition}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please input Position
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
      <h4 className="text-danger">MEMBERS PROFILE</h4>
      <div className="row justify-content-center">{renderMembers()}</div>
    </>
  );
}
