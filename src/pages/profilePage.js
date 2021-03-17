import React from "react";
import { useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function ProfilePage() {
  const user = useSelector((state) => state.user);

  return (
    <div className="d-flex flex-column mt-3 user_info ">
      <div className="user_info_header d-flex align-items-center">
        <div className="user_profile_pic">
          <img
            src="https://cdn.shopify.com/s/files/1/0100/2101/1513/files/schnoodle-at-beach-768x1024_large.jpg?v=1576613075"
            alt=""
          />
        </div>
        <p className="ml-4 label" style={{ color: "white" }}>
          {user.displayName}
        </p>
      </div>
      <div className="mt-3 user_info_main">
        <div className="user_info_item">
          <p className="label">USER NAME:</p>
          <span>{user.displayName}</span>
        </div>
        <div className="user_info_item">
          <p className="label">EMAIL:</p>
          <span>{user.email}</span>
        </div>
        <div className="button_wrapper">
          <Button variant="danger">Change Password</Button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
