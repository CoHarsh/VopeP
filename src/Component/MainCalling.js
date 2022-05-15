import React, { useEffect, useState } from "react";
import jsonData from "../Data/Candidates.json";
import MainPortal from "./MainPortal";
import TextField from "@mui/material/TextField";
import "./mainCalling.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const MainCalling = () => {
  const [studentId, setStudentId] = useState();
  const [StudentName, setStudentName] = useState();
  const [candSelected, setCandSelected] = useState({
    Canddata: [],
  });

  const handleChangeID = (event) => {
    setStudentId(event.target.value);
  };

  useEffect(() => {
    console.log(studentId);
  }, [studentId]);

  const handleChangeName = (event) => {
    setStudentName(event.target.value);
  };
  useEffect(() => {
    console.log(StudentName);
  }, [StudentName]);

  const handleRightPanel = (data) => {
    setCandSelected({
      Canddata: data,
    });
  };

  const test = [
    "harsh",
    "harsh1",
    "harsh2",
    "harsh3",
    "harsh4",
    "harsh5",
    "harsh6",
    "harsh7",
    "harsh8",
    "harsh9",
    "harsh10",
  ];

  return (
    <Grid container spacing={2} direction="row">
      <Grid item xs sx={{ boxShadow: "10px 0 20px -10px #333" }}>
        <div className="student-details">
          <TextField
            id="filled-basic"
            label="College ID"
            variant="filled"
            onChange={handleChangeID}
            value={studentId}
            sx={{
              margin: "20px",
              size:"auto",
            }}
          />
          <TextField
            id="filled-basic"
            label="Student Name"
            variant="filled"
            onChange={handleChangeName}
            value={StudentName}
          />
        </div>
      </Grid>
      <Grid item xs={6}>
        {jsonData.map((candidate, index) => {
          return (
            <MainPortal
              candidateList={candidate.Candidates}
              selectionCommetiee={candidate.name}
              handleOnChangeCan={handleRightPanel}
              key={index}
            />
          );
        })}
      </Grid>
      <Grid item xs sx={{ boxShadow: "-10px 0 20px -10px #333" }}>
        <div className="student-details" style={{margin:"20px"}}>
          <Typography variant="h3" component="h2" fontSize={25}>
            You have selected
          </Typography>
          <br />
          {candSelected.Canddata.map((candidate, index) => {
            return candSelected.Canddata.length > 0 ? (
              <>
                <Typography
                  variant="h6"
                  fontSize={14}
                  component="h6"
                  gutterBottom
                >
                  <b>{candidate}</b> as your <b>{index + 1}</b>
                </Typography>
                <br />
              </>
            ) : (
              <p>None</p>
            );
          })}
        </div>
      </Grid>
    </Grid>
  );
};

export default MainCalling;
