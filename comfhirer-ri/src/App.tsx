import {
  AppBar,
  Button,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import { ReactElement, useState } from 'react';

declare const window: any;

function App() {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Comfhirer
          </Typography>
        </Toolbar>
      </AppBar>
      <main style={{ margin: '2rem' }}>
        <MainArea />
      </main>
    </div>
  );
}

function MainArea(): ReactElement {
  const sampleValue = `Patient.identifier.[0].use="usual"
Patient.identifier.[0].type.coding.[0].system="http://terminology.hl7.org/CodeSystem/v2-0203"
Patient.identifier.[0].type.coding.[0].code="MR"
Patient.identifier.[0].system="urn:oid:1.2.36.146.595.217.0.1"
Patient.identifier.[0].value="12345"
Patient.identifier.[0].period.start="2001-05-06"
Patient.identifier.[0].assigner.display="Acme Healthcare"`;

  const [key, setKey] = useState<string>(sampleValue);
  const [fhir, setFhir] = useState<string>('');
  const getFhirJson = () => {
    try {
      let result = window.comfhirer.Compile(key);
      setFhir(result);
    } catch (error) {
      setFhir(error as string);
    }
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <Button fullWidth variant='outlined' onClick={getFhirJson}>
          Check
        </Button>
        <TextField
          sx={{
            mt: '4rem',
          }}
          fullWidth
          multiline
          label='Comfhirer key'
          variant='outlined'
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <Container
          sx={{
            border: '1px solid gray',
            height: '90vh',
            borderRadius: '5px',
            overflow: 'auto',
          }}
        >
          <pre>{JSON.stringify(fhir, null, 2)}</pre>
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
