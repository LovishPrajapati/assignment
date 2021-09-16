import React, { useEffect, useState } from "react";
import pic from "../photo.jpg";

function List() {
  const [usersData, setusersData] = useState([]);

  useEffect(() => {
    const values = [];
    const keys = Object.keys(localStorage);
    let i;
    for (i = 0; i < keys.length; i++)
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    setusersData(values);
  }, []);

  return (
    <div>
      <section className="myform-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="form-area login-form">
                <div className="form-content ">
                  <img src={pic} alt="scene" />
                </div>
                <div className="form-input">
                  <h2 className="lh2 ">Users List</h2>
                  <ol>
                    {usersData.map((user) => (
                      <li key={user.email}>{user.email}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default List;
