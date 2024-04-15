import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import MainPage from "../../Components/MainPage/mainPage";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import StatBox from "../../Components/StatBox";
import Header from "../../Components/Header";
import LineChart from "../../Components/LineChart";
import Timelined from "../../Components/Timeline";
import ProgressCircle from "../../Components/PrograssCircle";
import BarChart from "../../Components/BarChart";
import GeographyChart from "../../Components/GeographyChart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MainPage>
      <Box m="20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        </Box>
        {/* GRID & CHARTS */}
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap="20px">
          {/* Stat Boxes */}
          <Box
            gridColumn={{ xs: "span 12", md: "span 3" }}
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="12,361"
              subtitle="Emails Sent"
              progress="0.75"
              increase="+14%"
              icon={
                <EmailIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn={{ xs: "span 12", md: "span 3" }}
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="431,22"
              subtitle="Sales Obtained"
              progress="0.50"
              increase="+21%"
              icon={
                <PointOfSaleIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn={{ xs: "span 12", md: "span 3" }}
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="32,44"
              subtitle="New Clients"
              progress="0.30"
              increase="+5%"
              icon={
                <PersonAddIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn={{ xs: "span 12", md: "span 3" }}
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="1,325"
              subtitle="Traffic Received"
              progress="0.80"
              increase="+43%"
              icon={
                <TrafficIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          {/* Revenue Generated */}
          <Box
            gridColumn={{ xs: "span 12", md: "span 8" }}
            backgroundColor={colors.primary[400]}
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  Revenue Generated
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  color={colors.greenAccent[500]}
                >
                  $59,342.32
                </Typography>
              </Box>
              <IconButton mt="15px">
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
            <Box height="250px" width="100%">
              <LineChart isDashboard={true} />
            </Box>
          </Box>
          {/* Timeline */}
          <Box
            gridColumn={{ xs: "span 12", md: "span 4" }}
            backgroundColor={colors.primary[400]}
            overflow="auto"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              colors={colors.grey[100]}
              p="15px"
            >
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
              >
                Timeline
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p="15px"
            >
              <Timelined />
            </Box>
          </Box>
          {/* Campaign */}
          <Box
            gridColumn={{ xs: "span 12", md: "span 4" }}
            backgroundColor={colors.primary[400]}
            p="30px"
          >
            <Typography variant="h5" fontWeight="600">
              Campaign
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="25px"
            >
              <ProgressCircle size="125" />
              <Typography
                variant="h5"
                color={colors.greenAccent[500]}
                sx={{ mt: "15px" }}
              >
                $48,352 revenue generated
              </Typography>
              <Typography textAlign="center">
                Includes extra misc expenditures and costs
              </Typography>
            </Box>
          </Box>
          {/* Sales Quantity */}
          <Box
            gridColumn={{ xs: "span 12", md: "span 4" }}
            backgroundColor={colors.primary[400]}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ padding: "30px 30px 0 30px" }}
            >
              Sales Quantity
            </Typography>
            <Box height="250px" width="100%" mt="20px">
              <BarChart isDashboard={true} />
            </Box>
          </Box>
          {/* Geography Based Traffic */}
          <Box
            gridColumn={{ xs: "span 12", md: "span 4" }}
            backgroundColor={colors.primary[400]}
            padding="30px"
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ marginBottom: "15px" }}
            >
              Geography Based Traffic
            </Typography>
            <Box height="200px" width="100%" mt="20px">
              <GeographyChart isDashboard={true} />
            </Box>
          </Box>
        </Box>
      </Box>
    </MainPage>
  );
};

export default Dashboard;
