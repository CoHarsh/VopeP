import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";

function MainPortal(props) {
  const [canList, setCanList] = useState({
    candidates: [],
    sawCandidate: [],
  });

  const [NextText,setNextText]=useState("Next");
  const [isNextActive,setisNextActive]=useState(1);

  const [checkedans, setCheckans] = useState({
    status: new Array(props.candidateList.length).fill(0),
  });
  let selection = 3;

  const handleNext = (event) => {
    console.log("I am next");
    event.preventDefault();
    let pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);
  };

  const handlePrev = (event) => {
    console.log("I am prev");
    event.preventDefault();
    let pageHeight = window.innerHeight;
    window.scrollBy(0, -pageHeight);
  };

  const handleOnChangeCan = (e) => {
    const { value, checked, name } = e.target;
    const { candidates } = canList;
    console.log(e.target);
    const newarr = checkedans.status;
    newarr[name - 1] = 1;
    setCheckans({
      status: newarr,
    });

    if (checked) {
      setCanList({
        candidates: [...candidates, value],
        sawCandidate: [...candidates, value],
      });
    }
    
   
   
  };

  React.useEffect(() => {
    window.onscroll = () =>
      window.pageYOffset !== 0 && setisNextActive(0)

    return () => (window.onscroll = null);
  });

  // React.useEffect(() => {
  //   window.onscroll = () => 
  //     window.pageYOffset === window.innerHeight && setNextText("Submit")

  //   return () => (window.onscroll = null);
  // });
  useEffect(() => {
    console.log(NextText+" "+isNextActive);
  }, [NextText,isNextActive]);

  useEffect(() => {
    props.handleOnChangeCan(canList.candidates);
  }, [canList.candidates]);

  const refeshList = () => {
    const temparr = new Array(props.candidateList.length).fill(0);
    setCheckans({
      status: temparr,
    });
    console.log("refeshList");
    setCanList({
      candidates: [],
      sawCandidate: [],
    });
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h3" component="h2">
          {props.selectionCommetiee}
        </Typography>
        <p>
          Total {props.candidateList.length} candidate standing for {selection}{" "}
          seats give.
        </p>

        <Button onClick={refeshList} variant="text">
          Refresh List
        </Button>
        <br />

        {/* Iterate the whole candidate array to reduce the code complexity */}
        {props.candidateList.map((candidate, index) => (
          <>
            {/* {index+1} */}
            <Checkbox
              id={`can${index + 1}`}
              name={`${index + 1}`}
              value={candidate}
              onChange={handleOnChangeCan}
              label={candidate}
              checked={checkedans.status[index]}
              color="success"
            />
            <label htmlFor={`can${index + 1}`}>{candidate}</label> <br />
          </>
        ))}
        <Button onClick={handleNext} variant="contained" color="success" sx={{margin:"5px"}}>
          {NextText}
        </Button>
        <Button onClick={handlePrev} variant="contained" color="success" sx={{margin:"5px"}} disabled={0}> 
          Previous
        </Button>

      </Grid>
    </Grid>
  );
}

export default MainPortal;
