"use client";

const Page = () => {
  const onSaveNewStudent = () => {
    const newStudent = {
      id: 123,
      first_name: "E",
      last_name: "e",
      email: "E@mail.com",
      department: "qa",
    };
    fetch("http://localhost:8081/api/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    });
  };
  return (
    <>
      Add student
      <button onClick={onSaveNewStudent}>Save new student</button>
    </>
  );
};

export default Page;
