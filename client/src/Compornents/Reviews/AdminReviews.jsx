import { useState, useEffect } from "react";
import { Table, Button, Popconfirm, message, Rate } from "antd";
import { getAllReviews, deleteReview } from "../../services/reviewService";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const AdminReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const fetchedReviews = await getAllReviews();
      setReviews(fetchedReviews);
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

  const columns = [
    {
      title: "Reviewer",
      dataIndex: ["reviewedBy", "name"], // assuming review has `reviewedBy` field with `name`
      key: "reviewedBy",
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
          <Button
            type="primary"
            icon={<EditOutlined />}
            style={{ marginRight: 8 }}
            // handle edit logic here
            onClick={() => console.log("Edit review:", record._id)}
          >
            Edit
          </Button>
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
      <h2>Admin Reviews</h2>
      <Table
        columns={columns}
        dataSource={reviews}
        rowKey="_id" // assuming reviews have `_id` field
        loading={loading}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default AdminReviews;
