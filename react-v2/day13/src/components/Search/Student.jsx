import React from "react";
import studentList from "./student_list.json";
export default function Student({ keyword }) {
  return (
    <>
      {studentList.students.map((student, index) => {
        if (keyword !== "") {
          if (
            student.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) !==
            -1
          ) {
            return (
              <p style={{ background: "yellow" }} key={index}>
                {student}
              </p>
            );
          }
        }

        return <p key={index}>{student}</p>;
      })}
    </>
  );
}
