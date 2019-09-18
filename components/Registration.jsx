import { useState, Fragment } from "react";
import {
  Typography, Stepper, Step, StepLabel, StepContent, Button,
  FormGroup, FormControl, MenuItem, Divider, InputAdornment, IconButton
} from "@material-ui/core";
import { FormField } from "./";
import { Search as SearchIcon } from "@material-ui/icons";
import css from "../less";

export default function Registration() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [`Personal Information`, `Contact Information`, `Additional Information`];

  const [values, setValues] = useState({
    title: "dr",
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    nationality: "",
    email: "",
    phone: "",
    postCode: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    country: "",
    occupation: "",
    taxAuthority: "",
    nationalInsurance: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const submitForm = () => console.log(values);

  const getStep = step => {
    switch (step) {
      case 0: return (
        <Fragment>
          <FormControl>
            <FormField
              onChange={handleChange('title')}
              value={values.title}
              key="title"
              select
              label="Title">
              <MenuItem value="dr">Dr.</MenuItem>
              <MenuItem value="miss">Miss</MenuItem>
              <MenuItem value="mr">Mr</MenuItem>
              <MenuItem value="mrs">Mrs</MenuItem>
              <MenuItem value="ms">Ms</MenuItem>
            </FormField>
          </FormControl>
          <FormControl>
            <FormField
              onChange={handleChange('firstName')}
              value={values.firstName}
              key="firstName"
              type="text"
              label="First Name" />
          </FormControl>
          <FormControl>
            <FormField
              onChange={handleChange('middleName')}
              value={values.middleName}
              type="text"
              label="Middle Name" />
          </FormControl>
          <FormControl>
            <FormField
              onChange={handleChange('lastName')}
              value={values.lastName}
              type="text"
              label="Last Name" />
          </FormControl>
          <FormControl>
            <FormField
              onChange={handleChange('dateOfBirth')}
              value={values.dateOfBirth}
              type="date"
              label="Date of Birth" />
          </FormControl>
          <FormControl>
            <FormField
              onChange={handleChange('nationality')}
              value={values.nationality}
              select
              label="Nationality">
              <MenuItem value="british">British</MenuItem>
              <MenuItem value="2">American</MenuItem>
              <MenuItem value="3">Other</MenuItem>
              <MenuItem value="4">Other</MenuItem>
              <MenuItem value="5">Other</MenuItem>
              <MenuItem value="5">Other</MenuItem>
              <MenuItem value="5">Other</MenuItem>
              <MenuItem value="5">Other</MenuItem>
            </FormField>
          </FormControl>
        </Fragment>
      );
      case 1: return (
        <Fragment>
          <FormControl>
            <FormField
              onChange={handleChange('email')}
              value={values.email}
              type="email" label="E-mail address" />
          </FormControl>
          <FormControl>
            <FormField
              onChange={handleChange('phone')}
              value={values.phone}
              type="phone" label="Phone number" />
          </FormControl>
          <Divider variant="middle" className={css.formDivider} />
          <FormControl>
            <FormField
              onChange={handleChange('postCode')}
              value={values.postCode}
              type="text" label="Postcode" InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      aria-label="Search address"
                      onClick={() => console.log('search addr')} >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }} />
          </FormControl>
          <FormControl>
            <FormField
              onChange={handleChange('addressLine1')}
              value={values.addressLine1}
              type="text" label="Address line 1" />
          </FormControl>
          <FormControl>
            <FormField
              onChange={handleChange('addressLine2')}
              value={values.addressLine2}
              type="text" label="Address line 2" />
          </FormControl>
          <FormControl>
            <FormField
              onChange={handleChange('city')}
              value={values.city}
              type="text" label="City" />
          </FormControl>
          <FormControl>
            <FormField
              onChange={handleChange('country')}
              value={values.country}
              select label="Country">
              <MenuItem value="1">United Kingdom</MenuItem>
              <MenuItem value="2">Another country</MenuItem>
              <MenuItem value="3">Other</MenuItem>
              <MenuItem value="4">Other</MenuItem>
              <MenuItem value="5">Other</MenuItem>
              <MenuItem value="5">Other</MenuItem>
              <MenuItem value="5">Other</MenuItem>
              <MenuItem value="5">Other</MenuItem>
            </FormField>
          </FormControl>
        </Fragment>
      );
      case 2: return (
        <Fragment>
          <FormControl>
            <FormField
              onChange={handleChange('occupation')}
              value={values.occupation}
              select label="Occupation">
              <MenuItem value="1">Admin</MenuItem>
              <MenuItem value="2">Teacher</MenuItem>
              <MenuItem value="3">Other</MenuItem>
              <MenuItem value="4">Other</MenuItem>
              <MenuItem value="5">Other</MenuItem>
              <MenuItem value="5">Other</MenuItem>
              <MenuItem value="5">Other</MenuItem>
              <MenuItem value="5">Other</MenuItem>
            </FormField>
          </FormControl>
          <FormControl>
            <FormField
              onChange={handleChange('nationalInsurance')}
              value={values.nationalInsurance}
              type="text" 
              label="National Insurance Number" />
          </FormControl>
          <FormControl>
            <FormField
              onChange={handleChange('taxAuthority')}
              value={values.taxAuthority}
              select label="Relevant Tax Authority">
              <MenuItem value="1">HM Revenue and Customs (UK)</MenuItem>
              <MenuItem value="2">Other (Non-UK)</MenuItem>
            </FormField>
          </FormControl>
          <Divider variant="middle" className={css.formDivider} />
          <FormControl>
            <FormField
              onChange={handleChange('password')}
              value={values.password}
              type="password" label="Password" />
          </FormControl>
          <FormControl>
            <FormField
              onChange={handleChange('confirmPassword')}
              value={values.confirmPassword}
              type="password" label="Confirm Password" />
          </FormControl>
        </Fragment>
      );
    }
  };

  return (
    <Fragment>
      {
        currentStep !== steps.length
          ? (<Fragment>
            <Typography variant="h5" component="h3" className={css.headingText}>
              Create Account
          </Typography>
            <Stepper activeStep={currentStep} orientation="vertical">
              {steps.map((label, index) => (
                <Step key={index}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    <FormGroup>
                      {getStep(currentStep)}
                    </FormGroup>
                    <div className={css.signupButtons}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => currentStep === steps.length - 1 ? submitForm() : setCurrentStep(currentStep + 1)} >
                        {currentStep === steps.length - 1 ? `Complete` : `Next`}
                      </Button>
                      {
                        currentStep !== 0
                        && <Button onClick={() => setCurrentStep(currentStep - 1)}>Back</Button>
                      }
                    </div>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Fragment>)
          : (<pre>{JSON.stringify(values)}</pre>)
      }
    </Fragment>
  );
};
