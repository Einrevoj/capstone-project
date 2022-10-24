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
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    getAllProfile();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

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
  };

  function MyMembersProfile(profile) {
    // Callback function
    const onDrop = useCallback((acceptedFiles) => {
      const file = acceptedFiles[0];

      const formData = new FormData();
      formData.append("file", file);

      // Upload to s3
      axios
        .put(
          `https://vacportal.herokuapp.com/profile/${profile.memberId}`,
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
                  {profile.email}
                </td>
                <td className="px-6 py-4 text-lg  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                  {profile.birthday}
                </td>
                <td className="px-6 py-4 text-lg  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                  {profile.contactNumber}
                </td>
                <td className="px-6 py-4 text-lg font-medium  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                  {profile.address}
                </td>
                <td className="px-6 py-4 text-lg font-medium  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                  {profile.occupation}
                </td>
                <td className="px-6 py-4 text-lg font-medium  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                  {profile.employer}
                </td>
                <td className="px-6 py-4 text-lg font-medium  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                  {profile.position}
                </td>
                <button
                  className="px-6 py-4 text-lg font-medium  text-red-900 text-center whitespace-nowrap border border-blue-900"
                  onClick={() => deleteProfile(profile.memberId)}
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

  const renderMembersProfile = () => {
    return (
      <>
        {profile.map((profile) => (
          <React.Fragment key={profile.memberId}>
            <div
              className="col-md-3 mb-4"
              style={{ height: "50px", width: "250px" }}
            >
              <MyMembersProfile {...profile} />
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
          ></Form.Control>
        </Form.Group>

        {/* Birthday */}
        <Form.Group controlId="formBirthday" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter birthday"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {/* Contact number */}
        <Form.Group controlId="formContactNumber" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter Contact Number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {/* Address */}
        <Form.Group controlId="formAddress" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {/* Occupation */}
        <Form.Group controlId="formOccupation" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter Occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {/* Employer */}
        <Form.Group controlId="formEmployer" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter Employer"
            value={employer}
            onChange={(e) => setEmployer(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {/* Position */}
        <Form.Group controlId="formPosition" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          ></Form.Control>
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
      <div className="row justify-content-center">{renderMembersProfile()}</div>
    </>
  );
}
