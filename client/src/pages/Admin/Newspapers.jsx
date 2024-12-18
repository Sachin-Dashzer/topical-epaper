import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Badge, Container } from "react-bootstrap";


const NewspaperData = [
  {
    id: 1,
    name: "Narayan Toiakdar",
    file: "01 7782 53294",
    type: "$57843.00",
    size: 320,
    date: "March 23, 2023",
  },
  {
    id: 2,
    name: "Topadar Bishawas",
    file: "02 74849 2938",
    type: "$57843.00",
    size: 220,
    date: "March 23, 2023",
  },
  {
    id: 3,
    name: "Abul Koshem",
    file: "01 7782 53294",
    type: "$57843.00",
    size: 720,
    date: "March 23, 2023",
  },
  {
    id: 4,
    name: "Auponga",
    file: "01 7782 53287",
    type: "$57843.00",
    size: 330,
    date: "March 23, 2023",
  },
  {
    id: 5,
    name: "Philip Kotsar",
    file: "01 7782 53254",
    type: "$57843.00",
    size: 360,
    date: "March 23, 2023",
  },
  {
    id: 6,
    name: "Alek Jandar the Gr",
    file: "01 7782 453294",
    type: "$57843.00",
    size: 390,
    date: "March 23, 2023",
  },
  {
    id: 7,
    name: "Sir Uttom Kormokar",
    file: "01 7782 53294",
    type: "$57843.00",
    size: 920,
    date: "March 23, 2023",
  },
  {
    id: 8,
    name: "Hasina Hasi",
    file: "01 7782 53294",
    type: "$57843.00",
    size: 720,
    date: "March 23, 2023",
  },
  {
    id: 9,
    name: "Asif Layla",
    file: "01 7782 53294",
    type: "$57843.00",
    size: 120,
    date: "March 23, 2023",
  },
];

function Newspapers() {
  const [newspaper, setNewspaper] = useState(NewspaperData);

  return (
    <Container className="mt-2">



      <div className="">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h3 className="sub_heading fontWeight800 text-primary font-heading" style={{textDecoration : "underline"}}>Newspapers Table</h3>
          <Button variant="dark" className="py-2">+ Add Newspaper</Button>
        </div>
        <Table responsive bordered hover>
          <thead>
            <tr >
              <th className="bg-primary py-3 text-white">S.No</th>
              <th className="bg-primary py-3 text-white">Name</th>
              <th className="bg-primary py-3 text-white">File No.</th>
              <th className="bg-primary py-3 text-white">Type</th>
              <th className="bg-primary py-3 text-white">Size</th>
              <th className="bg-primary py-3 text-white">Date</th>
              <th className="bg-primary py-3 text-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {newspaper.map((newspaper) => (
              <tr key={newspaper.id}>
                <td>{newspaper.id}</td>
                <td>{newspaper.name}</td>
                <td>{newspaper.file}</td>
                <td>{newspaper.type}</td>
                <td>
                  <Badge bg={newspaper.size > 500 ? "secondary" : "light"} className="p-2 text-dark">
                    {newspaper.size} KB
                  </Badge>
                </td>
                <td>{newspaper.date}</td>
                <td>
                  <Button variant="outline-dark" size="sm" className="me-2">
                    Update
                  </Button>
                  <Button variant="outline-dark" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default Newspapers;
