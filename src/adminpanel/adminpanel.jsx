import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AdminPanel() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderContent = () => {
    switch (currentPage) {
      case "dashboard":
        return <div>
            <h3>Welcome to out incom tex payment gateway</h3>
            <div className="">
                <div className="row">
                    <div className="col col-lg-4 col-md-4 col-sm-12">
                        <div className="card p-2">
                            <div className="card-body">
                                <h5 className="card-title">Total Transaction</h5>
                                <p className="card-text">Total transaction done by user</p>
                                <button className="btn btn-primary">view All</button>

                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-4 col-sm-12">
                        <div className="card p-2">
                            <div className="card-body">
                                <h5 className="card-title">Users Details</h5>
                                <p className="card-text">Total user registered</p>
                                <button className="btn btn-primary">view All</button>

                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>;
      case "users":
        return <h2>Manage Users</h2>;
      case "payments":
        return <h2>Manage Payments</h2>;
      default:
        return <h2>Dashboard</h2>;
    }
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-dark text-white p-3 vh-100" style={{ width: "250px" }}>
        <h4>Admin Panel</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <button className="btn btn-link text-white" onClick={() => setCurrentPage("dashboard")}>
              Dashboard
            </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-link text-white" onClick={() => setCurrentPage("users")}>
              Manage Users
            </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-link text-white" onClick={() => setCurrentPage("payments")}>
              Manage Payments
            </button>
          </li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="p-4 flex-grow-1">{renderContent()}</div>
    </div>
  );
}

export default AdminPanel;
