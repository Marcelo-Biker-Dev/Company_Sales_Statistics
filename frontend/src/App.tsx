import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import ColumnChart from "components/ColumnChart";
import PieChart from "components/PieChart";

function App() {
  return (
    <>
      <NavBar />

      <div className="container">
        <h1 className="text-primary py-2">Sales Dashboard</h1>

        <div className="row px-0">
          <div className="col sm-6">
            <div className="row1 py-4">
              <h4 className="text-center text-secondary">Sales statistics</h4>
            </div>
            <ColumnChart />
          </div>
          <div className="col sm-6">
            <div className="row1 py-4">
              <h4 className="text-center text-secondary ">Sales per salesperson</h4>
            </div>
            <PieChart />
          </div>
        </div>

        <div className="row1 py-5">
          <DataTable />
        </div>

      </div>
      <Footer />
    </>
  );
}

export default App;
