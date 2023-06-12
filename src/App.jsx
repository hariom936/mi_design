import NavBar from './components/NavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from './components/Grid';
import { Container} from '@mui/material';
import CakeSection from './components/CakeSection';
import ContactUs from './components/ContactUs';
const theme = createTheme({
    palette: {
      primary: {
        main: '#9C27B0',
      },
    },
  });

function App() {
 return(
      <ThemeProvider theme={theme} >
        <NavBar/>
        <Container>
        <Grid />
        </Container >
        <CakeSection /> 
        <ContactUs />
      </ThemeProvider>
 );
}

export default App;
