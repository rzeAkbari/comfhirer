import { Grid, TextField, Button, Container, Tooltip } from '@mui/material';
import { ReactElement, useState } from 'react';
declare const window: any;

function ComfhirerCaller(): ReactElement {
  const defaultValue = `Patient.identifier.[0].use="usual"
  Patient.identifier.[0].type.coding.[0].system="http://terminology.hl7.org/CodeSystem/v2-0203"
  Patient.identifier.[0].type.coding.[0].code="MR"
  Patient.identifier.[0].system="urn:oid:1.2.36.146.595.217.0.1"
  Patient.identifier.[0].value="12345"
  Patient.identifier.[0].period.start="2001-05-06"
  Patient.identifier.[0].assigner.display="Acme Healthcare"`;

  const [key, setKey] = useState<string>(defaultValue);
  const [derviedKey, setDerviedKey] = useState<string>();
  const [intellisense, setIntellisense] = useState<string>();
  const [fhir, setFhir] = useState<string>();
  const getFhirJson = () => {
    try {
      let result = window.comfhirer.Compile(key);
      setFhir(result);
    } catch (error) {
      setFhir(error as string);
    }
  };
  const handleDrivedKey = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setDerviedKey(e.target.value);
    const keys = e.target.value.split('.');
    if (keys.length > 1) {
      const intellisense: string[] = window.comfhirer.GetIntellisense(
        keys[keys.length - 2]
      );
      const result = intellisense.length > 1 ? intellisense.join(' , ') : '';
      setIntellisense(result);
    } else setIntellisense('');
  };
  return (
    <Grid data-testid='caller' container spacing={2}>
      <Grid item xs={6}>
        <Tooltip title={intellisense} arrow>
          <TextField
            sx={{
              mb: '2rem',
              letterSpacing: '1px',
            }}
            fullWidth
            multiline
            label='Key Maker'
            variant='outlined'
            value={derviedKey}
            onChange={handleDrivedKey}
          />
        </Tooltip>
        <TextField
          sx={{
            mb: '2rem',
            letterSpacing: '1px',
          }}
          fullWidth
          multiline
          label='Comfhirer key'
          variant='outlined'
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <Button
          variant='contained'
          fullWidth
          color='secondary'
          onClick={getFhirJson}
        >
          Check
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Container
          sx={{
            border: '1px solid gray',
            height: '80vh',
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

export default ComfhirerCaller;
