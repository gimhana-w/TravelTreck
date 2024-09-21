import { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { Modal, Form, Input, Button, Spin, message, Popconfirm } from "antd";
import userService from "../../services/userService";

const ProfileModal = ({ visible, onClose }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  // Populate form with user data
  const populateForm = () => {
    form.setFieldsValue({
      name: currentUser.name,
      email: currentUser.email,
    });
  };

  useEffect(() => {
    if (user) {
      userService.getUserById(user["_id"]).then((res) => {
        setCurrentUser(res);
        populateForm();
      });
    }
  }, []);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await userService.updateUser(user._id, values);
      message.success("Profile updated successfully!");
      onClose();
    } catch (error) {
      message.error(error.message);
    }
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload(); // Reload the page after logout
  };

  const handleDeleteAccount = async () => {
    setLoading(true);
    try {
      await userService.deleteUser(user._id);
      localStorage.clear();
      message.success("Account deleted successfully!");
      window.location.reload(); // Reload the page after deletion
    } catch (error) {
      message.error(error.message);
    }
    setLoading(false);
  };

  return (
    <Modal title="Profile" visible={visible} onCancel={onClose} footer={null}>
      <Spin spinning={loading}>
        <Form
          form={form}
          name="profile_form"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Update Profile
            </Button>
          </Form.Item>
        </Form>

        <Popconfirm
          title="Are you sure you want to delete your account?"
          onConfirm={handleDeleteAccount}
          okText="Yes"
          cancelText="No"
        >
          <Button danger block>
            Delete Account
          </Button>
        </Popconfirm>
        <div style={{ height: 16 }} />
        <Button type="default" block onClick={handleLogout}>
          Logout
        </Button>
      </Spin>
    </Modal>
  );
};

// Define prop types
ProfileModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProfileModal;
