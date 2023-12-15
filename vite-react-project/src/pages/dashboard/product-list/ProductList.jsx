import {
  DeleteOutlined,
  DownOutlined,
  EditOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Dropdown,
  Image,
  List,
  Modal,
  Select,
  Space,
  Table,
} from "antd";
import React, { useState } from "react";



const ProductList = ({ products, onSelectCard, onDeleteProduct }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderBy, setOrderBy] = useState('input');

  let sortedProducts = [];

  
  if(orderBy == 'input') sortedProducts = [...products];
  if(orderBy == 'asc') sortedProducts = [...products].sort((a,b)=>{
              console.log(a,b);
                const nameA = a.title.toUpperCase();
                const nameB = b.title.toUpperCase();
                if(nameA>nameB) return -1;
                if(nameA<nameB) return 1;    
                return 0;
            });
  if(orderBy == 'des') sortedProducts = [...products].sort((a,b)=>{
      console.log(a,b);
        const nameA = a.title.toUpperCase();
        const nameB = b.title.toUpperCase();
        if(nameA<nameB) return -1;
        if(nameA>nameB) return 1;    
        return 0;
    });

  console.log("sortedProducts", sortedProducts);
  


  function showModal(){
    console.log("showModal");
    setIsModalOpen(true);
  }

  function handleOk(){
    console.log("handle Ok");
    setIsModalOpen(false);
  }

  function handleCancel(){
    console.log("handle Cancel");
    setIsModalOpen(false);
  }


  const items = [
    {
      key: "1",
      label: (
        <a>
          <span>
            <EditOutlined style={{color:"blue"}} /> Edit
          </span>
          <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <>
          <DeleteOutlined style={{color:"red"}} onClick={()=>console.log('delete')} /> Delete
        </>
      ),
    },
  ];


  const onMenuClick = (key,record) => {
    console.log("key",typeof key);
    const parsedKey = parseInt(key);
    console.log("parsedKey",parsedKey);
    if(parsedKey == 1){
      console.log("edit");
      showModal();
    }else if(parsedKey){
      console.log("delete");
      onDeleteProduct(record);
    }
  }

  const columns = [
    {
      title: "Image",
      dataIndex: "img",
      key: "img",
      render: (img) => (
        <div>
          {/* {imgs.map((img, index) => ( */}
          <Image src={img} width={50} />
          {/* ))} */}
        </div>
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Caption",
      dataIndex: "caption",
      key: "caption",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Dropdown menu={{ items, onClick: ({key}) => onMenuClick(key,record) }} >
            <a onClick={(e) => e.preventDefault()}>
              <MoreOutlined />
            </a>
          </Dropdown>
        </>
      ),
    },
  ];

  const clickHandler = (record, i) => {
    console.log("record", record, "index", i);
    onSelectCard(i);
  };


  



  return (
    <div>
      <div style={{display:"flex"}}>

      <h2> product list</h2>
      <div style={{flex:"1 1"}}></div>
      <Select
        defaultValue="input"
        style={{ width: 120 }}
        onChange={(order) => {
          setOrderBy(order);
          console.log('onChange',order);
        }}
        options={[
          { value:"input",label: "input"},
          { value: "asc", label: "A-Z" },
          { value: "des", label: "Z-A" },
        ]}
      />
      </div>
      <Table
        // onRow={(record, i) => ({ onClick: () => clickHandler(record, i) })}
        columns={columns}
        dataSource={sortedProducts}
        rowKey="id"
      ></Table>
      
    </div>
  );
};

export default ProductList;
