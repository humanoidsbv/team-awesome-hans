import React, { useState } from "react";
import Head from "next/head";

import { Button } from "../components/Button/Button";
import { GlobalStyles } from "../components/global";
import { Header } from "../components/Header/Header";
import { mockTimeEntries } from "../fixtures/time-entries";
import { PlusIcon } from "../components/Icon/PlusIcon";
import { TimeEntries } from "../components/TimeEntry/TimeEntries";
import { Wrapper } from "../components/Wrapper/Wrapper.styled";

const App = () => {
  const [timeEntries, setTimeEntries] = useState(mockTimeEntries);
  const handleClick = () => {
    setTimeEntries([
      ...timeEntries,
      {
        id: 0.8524250995148188,
        client: "Port of Rotterdam",
        startTimestamp: "2019-09-26T16:00:00.000Z",
        stopTimestamp: "2019-09-26T18:00:00.000Z",
      },
    ]);
  };

  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <title>team awesome</title>
      </Head>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <Button type="Primary" onClick={handleClick}>
          <span>New time entry</span>
          <PlusIcon />
        </Button>
        <TimeEntries timeEntries={timeEntries} />
      </Wrapper>
    </div>
  );
};

export default App;
