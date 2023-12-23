import { Suspense, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import { ColorModeContext, useMode } from 'theme';
import { CssBaseline,ThemeProvider} from "@mui/material"
import Topbar from './scenes/global/Topbar';
import Dashboard from './scenes/dashboard';
import Sidebar from './scenes/global/Sidebar';
import Team from './scenes/team';
import Invoices from './scenes/invoices';
import Contacts from './scenes/contacts';
import Form from './scenes/form';
import Calendar from './scenes/calendar';
import FAQ from './scenes/faq';
import BarChart from './BarChart';
// import Line from './scenes/line';
// import Pie from './scenes/pie';
// // import Geography from './scenes/geography';

export const App = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return ( 
  <>
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className="app">
        <Suspense fallback={'Loading...'}>
          <Sidebar isSidebar={isSidebar}/>
        <main className="content">
          <Topbar setIsSidebar={setIsSidebar}/>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/team" element={<Team/>} />
            <Route path="/invoices" element={<Invoices/>} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/form" element={<Form/>} />
            <Route path="/calendar" element={<Calendar/>} />
            <Route path="/faq" element={<FAQ/>} />
            <Route path="/bar" element={<BarChart/>} />
            {/* <Route path="/line" element={<Line/>} /> */}
            {/* <Route path="/pie" element={<Pie/>} /> */}
            {/* <Route path="/geography" element={<Geography/>} /> */}
          </Routes>
        </main>
      </Suspense>
    </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  </>
  );
};
