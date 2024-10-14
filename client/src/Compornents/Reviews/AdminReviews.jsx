import { useState, useEffect } from "react";
import { Table, Button, Popconfirm, message, Rate, Row, Input, Col } from "antd";
import { getAllReviews, deleteReview } from "../../services/reviewService";
import { DeleteOutlined, EditOutlined, FilePdfOutlined, SearchOutlined } from "@ant-design/icons";
import UserNameEmail from "../UserNameEmail/UserNameEmail";
import jsPDF from "jspdf";
import "jspdf-autotable";

const AdminReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState(""); // State to store the search text
  const [filteredReviews, setFilteredReviews] = useState([]); // State to store filtered reviews

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const fetchedReviews = await getAllReviews();
      setReviews(fetchedReviews);
      setFilteredReviews(fetchedReviews); // Set initial filtered reviews
      setLoading(false);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      message.error("Failed to fetch reviews");
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteReview(id);
      message.success("Review deleted successfully");
      fetchReviews(); // Refresh the table after deleting
    } catch (error) {
      console.error("Error deleting review:", error);
      message.error("Failed to delete review");
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Admin Reviews", 14, 22);

    const tableColumn = ["Reviewer", "Review", "Rating", "Date"];
    const tableRows = reviews.map((review) => [
      review.reviewedBy, // Assuming this is the user ID
      review.review,
      review.numOfStars,
      new Date(review.createdAt).toLocaleDateString(),
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
    });

    doc.save("admin_reviews.pdf");
  };

  // Search handler function
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    const filtered = reviews.filter(
      (review) =>
        review.review.toLowerCase().includes(value) || // Search by review content
        review.reviewedBy.toLowerCase().includes(value) // Assuming `reviewedBy` is a string (like a name or email)
    );
    setFilteredReviews(filtered);
  };

  const columns = [
    {
      title: "Reviewer",
      dataIndex: "reviewedBy",
      key: "reviewedBy",
      render: (reviewedBy) => <UserNameEmail id={reviewedBy} />,
    },
    {
      title: "Review",
      dataIndex: "review",
      key: "review",
    },
    {
      title: "Rating",
      dataIndex: "numOfStars",
      key: "numOfStars",
      render: (numOfStars) => <Rate disabled defaultValue={numOfStars} />,
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) => new Date(createdAt).toLocaleDateString(),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>

          <Popconfirm
            title="Are you sure to delete this review?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger type="dashed" icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <div>
      <Row justify="space-between" style={{ marginBottom: 16 }}>
        <h2>Admin Reviews</h2>
        <Col>
          <Input
            placeholder="Search by reviewer or review"
            prefix={<SearchOutlined />}
            value={searchText}
            onChange={handleSearch}
            style={{ width: 300, marginRight: 16 }}
          />
          <Button
            type="primary"
            icon={<FilePdfOutlined />}
            onClick={generatePDF}
          >
            Generate PDF
          </Button>
        </Col>
      </Row>
      <Table
        columns={columns}
        dataSource={filteredReviews}
        rowKey="_id" // assuming reviews have `_id` field
        loading={loading}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default AdminReviews;
