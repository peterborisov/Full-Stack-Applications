"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  useEffect(() => {
    loadStudents();
  }, []);

  const [students, setStudents] = useState([]);
  const router = useRouter();

  const loadStudents = async () => {
    const result = await fetch("http://localhost:8081/api/students");

    setStudents(await result.json());
  };

  return (
    <>
      {students.map((st) => (
        <div key={st.id}>{JSON.stringify(st)}</div>
      ))}
      <button onClick={() => router.push("/students/addStudent")}>
        Add student
      </button>
    </>
  );
};

export default Page;
