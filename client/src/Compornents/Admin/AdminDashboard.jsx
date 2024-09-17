import { Layout, Menu } from "antd";
import {
  UserOutlined,
  DollarOutlined,
  CarOutlined,
  PayCircleFilled,
  BellOutlined,
  StarOutlined,
  CompassOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import VehicleManager from "../Vehicle/VehicleManager";
import AdvertisementManager from "../Advertisement/Advertisement";

const { Sider, Content } = Layout;

const AdminDashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onMenuItemClicked = (index) => {
    setActiveIndex(index);
  };
  return (
    <Layout style={{ minHeight: "100vh", width: "100vw" }}>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ height: "100%", borderRight: 0 }}
          className="custom-menu"
        >
          <Menu.Item
            onClick={() => {
              onMenuItemClicked(1);
            }}
            key="1"
            icon={<UserOutlined />}
          >
            User
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              onMenuItemClicked(2);
            }}
            key="2"
            icon={<DollarOutlined />}
          >
            Finance
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              onMenuItemClicked(3);
            }}
            key="3"
            icon={<CarOutlined />}
          >
            Vehicle
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              onMenuItemClicked(4);
            }}
            key="4"
            icon={<PayCircleFilled />}
          >
            Package
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              onMenuItemClicked(5);
            }}
            key="5"
            icon={<BellOutlined />}
          >
            Advertisement
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              onMenuItemClicked(6);
            }}
            key="6"
            icon={<StarOutlined />}
          >
            Review
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              onMenuItemClicked(7);
            }}
            key="7"
            icon={<CompassOutlined />}
          >
            Adventures
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ minHeight: 280 }}>
        <div style={{ width: "100%", height: 100, background: "red" }}></div>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {activeIndex === 3 && <VehicleManager />}
          {activeIndex === 5 && <AdvertisementManager />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
