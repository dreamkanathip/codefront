import React from "react";
import "./index.css";
import {
  UserOutlined,
  CalendarOutlined,
  CarryOutOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Button, Breadcrumb, Avatar, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import axios from "axios";
interface Data {
  name: string;
  doctor: string;
  problem: string;
  dateTime: string;
}

function ShowRecord() {
  const [data, setData] = React.useState([
    {
      dateTime: "",
      doctor: "",
      name: "",
      problem: "",
    },
  ]);

  React.useEffect(() => {
    axios
      .get("http://localhost:8080/appointments")
      .then((res) => setData(res.data));
  }, []);

  const columns: ColumnsType<Data> = [
    {
      title: "ชื่อ-นามสกุล",
      dataIndex: "name",
      key: "name",
      render: (
        text:
          | string
          | number
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | Iterable<React.ReactNode>
          | React.ReactPortal
          | null
          | undefined
      ) => <a>{text}</a>,
    },
    {
      title: "แพทย์ผู้นัด",
      dataIndex: "doctor",
      key: "doctor",
      render: (
        text:
          | string
          | number
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | Iterable<React.ReactNode>
          | React.ReactPortal
          | null
          | undefined
      ) => <a>{text}</a>,
    },
    {
      title: "เหตุที่นัด",
      dataIndex: "problem",
      key: "problem",
      render: (
        text:
          | string
          | number
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | Iterable<React.ReactNode>
          | React.ReactPortal
          | null
          | undefined
      ) => <a>{text}</a>,
    },
    {
      title: "วัน-เวลา",
      dataIndex: "dateTime",
      key: "dateTime",
      render: (
        text:
          | string
          | number
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | Iterable<React.ReactNode>
          | React.ReactPortal
          | null
          | undefined
      ) => <a>{text}</a>,
    },
  ];
  return (
    <div>
      <nav className="logout">
        <div className="system">ระบบบันทึกการนัดหมาย</div>
        <ul className="tabava">
          <li>
            <Button type="text" className="button">
              Logout
            </Button>
          </li>
          <li>
            <Avatar icon={<UserOutlined />} />
          </li>
        </ul>
      </nav>
      <Breadcrumb
        className="web"
        items={[
          {
            href: "/appointment",
            title: (
              <>
                <CalendarOutlined />
                <span>บันทึกการนัดหมาย</span>
              </>
            ),
          },
          {
            href: "/recordappointment",
            title: (
              <>
                <CarryOutOutlined />
                <span>ประวัติการนัดหมาย</span>
              </>
            ),
          },
        ]}
      />
      <h2 className="tabText">นัดหมาย</h2>
      <div className="recbox">
        <Table columns={columns} dataSource={data} />
      </div>
      <footer className="footer">
        ks clinic
        <p className="icon">
          <GlobalOutlined />
        </p>
      </footer>
    </div>
  );
}

export default ShowRecord;
