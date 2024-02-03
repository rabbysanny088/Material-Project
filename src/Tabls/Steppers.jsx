import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';

const steps = [
    {
        label: "8:50",
        description: (
          <div
            style={{
              fontSize: "13px",
              fontWeight: "700",
            }}
          >
            Call to customer{" "}
            <span style={{ color: "blue", fontWeight: "400", cursor: "pointer" }}>
              Jacob
            </span>{" "}
            and discuss the
          </div>
        ),
      },
    {
        label: "8:50",
        description: (
          <div
            style={{
              fontSize: "13px",
              fontWeight: "700",
            }}
          >
            Call to customer{" "}
            <span style={{ color: "blue", fontWeight: "400", cursor: "pointer" }}>
              Jacob
            </span>{" "}
            and discuss the
          </div>
        ),
      },
    {
        label: "8:50",
        description: (
          <div
            style={{
              fontSize: "13px",
              fontWeight: "700",
            }}
          >
            Call to customer{" "}
            <span style={{ color: "blue", fontWeight: "400", cursor: "pointer" }}>
              Jacob
            </span>{" "}
            and discuss the
          </div>
        ),
      },
    {
        label: "8:50",
        description: (
          <div
            style={{
              fontSize: "13px",
              fontWeight: "700",
            }}
          >
            Call to customer{" "}
            <span style={{ color: "blue", fontWeight: "400", cursor: "pointer" }}>
              Jacob
            </span>{" "}
            and discuss the
          </div>
        ),
      },
];

export default function Steppers() {



  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 10 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}