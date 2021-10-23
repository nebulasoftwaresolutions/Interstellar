import React, { useState } from "react";
import Input from "../components/input/Input";
import Select from "../components/select/Select";
import Button from "../components/button/Button";
import Spinner from "../components/spinner/Spinner";
import Text from "../components/text/Text";
import Divider from "../components/divider/Divider";
import Skeleton from "../components/skeleton/Skeleton";
import Alert from "../components/alert/Alert";
import Table from "../components/table/Table";
import Avatar from "../components/avatar/Avatar";
import User from "../assets/user.jpg";
import UserOne from "../assets/user1.jpg";
import UserTwo from "../assets/user2.jpg";

export default function Playground() {
  const [showLoader, setShowLoader] = useState(false);
  const initLabels = () => {
    return [
      {
        label: "Male",
        value: "Male",
      },
      {
        label: "Female",
        value: "Female",
      },
      {
        label: "Other",
        value: "Other",
      },
    ];
  };
  const columns = () => {
    return [
      {
        label: "Name",
        attrs: {
          className: "nss-table__header",
        },
      },
      {
        label: "Phone",
        attrs: {
          className: "nss-table__header",
        },
      },
      {
        label: "Email",
        attrs: {
          className: "nss-table__header",
        },
      },
    ];
  };
  const rows = () => {
    return [
      {
        name: "Michael",
        phone: "+18001112222",
        email: "michael@fakeemail.com",
        attrs: {
          className: "nss-row",
          onClick: () => console.log("clicked"),
        },
      },
      {
        name: "John",
        phone: "+18001112222",
        email: "john@fakeemail.com",
        attrs: {
          className: "nss-row",
        },
      },
      {
        name: "Jane",
        phone: "+18001112222",
        email: "jane@fakeemail.com",
        attrs: {
          className: "nss-row",
        },
      },
    ];
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowLoader(true);
  };
  return (
    <div className="playground">
      <Text type="h1" value="Inputs" />
      <Divider />
      <Input type="text" placeholder="John" label="First name" />
      <Input type="text" placeholder="Doe" label="Last name" />
      <Input type="number" placeholder="23" label="Age" />
      <Input type="password" placeholder="****" label="Password" />
      <Input type="date" label="Select date" />
      <Select
        list={initLabels()}
        label="Gender"
        selected="Other"
        onChange={(e) => {
          alert(e.target.value);
        }}
      />
      <Text type="h1" value="Buttons" />
      <Divider />
      <Button title="Click" variant="black" />
      {!showLoader && (
        <Button
          title="Submit"
          variant="gray"
          onClick={(e) => handleSubmit(e)}
        />
      )}
      <Spinner show={showLoader} />
      <Button title="Login" />
      <Button title="Register" variant="green" />
      <Button title="Create Account" variant="red" />
      <Button title="Signup" variant="yellow" />
      <Button title="Delete" variant="white" />
      <Text type="h1" value="Texts" />
      <Divider />
      <Text type="h1" value="Header 1" />
      <Text type="h2" value="Header 2" />
      <Text type="h3" value="Header 3" />
      <Text type="h4" value="Header 4" />
      <Text type="h5" value="Header 5" />
      <Text type="h6" value="Header 6" />

      <Text
        type="p"
        value="This is a paragrapgh. sit amet consectetur adipisicing elit. Autem ipsa doloribus est eveniet officia voluptatum rem quia dol."
      />
      <Text type="h1" value="Skeletons" />
      <Divider />
      <Skeleton type="text" />
      <Skeleton type="text" />
      <Skeleton type="text" />
      <Skeleton type="image" />

      <Text type="h1" value="Alerts" />
      <Divider />
      <Alert type="red" value="Invalid Credentials" />
      <Alert type="green" value="User Created" />
      <Alert type="black" value="Fetched user details" />
      <Alert type="yellow" value="Couldn't refresh page" />
      <Alert type="blue" value="Post updated" />
      <Alert type="white" value="Thank you for sigining up." />

      <Text type="h1" value="Tables" />
      <Divider />
      <Table type="black" columns={columns()} rows={rows()} />
      <Table type="blue" columns={columns()} rows={rows()} />
      <Table type="green" columns={columns()} rows={rows()} />
      <Table type="white" columns={columns()} rows={rows()} />

      <Text type="h1" value="Avatars" />
      <Divider />
      <Avatar value="ML" />
      <Avatar value="JD" theme="black" />
      <Avatar value="AP" theme="red" />
      <Avatar type="image" value={User} onClick={(e) => console.log(e)} />
      <Avatar type="image" value={UserOne} />
      <Avatar type="image" value={UserTwo} />
    </div>
  );
}
