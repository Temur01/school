import { Grid, Paper, Typography } from "@mui/material";
import Title from "../components/Title";
import menuElements from "../data/menu";

const SchoolPage = () => {
  return (
    <>
      <Title>Maktab</Title>
      <Grid container spacing={3}>
        {menuElements.map((item) => (
          <Grid item key={item.text} sm={6} md={4} xl={3}>
            <Paper
              elevation={6}
              sx={{
                p: 5,
                cursor: "pointer",
                transition: "0.4s",
                "&:hover": { background: "#06345C", color: "white" },
              }}
              align="center"
            >
              <span style={{ fontSize: "26px", marginBottom: "10px" }}>
                {item.icon}
              </span>
              <Typography sx={{ fontSize: "20px" }}>{item.text}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SchoolPage;
