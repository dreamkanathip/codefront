import React from "react";
import "./index.css";
import {
  UserOutlined,
  CalendarOutlined,
  CarryOutOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Button, Breadcrumb, Avatar, Tag, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
interface DataType {
  key: string;
  name: string;
  dentname: string;
  problem: string;
  dob: string;
}

const columns: ColumnsType<DataType> = [
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
    dataIndex: "dentname",
    key: "dentname",
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
    dataIndex: "dob",
    key: "dob",
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

const data: DataType[] = [
  {
    key: "1",
    name: "",
    dentname: "",
    problem: "",
    dob: "",
  },
  {
    key: "2",
    name: "",
    dentname: "",
    problem: "",
    dob: "",
  },
  {
    key: "3",
    name: "",
    dentname: "",
    problem: "",
    dob: "",
  },
];
function ShowRecord() {
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
